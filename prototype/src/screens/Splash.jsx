import React, { useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Splash({ onNavigate }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('welcome');
    }, 2500); // 2.5 seconds splash
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-emerald-600 text-white p-8 h-full relative overflow-hidden z-50">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div 
          animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-emerald-900/30 transform"
        >
          <Leaf className="w-16 h-16 text-emerald-600 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight mt-6">LOOPSHELF</h1>
          <p className="text-emerald-200 mt-2 font-medium text-sm tracking-widest uppercase">Micro-Sharing</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
