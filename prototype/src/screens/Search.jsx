import React, { useState, useEffect } from 'react';
import { searchItems } from '../data/mockData';
import { ArrowLeft, Search as SearchIcon, MapPin, Clock, Star, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Search({ initialQuery, initialFilter, onNavigate, onSelectItem }) {
  const [query, setQuery] = useState(initialQuery || '');
  const [activeFilter, setActiveFilter] = useState(initialFilter || 'All');
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(searchItems(query, activeFilter));
  }, [query, activeFilter]);

  const categories = ['All', 'Electronics', 'Lab Gear', 'Study', 'Media', 'Sports'];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full overflow-hidden w-full">
      {/* Header & Search Bar */}
      <div className="bg-white p-4 pt-10 shadow-sm border-b border-slate-100 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('back')} className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 relative group">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search items..."
              autoFocus
              className="w-full bg-slate-100 p-3 pl-10 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
            <SearchIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-500" />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map(tag => (
            <button 
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeFilter === tag 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Area */}
      <div className="flex-1 p-4 overflow-y-auto pb-24">
        <div className="flex justify-between items-center mb-4 px-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{results.length} Results Found</p>
        </div>
        
        <AnimatePresence mode="popLayout">
          {results.length > 0 ? (
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((item, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  key={item.id} 
                  className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      {item.imageUrl ? (
                        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-inner shrink-0 border border-slate-200">
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner shrink-0">
                          {item.emoji}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg leading-tight">{item.name}</h3>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          Owner: {item.owner} 
                          {item.isVerified && <span className="bg-emerald-100 text-emerald-700 p-0.5 rounded-full"><Star className="w-2.5 h-2.5 fill-emerald-700" /></span>}
                        </p>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-lg shrink-0">
                      ₹{item.deposit} <span className="text-[10px] font-medium text-emerald-600 block text-center">dep</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="block text-slate-400 text-[10px] uppercase font-bold leading-none">Distance</span>
                        <span className="font-bold text-slate-700 text-sm leading-none mt-1 block">{item.distance}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <div>
                        <span className="block text-slate-400 text-[10px] uppercase font-bold leading-none">Max Time</span>
                        <span className="font-bold text-slate-700 text-sm leading-none mt-1 block">{item.duration}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => onSelectItem(item)}
                    className="mt-4 w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-slate-800 active:bg-slate-950 transition-colors shadow-md shadow-slate-900/20"
                  >
                    View Details
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-64 text-center px-6"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No items found</h3>
              <p className="text-sm text-slate-500 mt-2">We couldn't find anything matching your search. Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => { setQuery(''); setActiveFilter('All'); }}
                className="mt-6 text-emerald-600 font-bold hover:text-emerald-700"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
