import React from 'react';
import { forecasts } from '../data/mockData';
import { ChevronLeft, Zap, TrendingUp, PlusCircle, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Forecast({ onNavigate }) {
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full overflow-hidden relative">
      {/* Header */}
      <div className="bg-white p-6 pt-12 rounded-b-3xl shadow-sm border-b border-slate-100 z-10 relative">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('back')} className="text-slate-400 p-2 hover:bg-slate-50 rounded-full transition-colors -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 fill-amber-500 text-amber-500" /> AI Forecasts
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Predictive campus demand</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-24">
        
        {/* Info Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-indigo-50 border border-indigo-100 p-4 rounded-2xl flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <p className="text-xs text-indigo-900 font-medium leading-relaxed">
            LoopShelf AI analyzes academic calendars and local search velocities to predict what items will be needed soon. List these items now to earn rewards!
          </p>
        </motion.div>

        {/* Forecast List */}
        <div className="space-y-4">
          <AnimatePresence>
            {forecasts.map((forecast, idx) => (
              <motion.div 
                key={forecast.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all"
              >
                {/* Decorative background element */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-amber-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl border border-slate-100 shadow-inner group-hover:border-amber-100 group-hover:bg-amber-50/30 transition-colors">
                        {forecast.emoji}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">{forecast.title}</h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                          <span className="text-xs font-bold text-slate-600">{forecast.reason}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 mt-4">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Search Velocity</p>
                      <p className="text-emerald-600 font-black flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" /> {forecast.trend}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Estimated Bounty</p>
                      <p className="text-slate-800 font-black">{forecast.bountyEstimate}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => onNavigate('list_item')}
                    className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors active:scale-[0.98]"
                  >
                    <PlusCircle className="w-4 h-4" /> I have this to list
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
