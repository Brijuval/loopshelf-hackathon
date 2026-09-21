import React, { useState } from 'react';
import { items, requests } from '../data/mockData';
import { Search, MapPin, ChevronRight, Zap, Clock, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home({ onNavigate, onSearch, onFilter, onSelectItem }) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('available');
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if(query) onSearch(query);
  };

  const categories = ['All', 'Electronics', 'Lab Gear', 'Study', 'Media'];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col pb-24 overflow-y-auto">
      {/* Header */}
      <div className="bg-white p-6 pt-10 rounded-b-3xl shadow-sm border-b border-slate-100 z-10 relative">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Good afternoon 👋</h2>
            <div className="flex items-center gap-1 mt-1 text-emerald-600 font-medium text-sm bg-emerald-50 w-max px-2 py-1 rounded-md">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hostel 7, IIT Campus</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-400 hover:text-emerald-600 transition-colors"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border border-slate-200">
              <span className="font-bold text-slate-600">JD</span>
            </div>
          </div>
        </div>
        
        {/* Notifications Dropdown */}
        <AnimatePresence>
          {showNotifications && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-20 right-6 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 p-4"
            >
              <h3 className="font-black text-slate-800 mb-3">Notifications</h3>
              <div 
                onClick={() => {
                  onSelectItem(items[0]);
                  onNavigate('pass');
                }}
                className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 cursor-pointer hover:bg-emerald-100 transition-colors flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-emerald-700 shrink-0 shadow-sm border border-emerald-100">
                  SJ
                </div>
                <div>
                  <p className="text-sm text-slate-700 leading-tight"><span className="font-bold text-emerald-800">Sarah J.</span> requested to borrow your <span className="font-bold">{items[0]?.name}</span>!</p>
                  <p className="text-xs text-emerald-600 font-bold mt-1.5 flex items-center gap-1">Open Scanner <ChevronRight className="w-3 h-3" /></p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Search */}
        <form onSubmit={handleSearch} className="mt-6 relative group">
          <input 
            type="text" 
            placeholder="Search 'HDMI cable'..." 
            className="w-full bg-slate-100 p-4 pl-12 pr-12 rounded-2xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all shadow-inner"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-500 transition-colors" />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-500 p-1.5 rounded-xl text-white hover:bg-emerald-600 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </form>

        {/* AI Forecast Banner */}
        <motion.button 
          onClick={() => onNavigate('forecast')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 w-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-3 flex items-center justify-between group hover:shadow-md transition-all text-left"
        >
          <div className="flex items-start gap-3">
            <div className="bg-white p-1.5 rounded-full shadow-sm text-amber-500 mt-0.5 group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 fill-amber-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-900">AI Campus Forecast</p>
              <p className="text-xs text-amber-700 mt-0.5">Midterms in 4 days! See what's trending.</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-amber-300 group-hover:text-amber-500 transition-colors shrink-0" />
        </motion.button>

        {/* Quick Categories */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
          {categories.map((tag, idx) => (
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              key={tag} 
              onClick={() => onFilter(tag)}
              className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 whitespace-nowrap shadow-sm hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 active:scale-95 transition-all"
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Nearby Feed */}
      <div className="p-6">
        <div className="flex justify-between items-end mb-4">
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab('available')}
              className={`text-lg font-black transition-colors ${activeTab === 'available' ? 'text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Available
            </button>
            <button 
              onClick={() => setActiveTab('requests')}
              className={`text-lg font-black transition-colors ${activeTab === 'requests' ? 'text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Wanted
            </button>
          </div>
          <button onClick={() => onNavigate('map')} className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
            See map <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {activeTab === 'available' ? (
              items.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  key={`item-${item.id}`} 
                  onClick={() => onSelectItem(item)}
                  className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:shadow-md hover:border-emerald-100 active:scale-[0.98] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    {item.imageUrl ? (
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-inner shrink-0 border border-slate-200">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors shrink-0">
                        {item.emoji}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-slate-800">{item.name}</h4>
                      <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
                        <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <MapPin className="w-3 h-3" /> {item.distance}
                        </span> 
                        • {item.time}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white text-slate-400 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))
            ) : (
              requests.map((req, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  key={`req-${req.id}`} 
                  className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md hover:border-indigo-100 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-xl shadow-inner">
                        {req.emoji}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{req.name}</h4>
                        <p className="text-xs font-bold text-indigo-600">{req.requester} is looking for this</p>
                      </div>
                    </div>
                    {req.bounty > 0 && (
                      <div className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-1 rounded-lg text-xs font-black flex items-center gap-1 shadow-sm">
                        <Zap className="w-3 h-3 fill-amber-500" /> ₹{req.bounty}/day
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-3 px-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">Drop off at: <span className="text-slate-700">{req.location || 'Campus Center'}</span></span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                    <span className="text-[11px] font-black text-rose-600 bg-rose-50 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 border border-rose-100 shadow-sm">
                      <Clock className="w-4 h-4" /> {req.urgency}
                    </span>
                    <a href={`https://wa.me/${req.contact?.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="text-xs font-bold bg-indigo-600 text-white px-3 py-1.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/20">
                      I have this
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
