'use client';

import React from 'react';

export default function ProfilePage() {
  const assets = [
    { name: 'Ethereum', symbol: 'ETH', balance: '32.4', value: '$84,200.00', change: '+4.2%', allocation: '58.9%', color: 'bg-[#627eea]/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClYLTjMo-ECiwi1rxIYCry-M0GiEH4kWXDlAh3entO2pdN5tPzkWY_rajik19c48DLkT9cEzl40ERJ6fZ795zPp-nbGSuhplgI_gG2zeEM6zhGn6If4syR89Ar5sFHRQdCCuOPiNTgH8JzmxtzhbgcEgkIqzVBi1jJVBmxj4TCZvd_SEWAw8-wX2D04wS5s3UfTJC38p8wVqSmuaeug1kz6BFqmj9WEQjsx7pjtHm2NMxo5ZdufoPCwF1cgc5VVN7uMIbcWzFIv9It' },
    { name: 'Wrapped Bitcoin', symbol: 'WBTC', balance: '0.68', value: '$45,300.00', change: '+1.8%', allocation: '31.7%', color: 'bg-[#f7931a]/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9fS3D-HZ_-lGQ2BXSLW-iFGfMzXneWXpusuEWp-7z3SHyHuEbnch2ViRXS52mWEl4ZMkgM1pJGdwy1SMUbN-l3oDHFl8zDeb1OCfqI0u40yUnBvRHf--2uli5lSgEHgnEZamTswfIDt63FeIXnlTad5IQf9y1YZKyyfc2ONeHAhYs1akExVKqWyg6oQW8WSfmPNVDWtZk8EwV1hN3XFnV0NgFvOFKz-BdMuiYLhtQquqDuiNl_KoodMz1BFPwvqug0iaZvnuBcxIS' },
    { name: 'emelSwap', symbol: 'EMEL', balance: '4,200', value: '$13,350.42', change: '+28.4%', allocation: '9.4%', color: 'bg-[#FFD217]/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWFpLMohjGa7qnXjSRSnntdmhqsMbsPGgdqpOGz02maqDfEPKszPIHkkpRF9VBzgw_W-wtmLNwETLRnOwd76kwHPILD7wq_hn4ltYF49-_BXC5uiyrXhXivz_gVSzLV_pPAeok81nHjf_mJDQq1ZtxE--g4FL-vZtBChiYRgdvk0R3Ock_M--Fz3dErK5rQeQTMkve8x0NonOqfFxlWxeevGv4XC7DyCb9VFhaHGTtVKY8Rnv3OdvOAAdsO2BJLotRq8mgS1-ReN6b', isNative: true },
  ];

  return (
    <div className="pt-8 pb-40 px-6 max-w-4xl mx-auto flex flex-col items-center relative z-10">
      
      {/* Hero Section */}
      <section className="w-full text-center mb-16">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Total Profile Value</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4">
          $142,850.<span className="text-white/40">42</span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-tertiary-dim font-bold bg-tertiary-dim/10 px-4 py-1.5 rounded-full w-fit mx-auto border border-tertiary-dim/20">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          <span className="text-sm tracking-tight">+12.5% ($15,240.00)</span>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="flex gap-2 p-1 bg-white/[0.03] rounded-full mb-12 shadow-inner border border-white/5 backdrop-blur-md">
        <button className="px-10 py-3 rounded-full bg-white/10 text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg ring-1 ring-white/10">
          Tokens
        </button>
        <button className="px-10 py-3 rounded-full text-white/40 font-bold text-xs uppercase tracking-widest hover:text-white transition-all">
          Activity
        </button>
      </div>

      {/* Token Distribution Bento */}
      <div className="w-full space-y-6">
        {assets.map((asset, idx) => (
          <div 
            key={idx} 
            className={`group bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] p-8 rounded-lg transition-all duration-500 cursor-pointer ${asset.isNative ? 'ring-1 ring-primary/20' : ''}`}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 ${asset.color} rounded-full flex items-center justify-center p-3 transition-transform duration-500 group-hover:scale-110`}>
                  <img alt={asset.symbol} className="w-full h-full object-contain" src={asset.img}/>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black text-white tracking-tight">{asset.name}</h3>
                    {asset.isNative && (
                      <span className="bg-primary text-black text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Native</span>
                    )}
                  </div>
                  <p className="text-white/40 text-[10px] font-black tracking-[0.2em] uppercase mt-1">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-white tracking-tight">{asset.value}</p>
                <p className="text-tertiary-dim text-sm font-black mt-1">{asset.change}</p>
              </div>
            </div>

            {/* Allocation Progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-end text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                <span>Allocation: {asset.allocation}</span>
                <span className="font-mono">{asset.balance} {asset.symbol}</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,210,23,0.3)]" 
                  style={{ width: asset.allocation }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <button className="mt-16 bg-white/[0.03] text-white hover:text-primary border border-white/5 hover:border-primary/20 px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center gap-4 active:scale-95 group backdrop-blur-md shadow-2xl">
        <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform duration-500">add</span>
        Add Asset to Profile
      </button>
    </div>
  );
}
