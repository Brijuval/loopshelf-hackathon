import React from 'react';
import { Settings, ShieldCheck, Star, Package, Archive, ChevronRight, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Profile({ onNavigate }) {
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full overflow-y-auto pb-24 w-full">
      {/* Header Profile Section */}
      <div className="bg-white pt-16 pb-8 px-6 rounded-b-3xl shadow-sm border-b border-slate-100">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-black text-slate-900">Profile</h1>
          <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-full transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-emerald-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-emerald-700 font-black text-3xl shrink-0">
            JD
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800">Jane Doe</h2>
            <p className="text-sm text-slate-500 font-medium flex items-center gap-1 mt-0.5">
              jane.d@iit.edu <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </p>
            <div className="mt-2 bg-slate-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="text-xs font-bold text-slate-700">4.9 Reliability</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 mt-6 grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-800">12</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Borrowed</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
            <Archive className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-800">3</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Listed</p>
          </div>
        </motion.div>
      </div>

      {/* Menu Options */}
      <div className="px-6 mt-8 space-y-3">
        <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">My Activity</h3>
        
        <motion.button 
          onClick={() => onNavigate('pass')}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-3">
            <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <Package className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Active Borrows (1)</span>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </motion.button>

        <motion.button 
          onClick={() => alert("Your listings will appear here. This feature is coming soon to the prototype!")}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-3">
            <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Archive className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">My Listings (3)</span>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </motion.button>

        <motion.button 
          onClick={() => onNavigate('owner_requests')} 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-indigo-900 text-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:bg-indigo-800 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-bold">Demo: Owner Requests (1 Pending)</span>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </motion.button>
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mx-6 mt-auto mb-4 bg-red-50 text-red-600 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
      >
        <LogOut className="w-5 h-5" /> Log Out
      </motion.button>
    </div>
  );
}
