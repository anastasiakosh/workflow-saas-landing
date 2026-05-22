"use client";
import React, { useState } from 'react';

export default function DockerFashionUI() {
  const [layout, setLayout] = useState('staggered'); 

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-gray-300 font-sans flex overflow-hidden selection:bg-blue-500/30">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 flex flex-col justify-between pb-8 pt-12 px-8 shrink-0 z-10 bg-[#0A0B0E]">
        <div>
          <div className="flex items-center space-x-4 mb-20 cursor-pointer group">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center font-bold text-white group-hover:scale-105 transition-transform duration-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22.5 15.5c-.3-.2-1.2-.4-2-.1-.5-1.4-1.8-2.4-3.5-2.4h-6v-3h2c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1h-2V4c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v2H4c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2v3H1c-.6 0-1 .4-1 1v5c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4 0-.7-.3-1.3-.5-1.5zM6 5h4v4H6V5zm-2 6h2v4H4v-4zm10 0h2v4h-2v-4zm-4 0h2v4h-2v-4z" />
              </svg>
            </div>
            <span className="font-serif text-2xl tracking-widest text-white uppercase">Docker</span>
          </div>
          
          <nav className="space-y-6 text-[11px] tracking-[0.2em] uppercase font-semibold">
            {['Containers', 'Images', 'Logs', 'Volumes', 'Kubernetes', 'Builds', 'Models'].map((item, i) => (
              <div key={item} className={`cursor-pointer transition-all duration-500 flex items-center space-x-3 ${i === 0 ? 'text-blue-500' : 'text-gray-600 hover:text-white hover:translate-x-2'}`}>
                {i === 0 && <span className="w-1 h-1 bg-blue-500 rounded-full"></span>}
                <span>{item}</span>
              </div>
            ))}
          </nav>
        </div>
        <button className="bg-blue-600 text-white px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-500">
          Upgrade Plan
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-16 md:p-24 overflow-y-auto relative scroll-smooth">
        <header className="mb-24 max-w-4xl relative z-10">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.9] tracking-tight">Containers</h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed">
            Your running containers show up here. <br/>
            <span className="text-gray-300">A container is an isolated environment for your code.</span>
          </p>
        </header>

        {/* Grid Controls */}
        <div className="flex space-x-8 mb-16 border-b border-gray-800 pb-4 relative z-10">
          <button onClick={() => setLayout('structured')} className={`text-xs tracking-[0.15em] uppercase pb-2 transition-all duration-500 relative ${layout === 'structured' ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}>
            Structured Grid
            {layout === 'structured' && <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-white"></span>}
          </button>
          <button onClick={() => setLayout('staggered')} className={`text-xs tracking-[0.15em] uppercase pb-2 transition-all duration-500 relative ${layout === 'staggered' ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}>
            Asymmetric Cascade
            {layout === 'staggered' && <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-white"></span>}
          </button>
        </div>

        {/* Container Cards */}
        <div className={`grid gap-12 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
          
          <div className={`group relative bg-[#12141A] p-12 border border-gray-800 hover:border-gray-500 transition-all duration-700 cursor-pointer overflow-hidden ${layout === 'staggered' ? 'md:mt-0' : ''}`}>
            <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase mb-16 font-mono">01 / Concept</p>
            <h3 className="font-serif text-4xl text-white mb-6 group-hover:-translate-y-2 transition-transform duration-700">What is a container?</h3>
            <p className="text-gray-500 text-xs tracking-widest uppercase mb-16">5 Mins Read</p>
            <div className="text-blue-500 text-[11px] font-bold tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 flex items-center">
              Explore Guide <span className="ml-2">→</span>
            </div>
          </div>

          <div className={`group relative bg-[#12141A] p-12 border border-gray-800 hover:border-gray-500 transition-all duration-700 cursor-pointer overflow-hidden ${layout === 'staggered' ? 'md:mt-24' : ''}`}>
            <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase mb-16 font-mono">02 / Execution</p>
            <h3 className="font-serif text-4xl text-white mb-6 group-hover:-translate-y-2 transition-transform duration-700">How do I run it?</h3>
            <div className="bg-[#0A0B0E] p-6 font-mono text-sm text-gray-400 border border-gray-800 mb-12 transform group-hover:scale-[1.02] transition-transform duration-700 shadow-inner">
              <span className="text-blue-400">FROM</span> node:20<br/>
              <span className="text-blue-400">RUN</span> mkdir -p<br/>
              <span className="text-blue-400">WORKDIR</span> /app
            </div>
            <div className="text-blue-500 text-[11px] font-bold tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 flex items-center">
              View Tutorial <span className="ml-2">→</span>
            </div>
          </div>

          <div className={`group relative bg-blue-900/5 p-12 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-700 cursor-pointer ${layout === 'staggered' ? 'md:mt-48 lg:mt-32 lg:col-span-1 md:col-span-2' : ''}`}>
            <div className="flex justify-between items-start mb-16 relative z-10">
               <div>
                 <p className="text-blue-500 text-[10px] tracking-[0.2em] uppercase mb-4 font-mono">Running</p>
                 <h3 className="font-serif text-4xl text-white group-hover:-translate-y-2 transition-transform duration-700">saas_nextjs</h3>
               </div>
               <span className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse"></span>
            </div>
            <div className="space-y-4 font-mono text-xs text-gray-500 relative z-10">
              <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>PORT</span><span className="text-gray-300">3000:3000</span></div>
              <div className="flex justify-between border-b border-gray-800/50 pb-2"><span>IMAGE</span><span className="text-gray-300">node:20-alpine</span></div>
              <div className="flex justify-between pb-2"><span>UPTIME</span><span className="text-gray-300">24m 12s</span></div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
