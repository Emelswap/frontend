'use client';

import { useState } from 'react';
import { useWallets } from '@privy-io/react-auth';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { createPublicClient, http } from 'viem';
import { arcTestnet } from 'viem/chains';

export default function AddToken() {
  const { wallets } = useWallets();
  const { isConnected, chainId: currentChainId } = useAccount();
  const { switchChainAsync } = useSwitchChain();

  const [address, setAddress] = useState('');
  const [chainId, setChainId] = useState('5042002');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const targetChainId = parseInt(chainId, 10);
    console.log({
      currentChainId,
      targetChainId, 
    })
    if (!address || !chainId || !file) {
      setMessage({ text: 'Please fill in all fields and select a logo.', type: 'error' });
      return;
    }

    if (!isConnected) {
      setMessage({ text: 'Please connect your wallet first.', type: 'error' });
      return;
    }

    try {
      setLoading(true);

      // 1. Wagmi strict network check - forcefully prompt a switch if on the wrong network
      if (currentChainId !== targetChainId) {
        setMessage({ text: 'Switching to the correct network...', type: 'info' });
        try {
          await switchChainAsync({ chainId: targetChainId });
        } catch (switchError) {
          throw new Error("You must switch your wallet to the correct network to add a token.");
        }
      }

      // 2. Fetch token details directly via Public RPC without waiting for the wallet provider!
      setMessage({ text: 'Fetching token details from blockchain...', type: 'info' });
      
      const publicClient = createPublicClient({ 
        chain: targetChainId === arcTestnet.id ? arcTestnet : arcTestnet, // Defaulting to arcTestnet RPC
        transport: http() 
      });

      let fetchedName = '';
      let fetchedSymbol = '';
      try {
        const abi = [
          { name: 'name', type: 'function', stateMutability: 'view', inputs: [], outputs: [{ type: 'string' }] },
          { name: 'symbol', type: 'function', stateMutability: 'view', inputs: [], outputs: [{ type: 'string' }] }
        ] as const;

        fetchedName = await publicClient.readContract({
          address: address as `0x${string}`,
          abi,
          functionName: 'name'
        });
        
        fetchedSymbol = await publicClient.readContract({
          address: address as `0x${string}`,
          abi,
          functionName: 'symbol'
        });
      } catch (err) {
        throw new Error("Could not fetch token details. Ensure you are on the correct network and the address is an ERC20 token.");
      }

      setMessage({ text: 'Uploading logo to database...', type: 'info' });

      const formData = new FormData();
      formData.append('file', file);

      // 2. Add the logo to Supabase
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) {
        throw new Error(uploadData.error || 'Failed to upload image');
      }

      const logoUrl = uploadData.url;

      // 3. Add the token to Supabase
      setMessage({ text: 'Saving token to database...', type: 'info' });
      console.log({
        address,
        chainId,
        name: fetchedName,
        symbol: fetchedSymbol,
        logo: logoUrl,
      })
      const tokenRes = await fetch('/api/tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address,
          chainId,
          name: fetchedName,
          symbol: fetchedSymbol,
          logo: logoUrl,
        }),
      });

      const tokenData = await tokenRes.json();
      if (!tokenRes.ok) {
        throw new Error(tokenData.error || "Failed to add token to database");
      }

      setMessage({ text: `Token ${fetchedSymbol} successfully added!`, type: 'success' });
      setAddress('');
      setFile(null);
      setPreviewUrl(null);
      // Optional: Redirect or refresh
    } catch (error: any) {
      console.error(error);
      setMessage({ text: error.message, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center p-6 relative overflow-hidden min-h-[calc(100vh-160px)]">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Add Token Form Card */}
      <div className="w-full max-w-xl bg-surface border border-primary/10 p-8 md:px-12 md:py-10 relative z-10 shadow-2xl overflow-hidden">
        {/* Form Header */}
        <div className="mb-8 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-2">Internal Protocol Import</span>
          <h1 className="text-4xl font-black tracking-tighter text-white leading-none mb-2 uppercase">Add Custom Token</h1>
          <p className="text-slate-400 text-sm tracking-tight opacity-80">Import a token to trade on Arc Testnet</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Chain Selection (Read Only) */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Chain ID</label>
            <div className="w-full bg-surface/50 border border-primary/10 p-4 flex items-center justify-between group cursor-not-allowed">
              <span className="text-white font-bold text-sm">Arc Testnet (5042002)</span>
              <span className="material-symbols-outlined text-primary/40 text-sm">lock</span>
            </div>
          </div>

          {/* Token Contract Address */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Token Contract Address</label>
            <div className="relative group">
              <input 
                className="w-full bg-black border border-primary/20 p-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-primary transition-colors font-mono text-sm" 
                placeholder="0x..." 
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-600 text-lg">search</span>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Token Logo Section</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Upload Box */}
              <label 
                className="border border-dashed border-primary/30 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all group overflow-hidden relative"
              >
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {previewUrl ? (
                   <img src={previewUrl} className="absolute inset-0 w-full h-full object-contain p-2 opacity-50 group-hover:opacity-100 transition-opacity" alt="preview" />
                ) : (
                  <>
                    <span className="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">cloud_upload</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Upload Logo</span>
                  </>
                )}
              </label>
              
              {/* Preview Box Detail */}
              <div className="bg-surface/50 border border-primary/10 p-4 flex flex-col justify-center items-center text-center">
                {file ? (
                  <span className="text-[10px] font-bold text-primary truncate max-w-full uppercase tracking-tighter">{file.name}</span>
                ) : (
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">No logo selected</span>
                )}
              </div>
            </div>
          </div>

          {/* Warning Alert */}
          <div className="bg-red-500/5 border-l-2 border-red-500 p-4 flex gap-4">
            <span className="material-symbols-outlined text-red-500 text-xl">warning</span>
            <p className="text-[10px] leading-relaxed text-red-400 font-bold uppercase tracking-wide">
              Verified Smart Contracts only. Import at your own risk. This action is recorded on the Public Ledger.
            </p>
          </div>

          {/* Status Message */}
          {message.text && (
            <div className={`p-4 text-xs font-bold uppercase tracking-widest border ${
              message.type === 'error' ? 'bg-red-500/10 border-red-500/50 text-red-400' : 'bg-primary/10 border-primary/50 text-primary'
            }`}>
              {message.text}
            </div>
          )}

          {/* Primary Action */}
          <div className="pt-2">
            <button 
              disabled={loading}
              className={`w-full h-14 bg-primary text-black font-black uppercase tracking-[0.2em] text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,210,23,0.2)] hover:shadow-primary/40 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110 active:scale-[0.98]'}`}
              type="submit"
            >
              {loading ? 'Processing...' : 'Add Token'}
              <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
            </button>
          </div>
        </form>

        {/* Decorative Graphic */}
        <div className="hidden lg:block absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none select-none">
          <div className="text-[120px] font-black tracking-tighter leading-none text-primary">IMPORT</div>
        </div>
      </div>
    </div>
  );
}
