'use client';

import React from 'react';
import { ArrowDownUp, ChevronDown } from 'lucide-react';

export default function SwapPage() {
  const [slippage, setSlippage] = React.useState('5');
  const [isAutoSlippage, setIsAutoSlippage] = React.useState(true);

  const handleSlippageChange = (val: string) => {
    setSlippage(val);
    setIsAutoSlippage(false);
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 pt-8 pb-40">
      <div className="w-full max-w-[500px] relative z-10">
        
        {/* Header Section (Simplified) */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black tracking-tight text-white/10 uppercase italic">
            {/* Gateway */}
          </h1>
        </div>

        {/* Swap Interface (The Monolith) */}
        <div className="glass-morphism rounded-lg p-3 relative overflow-hidden">

          <div className="space-y-1.5">
            {/* Input Asset */}
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-8 group focus-within:bg-white/[0.06] focus-within:border-primary/30 transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="text-white/30 font-bold text-[10px] letter-spacing-widest uppercase">Sell</span>
                <span className="text-white/40 text-[10px] font-mono tracking-tight">Bal: 1.420 ETH</span>
              </div>
              <div className="flex items-center justify-between">
                <input 
                  className="bg-transparent border-none p-0 text-4xl font-light focus:ring-0 focus:outline-none w-full placeholder:text-white/5 tracking-tighter" 
                  placeholder="0.00" 
                  type="text" 
                  defaultValue="1.00"
                />
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center gap-3 pl-2 pr-5 py-2 rounded-full transition-all shadow-xl">
                  <div className="w-9 h-9 rounded-full bg-white/10 p-0.5 border border-white/5 flex items-center justify-center overflow-hidden">
                    <img alt="ETH" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2RQi6abClcDynKDdRIdbE5pu_DSvgfOj9EiLt9IQL4fvTthd6O44dxTJmVeZ7WkfkCsQ2FqavvLpupdrgu4NxwO59A7bOUlNOlqu3eD7HW1twMC9pp0IUnxeG2LuJ8yasZVRQN7IJmSyBlZVtMFTRZUYxKPnlC-EXGl8VgtcKwi10HYrjk67fh_0Mf6FKw118ZCrdnljSFjBW1zB-aq3R7ECThECVIhDusLxmCsxeEUJiAY6Wo6BRCY7RUxn7GHqNkOSzVMiPEat0"/>
                  </div>
                  <span className="font-black text-sm tracking-widest uppercase">ETH</span>
                  <ChevronDown size={16} className="text-white/30" />
                </button>
              </div>
            </div>

            {/* Interchange Trigger */}
            <div className="flex justify-center -my-5 relative z-20">
              <button className="bg-black text-primary w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 shadow-2xl transition-all duration-500 hover:rotate-180 group">
                <ArrowDownUp size={20} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Output Asset */}
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-8 group focus-within:bg-white/[0.06] focus-within:border-primary/30 transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="text-white/30 font-bold text-[10px] letter-spacing-widest uppercase">Buy</span>
                <span className="text-white/40 text-[10px] font-mono tracking-tight">Bal: 4,102 USDC</span>
              </div>
              <div className="flex items-center justify-between">
                <input 
                  className="bg-transparent border-none p-0 text-4xl font-light focus:ring-0 focus:outline-none w-full placeholder:text-white/5 tracking-tighter" 
                  placeholder="0.00" 
                  type="text" 
                  value="2,431.12"
                  readOnly
                />
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center gap-3 pl-2 pr-5 py-2 rounded-full transition-all shadow-xl">
                  <div className="w-9 h-9 rounded-full bg-white/10 p-0.5 border border-white/5 flex items-center justify-center overflow-hidden">
                    <img alt="USDC" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBloYkWcAZ6nPHwnmfr57eTpo9sQHjaPnq1pOAEahqybC22VT7cuyiepuqlQxTcbSBZWhCoIeGUkF4SDg4ujaMebFNeZozVwNLw3YEYuyeQi18wPDMjSvuKmYeePF6IFZLtG4qtswQf3z0TvGOOdNC6RVS_AXRLVTlaptmOzoPoC8tQNeXJkNFcCNS8wO9mxPgY9RgGPFN5FfRIF8vZgxnP8mn0sCLN_IFvdxkbCD7L-V_UVNWhc0agxbWvwV63hi5VKn0dqAerM1fd"/>
                  </div>
                  <span className="font-black text-sm tracking-widest uppercase">USDC</span>
                  <ChevronDown size={16} className="text-white/30" />
                </button>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="px-8 py-8 space-y-6">
            <div className="flex justify-between items-center pb-6 border-b border-white/[0.03]">
              <span className="text-white/20 text-[10px] font-bold uppercase letter-spacing-widest">Exchange Rate</span>
              <span className="text-white/80 text-[11px] font-mono bg-white/5 px-3 py-1 rounded-sm border border-white/5">1 ETH ≈ 2,431.12 USDC</span>
            </div>


            {/* Transaction Specifics */}
            <div className="flex justify-between items-end gap-6">
              <div className="flex-1 text-left space-y-1">
                <p className="text-[9px] text-white/20 uppercase letter-spacing-widest font-black">Gas Est.</p>
                <p className="text-[11px] font-mono text-white/70">~ $4.21</p>
              </div>
              <div className="text-right space-y-2">
                <p className="text-[9px] text-white/20 uppercase letter-spacing-widest font-black">Max Slippage</p>
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5">
                  <button 
                    onClick={() => { setIsAutoSlippage(true); setSlippage('5'); }}
                    className={`px-3 py-1 text-[9px] font-black uppercase tracking-tighter rounded-full transition-all ${isAutoSlippage ? 'bg-primary text-black' : 'text-white/30 hover:text-white'}`}
                  >
                    Auto
                  </button>
                  <div className="relative flex items-center">
                    <input 
                      type="text" 
                      value={isAutoSlippage ? '5.0' : slippage}
                      onChange={(e) => handleSlippageChange(e.target.value)}
                      className={`w-12 bg-transparent border-none p-0 text-right text-[11px] font-mono focus:ring-0 focus:outline-none placeholder:text-white/10 ${isAutoSlippage ? 'text-white/70' : 'text-white/70'}`}
                    />
                    <span className={`text-[10px] ml-1 font-bold ${isAutoSlippage ? 'text-white/70' : 'text-white/30'}`}>%</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-5 rounded-full bg-primary text-black font-black text-xs uppercase tracking-[0.3em] gold-glow hover:brightness-110 active:scale-[0.98] transition-all duration-300">
              Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
