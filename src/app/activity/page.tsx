'use client';

import React, { useState } from 'react';

const transactions = [
  { 
    id: 1,
    title: 'Swap ETH to USDT', 
    pool: 'Uniswap V3', 
    type: 'Swap', 
    amount: '-1.20 ETH', 
    secondary: '+2,842.12 USDT', 
    status: 'Confirmed', 
    time: '2 mins ago',
    icon: 'swap_horiz',
    hash: '0x4f...92a',
    iconColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  { 
    id: 2,
    title: 'Add Liquidity', 
    pool: 'Zama Protocol', 
    type: 'Added Liquidity', 
    amount: '0.5 ETH / 1,200 USDC', 
    secondary: 'LP Token Minted', 
    status: 'Confirmed', 
    time: '12 mins ago',
    icon: 'add_box',
    hash: '0x7e...11c',
    iconColor: 'bg-primary/10 text-primary border-primary/20'
  },
  { 
    id: 3,
    title: 'Claim Rewards', 
    pool: 'Staking Vault', 
    type: 'Claimed Fees', 
    amount: '+142.50 ZAMA', 
    status: 'Confirmed', 
    time: '4 hours ago',
    icon: 'payments',
    hash: '0x2a...bb4',
    iconColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    amountColor: 'text-green-500'
  },
  { 
    id: 4,
    title: 'Swap USDC to ETH', 
    pool: 'SushiSwap', 
    type: 'Swap', 
    amount: '-1,500.00 USDC', 
    secondary: 'Est. +0.58 ETH',
    status: 'Pending', 
    time: 'Just now',
    icon: 'sync',
    hash: '0xbc...df8',
    iconColor: 'bg-primary/20 text-primary border-primary/40',
    pending: true
  },
  { 
    id: 5,
    title: 'Approve USDC', 
    pool: '1inch Network', 
    type: 'Approvals', 
    amount: 'Unlimited', 
    status: 'Confirmed', 
    time: '1 day ago',
    icon: 'lock_open',
    hash: '0x9d...af2',
    iconColor: 'bg-white/5 text-white border-white/10'
  },
];

export default function ActivityPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <main className="pt-8 pb-40 px-6 max-w-[1200px] mx-auto relative z-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-3 uppercase text-white">
            Activity Vault
          </h1>
          <p className="text-white/50 text-lg max-w-2xl font-medium">
            Detailed log of your on-chain movements across the emelSwap liquidity network.
          </p>
        </div>
        <button className="bg-primary text-black px-8 py-3 rounded-full font-black flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg gold-glow">
          <span className="material-symbols-outlined font-bold">download</span>
          EXPORT CSV
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 border-b border-white/10 mb-10">
        <button className="pb-5 text-white/40 font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
          Tokens
        </button>
        <button className="pb-5 text-primary border-b-2 border-primary font-black uppercase tracking-widest text-xs flex items-center gap-3">
          Activity 
          <span className="bg-primary text-black text-[10px] px-2 py-0.5 rounded-full font-black">24</span>
        </button>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Filter by type</label>
            <div className="relative">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center justify-between gap-10 bg-black border border-primary/50 px-5 py-3 rounded-xl text-sm font-bold transition-all min-w-[220px] text-white group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">filter_list</span>
                  All types
                </div>
                <span className={`material-symbols-outlined text-white/40 group-hover:text-primary transition-all ${filterOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              
              {filterOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-black border border-primary/30 rounded-xl shadow-2xl z-20 py-2 overflow-hidden backdrop-blur-xl">
                  <button className="w-full text-left px-5 py-3 text-sm font-bold text-primary bg-primary/10 border-l-2 border-primary">All types</button>
                  <button className="w-full text-left px-5 py-3 text-sm font-bold text-white/70 hover:bg-white/5 hover:text-white transition-colors">Swaps</button>
                  <button className="w-full text-left px-5 py-3 text-sm font-bold text-white/70 hover:bg-white/5 hover:text-white transition-colors">Approvals</button>
                  <button className="w-full text-left px-5 py-3 text-sm font-bold text-white/70 hover:bg-white/5 hover:text-white transition-colors">Added Liquidity</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Time Range</label>
          <div className="flex bg-black/40 rounded-xl p-1.5 border border-white/10">
            <button className="flex-1 md:px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white rounded-lg transition-all">24h</button>
            <button className="flex-1 md:px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white rounded-lg transition-all">7d</button>
            <button className="flex-1 md:px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white rounded-lg transition-all">30d</button>
            <button className="flex-1 md:px-6 py-2 text-[10px] font-black uppercase tracking-widest bg-primary text-black rounded-lg shadow-lg">All time</button>
          </div>
        </div>
      </div>

      {/* Transaction List Table */}
      <div className="bg-white/[0.01] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
        <div className="hidden md:grid grid-cols-[1.8fr_1.2fr_1fr_1fr_0.5fr] gap-4 px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 border-b border-white/5 bg-white/[0.02]">
          <div>Transaction</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Time</div>
          <div className="text-right">Action</div>
        </div>
        <div className="divide-y divide-white/5">
          {transactions.map((tx) => (
            <div key={tx.id} className="grid grid-cols-1 md:grid-cols-[1.8fr_1.2fr_1fr_1fr_0.5fr] gap-4 px-8 py-7 items-center hover:bg-white/[0.03] transition-all group cursor-pointer">
              <div className="flex items-center gap-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform ${tx.iconColor}`}>
                  <span className={`material-symbols-outlined ${tx.pending ? 'animate-spin' : ''}`}>{tx.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-primary transition-colors">{tx.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-tighter">{tx.pool}</p>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-[9px] text-white/30 font-bold">ID: {tx.hash}</span>
                  </div>
                </div>
              </div>
              <div className="flex md:block justify-between items-center">
                <span className="md:hidden text-[9px] font-black text-white/20 uppercase tracking-widest">Amount</span>
                <div>
                  <p className={`font-black text-sm text-white ${tx.amountColor || ''}`}>{tx.amount}</p>
                  {tx.secondary && (
                    <p className={`text-[10px] font-black tracking-tight mt-0.5 ${tx.secondary.includes('+') ? 'text-green-500' : 'text-white/40'}`}>
                      {tx.secondary}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex md:block justify-between items-center">
                <span className="md:hidden text-[9px] font-black text-white/20 uppercase tracking-widest">Status</span>
                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                  tx.status === 'Confirmed' 
                    ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                    : 'bg-primary/10 text-primary border-primary/20 shadow-[0_0_15px_rgba(255,210,23,0.1)]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Confirmed' ? 'bg-green-500' : 'bg-primary animate-pulse'}`}></span>
                  {tx.status}
                </span>
              </div>
              <div className="flex md:block justify-between items-center">
                <span className="md:hidden text-[9px] font-black text-white/20 uppercase tracking-widest">Time</span>
                <div className={`text-[11px] font-bold uppercase tracking-tight ${tx.pending ? 'text-primary animate-pulse' : 'text-white/50'}`}>
                  {tx.pending ? 'Processing...' : tx.time}
                </div>
              </div>
              <div className="text-right">
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-lg">open_in_new</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/30 font-black uppercase tracking-widest">
          Page 1 of 3 <span className="mx-2 opacity-20">|</span> Showing 1-10 of 24 transactions
        </p>
        <div className="flex gap-3">
          <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-white/30 cursor-not-allowed">
            Previous
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-primary transition-all active:scale-95 shadow-lg">
            Next Page
          </button>
        </div>
      </div>
    </main>
  );
}
