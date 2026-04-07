'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, ChevronDown, Copy, BarChart3, Zap, Shield } from 'lucide-react';

export default function CreatePoolPage() {
  const [feeTier, setFeeTier] = useState('0.05%');

  const feeTiers = [
    { label: '0.01%', sub: 'Stable', popular: false },
    { label: '0.05%', sub: 'Popular', popular: true },
    { label: '0.3%', sub: 'Standard', popular: false },
    { label: '1%', sub: 'Exotic', popular: false },
  ];

  return (
    <div className="pt-16 pb-24 px-4 max-w-[1200px] mx-auto flex flex-col items-center relative z-10">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white uppercase italic">
          Create <span className="text-white/20 not-italic font-extralight">Pool</span>
        </h1>
        <p className="text-white/40 max-w-lg mx-auto text-sm uppercase font-bold tracking-widest leading-relaxed">
          Deploy a new liquidity position with precision. The Monolith protocol ensures optimal tick spacing and fee management.
        </p>
      </header>

      {/* Monolith Creation Module */}
      <div className="w-full max-w-2xl glass-morphism rounded-lg p-3 relative overflow-hidden">
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-8 md:p-10">
          
          {/* Currency Selection */}
          <div className="space-y-6 mb-12">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">1. Select Pair</h2>
            
            {/* Currency 0 */}
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-6 flex items-center justify-between group hover:bg-white/[0.05] transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden shadow-xl">
                  <img 
                    alt="ETH" 
                    className="w-full h-full object-cover grayscale" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyBJ6dx7vT1mg_3drQL618CK-nMcqkKxYPp-1N2I7uwNGV3uvZOVwXlGDu9v6MGompNZXWxHw28gmD_mcA2BeC0awPYkVTzTH3h0VlogihrtXJsMr0cjZvBV1HoLs9e8bLXS3FPvTXDlsDl_RWX_A9ZToGYN04uJcupPdlBE18zEnZ8Fc1zZsaQ29omi_Q_YQ4Pqy7q3-r-H0uwOqkrt3ik6SaFWT69EJDDJh0BgnTdcj4-auksNElW64AQtZo8VMyusWVngYicnHE"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-lg text-white tracking-tight uppercase">WETH</span>
                    <ChevronDown size={16} className="text-white/20" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[9px] text-white/20 tracking-tighter uppercase">
                    0xC02...6Cc2
                    <button className="hover:text-primary transition-colors">
                      <Copy size={10} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <input 
                  className="bg-transparent border-none p-0 text-right text-3xl font-light focus:ring-0 focus:outline-none w-32 placeholder:text-white/5 tracking-tighter" 
                  placeholder="0.0" 
                  type="text"
                />
              </div>
            </div>

            {/* Currency 1 */}
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-6 flex items-center justify-between group hover:bg-white/[0.05] transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden shadow-xl">
                  <img 
                    alt="USDC" 
                    className="w-full h-full object-cover grayscale" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx7m-dmGaq7hvHvAYJmL_nvN6bD9jtU1NrXD7JvhkQfA8vJ1WChCSt4dHrY-tx5Fb3JomAnduBlHIKCyokP9tGf74CdGnwa9D6zKeZKDxTX08l7SULaLGOgXTEvkcoBE8f32rS-vZ1S1fSQJQLu9iswJLeUBsshMHOhNecr3h4gueSSXF49CzROVR9uJV4ET6Vvp2SAJ4KBoMtSa1BoEuU4w6bKHQ2fyiqnn-Xwa8CbwdNvsZG0wprelHL6pMWDLGCW09rvxzMjjLA"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-lg text-white tracking-tight uppercase">USDC</span>
                    <ChevronDown size={16} className="text-white/20" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[9px] text-white/20 tracking-tighter uppercase">
                    0xA0b...eB48
                    <button className="hover:text-primary transition-colors">
                      <Copy size={10} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <input 
                  className="bg-transparent border-none p-0 text-right text-3xl font-light focus:ring-0 focus:outline-none w-32 placeholder:text-white/5 tracking-tighter" 
                  placeholder="0.0" 
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Fee Tier Section */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">2. Fee Tier</h2>
              <span className="text-[9px] text-white/20 font-mono font-bold tracking-widest uppercase">Tick Spacing: 10</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {feeTiers.map((tier) => (
                <button 
                  key={tier.label}
                  onClick={() => setFeeTier(tier.label)}
                  className={`border rounded-lg p-5 text-center transition-all group active:scale-95 ${
                    feeTier === tier.label 
                    ? 'bg-primary/10 border-primary ring-2 ring-primary/20' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className={`text-lg font-black tracking-tight ${feeTier === tier.label ? 'text-primary' : 'text-white'}`}>
                    {tier.label}
                  </div>
                  <div className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${feeTier === tier.label ? 'text-primary/60' : 'text-white/20'}`}>
                    {tier.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Starting Price Selection */}
          <div className="mb-12">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-6">3. Starting Price</h2>
            <div className="bg-white/5 border border-white/5 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-black tracking-tighter text-white">2,540.12</div>
                  <div className="text-[9px] text-white/30 font-bold tracking-widest mt-2 uppercase">USDC per WETH</div>
                </div>
                <div className="hidden md:block h-12 w-[1px] bg-white/10"></div>
                <div className="text-center md:text-right">
                  <div className="text-4xl font-black tracking-tighter text-white/20">0.00039</div>
                  <div className="text-[9px] text-white/30 font-bold tracking-widest mt-2 uppercase">WETH per USDC</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['1:1', '2:1', '1:2', 'CUSTOM'].map((opt) => (
                  <button 
                    key={opt}
                    className={`py-3 px-4 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                      opt === 'CUSTOM' 
                      ? 'bg-primary text-black' 
                      : 'bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Primary Action */}
          <button className="w-full py-6 rounded-full bg-primary text-black font-black text-sm uppercase tracking-[0.4em] gold-glow hover:brightness-110 active:scale-[0.98] transition-all duration-300">
            Initialize Pool
          </button>
          
          <p className="text-center text-[9px] text-white/20 uppercase tracking-[0.4em] mt-8 font-bold">
            Protocol Gateway Authorization Required
          </p>
        </div>
      </div>

      {/* Secondary Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24 max-w-[1000px]">
        {[
          { icon: <BarChart3 className="text-primary" />, title: 'Impermanent Loss', desc: 'Advanced protection algorithms to minimize directional exposure on volatile pairs.' },
          { icon: <Zap className="text-primary" />, title: 'Gas Optimized', desc: "EmelSwap's V4 architecture reduces deployment costs by up to 45% compared to peers." },
          { icon: <Shield className="text-primary" />, title: 'Multi-Audit', desc: 'The factory contracts have been audited by leading security firms in the ecosystem.' }
        ].map((card, i) => (
          <div key={i} className="glass-morphism p-8 rounded-lg bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
            <div className="mb-6">{card.icon}</div>
            <h3 className="text-lg font-black text-white tracking-tight mb-3 uppercase">{card.title}</h3>
            <p className="text-xs text-white/30 leading-relaxed font-medium uppercase tracking-wider">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
