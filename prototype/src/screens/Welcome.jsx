import React from 'react';
import { Leaf, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Welcome({ onNavigate }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-emerald-600 text-white p-8 h-full relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-900/20 transform -rotate-3">
          <Leaf className="w-12 h-12 text-emerald-600 drop-shadow-md" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-3">LOOPSHELF</h1>
        <p className="text-emerald-100 text-xl font-medium flex items-center justify-center gap-2">
          Don't buy it. Loop it.
        </p>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full space-y-4 relative z-10"
      >
        <button 
          onClick={() => onNavigate('home')}
          className="w-full bg-white text-emerald-700 py-4 px-6 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-900/10 hover:bg-emerald-50 transition-all flex items-center justify-between group"
        >
          <span>Find something to borrow</span>
          <ArrowRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => onNavigate('list_item')}
          className="w-full bg-emerald-700/50 backdrop-blur-md text-white py-4 px-6 rounded-2xl font-bold text-lg border border-emerald-500 shadow-md hover:bg-emerald-700 transition-all flex items-center justify-between"
        >
          <span>List an item</span>
          <Sparkles className="w-5 h-5 text-emerald-300" />
        </button>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex items-center gap-2 text-sm text-emerald-200 font-medium bg-emerald-800/30 px-4 py-2 rounded-full border border-emerald-700/50"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        Verified IIT Campus Network
      </motion.p>
    </div>
  );
}
