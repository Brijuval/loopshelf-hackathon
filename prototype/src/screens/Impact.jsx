import React, { useEffect, useState } from 'react';
import { X, Award, Share2, Leaf, Repeat, BatteryWarning, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Impact({ onNavigate }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti shortly after mount
    const timer = setTimeout(() => setShowConfetti(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <div className="flex-1 bg-emerald-600 flex flex-col h-full overflow-hidden relative w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400 via-emerald-600 to-emerald-800 opacity-60"></div>
      
      <div className="p-6 pt-12 flex justify-between items-center text-white relative z-10">
        <h1 className="text-2xl font-black flex items-center gap-2">Your Loop Impact <Leaf className="w-6 h-6 fill-white" /></h1>
      </div>

      <div className="flex justify-center absolute top-20 left-1/2 -translate-x-1/2 z-50">
        {/* Confetti removed for React 19 compatibility */}
      </div>

      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20 }}
        className="flex-1 bg-slate-50 mt-4 rounded-t-[2.5rem] p-6 pb-24 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)] relative z-20 overflow-y-auto"
      >
        
        {/* Main Metric */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center mb-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-indigo-500"></div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Total Savings</p>
          <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-emerald-700">₹2,850</h2>
          <p className="text-slate-500 text-sm mt-3 font-semibold flex justify-center items-center gap-1">
            <TrendingUp className="w-4 h-4 text-emerald-500" /> Instead of buying new items
          </p>
        </motion.div>

        {/* Grid Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100"
          >
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
              <Repeat className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-slate-800">5</h3>
            <p className="text-slate-400 text-xs font-bold uppercase mt-1 tracking-wider">Items Looped</p>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100"
          >
            <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
              <BatteryWarning className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-slate-800">14kg</h3>
            <p className="text-slate-400 text-xs font-bold uppercase mt-1 tracking-wider">E-Waste Avoided</p>
          </motion.div>
        </div>

        {/* SDG Notice */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100 flex gap-4 items-center shadow-sm"
        >
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
            <Leaf className="w-6 h-6 fill-emerald-500 text-emerald-500" />
          </div>
          <div>
            <h4 className="font-black text-emerald-900">SDG 12 Supported</h4>
            <p className="text-xs text-emerald-700 mt-1 font-semibold leading-relaxed">Every borrowed item reduces new manufacturing demand and carbon emissions.</p>
          </div>
        </motion.div>

        {/* Level Up Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 bg-slate-900 rounded-2xl p-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="bg-amber-500/20 p-2 rounded-full">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Eco Pioneer Tier</p>
              <p className="text-slate-400 text-xs">Top 5% on Campus</p>
            </div>
          </div>
          <button className="bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
