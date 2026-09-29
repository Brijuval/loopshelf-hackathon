import React from 'react';
import { Search, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { items } from '../data/mockData';

export default function Map({ onNavigate, onSelectItem }) {
  return (
    <div className="flex-1 bg-slate-100 flex flex-col h-full overflow-hidden relative w-full">
      {/* Header overlay */}
      <div className="absolute top-0 w-full p-4 pt-10 z-20 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-200/50 pointer-events-auto flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search IIT Madras campus..." 
            className="bg-transparent border-none outline-none text-sm font-semibold w-full text-slate-800 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Map Background (Simulated) */}
      <div className="absolute inset-0 bg-emerald-50/50 flex items-center justify-center">
        <div className="w-[150%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        {/* Fake streets & campus layout */}
        <div className="absolute w-[80%] h-[20px] bg-slate-200 rotate-45 rounded-full shadow-inner"></div>
        <div className="absolute w-[90%] h-[20px] bg-slate-200 -rotate-12 rounded-full shadow-inner"></div>
        
        {/* IIT Madras Specific Zones */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-emerald-100/50 rounded-[40px] border border-emerald-200/50 shadow-sm flex items-center justify-center">
          <span className="text-emerald-800/20 font-black text-xl rotate-45">CRC</span>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-blue-100/30 rounded-full border border-blue-200/50 flex items-center justify-center">
          <span className="text-blue-800/20 font-black text-xl -rotate-12">GC</span>
        </div>
      </div>

      {/* Map Pins */}
      <div className="absolute inset-0 z-10 pointer-events-auto pt-24 pb-20">
        {items.map((item, idx) => {
          // Semi-random deterministic positioning based on ID
          const top = 20 + (item.id * 13) % 60;
          const left = 10 + (item.id * 23) % 70;
          
          return (
            <motion.button
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * idx, type: 'spring' }}
              onClick={() => onSelectItem(item)}
              style={{ top: `${top}%`, left: `${left}%` }}
              className="absolute group flex flex-col items-center"
            >
              <div className="bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-200 text-xs font-bold text-slate-700 whitespace-nowrap mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all z-50">
                {item.name}
              </div>
              <div className="w-10 h-10 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/40 flex items-center justify-center text-white border-2 border-white transform group-hover:scale-110 group-hover:bg-emerald-600 transition-all text-xl">
                {item.emoji}
              </div>
              <div className="w-2 h-2 bg-emerald-900 rounded-full mt-1 opacity-20 shadow-xl blur-[1px]"></div>
            </motion.button>
          )
        })}
      </div>

      {/* My Location FAB */}
      <button className="absolute bottom-24 right-4 bg-white p-3 rounded-full shadow-lg border border-slate-200 text-slate-700 hover:text-emerald-600 z-20">
        <Navigation className="w-6 h-6" />
      </button>
    </div>
  );
}
