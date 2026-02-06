'use client';

import React from 'react';
import { Sparkles, Code, Network, TrendingUp, ArrowRight } from 'lucide-react';
import MarketingAITile from './components/MarketingAITile';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4 md:p-8 font-sans bg-[#0F172A]">
      
      {/* Container limiting max width */}
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full gap-8">
        
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-accent-gold/20 px-6 py-4 bg-slate-900/50 backdrop-blur-md rounded-xl border border-indigo-500/20">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="text-slate-900" size={18} fill="currentColor" />
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                <span className="text-primary">Marketing</span><span className="text-accent-gold">AI</span>
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-9">
              <a className="text-primary/70 hover:text-primary text-sm font-medium transition-colors" href="#">Pipelines</a>
              <a className="text-accent-gold/70 hover:text-accent-gold text-sm font-medium transition-colors" href="#">Insights</a>
              <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">ROI</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-slate-900 text-sm font-bold hover:brightness-110 transition-all">
              Launch Dashboard
            </button>
          </div>
        </header>

        {/* 
          Main Visualization Section
          Strict 1:1 Square Container (max 600px)
        */}
        <div className="relative w-full max-w-[600px] aspect-square shadow-2xl rounded-3xl mx-auto">
           <MarketingAITile />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-4">
          <FeatureCard 
            icon={<Code size={28} />} 
            title="Data Ingestion" 
            desc="Unified high-velocity stream from 50+ global marketing channels." 
            theme="primary"
          />
          <FeatureCard 
            icon={<Network size={28} />} 
            title="Neural Mesh" 
            desc="Distributed neural networks optimizing budget in sub-second intervals." 
            theme="accent"
          />
          <FeatureCard 
            icon={<TrendingUp size={28} />} 
            title="Prediction Core" 
            desc="Proprietary ML models delivering +34% accuracy lift over baseline." 
            theme="primary"
          />
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-0 md:p-4">
          <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-2xl pt-24 shadow-2xl relative overflow-hidden group border border-accent-gold/20">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070')] bg-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" />
            
            <div className="flex flex-col md:flex-row w-full items-start md:items-end justify-between gap-6 p-8 md:p-10 relative z-20">
              <div className="flex max-w-[500px] flex-1 flex-col gap-2">
                <p className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                  Scale Beyond <span className="text-accent-gold">Human Limits</span>
                </p>
                <p className="text-primary/70 text-lg font-medium">
                  Deploy advanced neural infrastructure across your entire stack.
                </p>
              </div>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-accent-gold hover:bg-white transition-all text-slate-950 text-base font-black shadow-[0_0_20px_rgba(129,140,248,0.4)] group-hover:shadow-[0_0_30px_rgba(129,140,248,0.6)]">
                <span className="truncate mr-2">ENTER DASHBOARD</span>
                <ArrowRight size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- Helper Components for App.tsx ---

const FeatureCard = React.memo(function FeatureCard({ icon, title, desc, theme }: { icon: React.ReactNode, title: string, desc: string, theme: 'primary' | 'accent' }) {
  const colorClass = theme === 'primary' ? 'text-primary' : 'text-accent-gold';
  const bgClass = theme === 'primary' ? 'bg-primary/20' : 'bg-accent-gold/20';
  
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-900 border border-indigo-500/10 hover:bg-slate-800/50 transition-colors group cursor-default">
      <div className={`flex-shrink-0 size-12 rounded-lg ${bgClass} flex items-center justify-center ${colorClass} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <p className="text-white font-bold text-base">{title}</p>
        <p className={`${theme === 'primary' ? 'text-primary/50' : 'text-accent-gold/50'} text-xs mt-1`}>
          {desc}
        </p>
      </div>
    </div>
  );
});
