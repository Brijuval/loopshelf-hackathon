import React from 'react';
import { ArrowLeft, Star, MapPin, AlertCircle, Info, ShieldCheck, Zap, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { items } from '../data/mockData';

export default function ItemDetails({ item, onNavigate }) {
  // Safe fallback if accessed directly
  const safeItem = item || items[0];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full overflow-hidden md:max-w-2xl md:mx-auto md:w-full md:border-x border-slate-200 md:shadow-2xl relative">
      {/* Hero Image Area */}
      <div className="bg-slate-900 pt-12 pb-20 px-6 relative shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none z-0"></div>
        <button 
          onClick={() => onNavigate('back')} 
          className="absolute top-12 left-4 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors z-50 cursor-pointer shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 3 }}
          transition={{ type: 'spring', damping: 15 }}
          className="flex justify-center mt-4 relative z-10"
        >
          {safeItem.imageUrl ? (
            <div className="w-48 h-48 bg-white rounded-[2rem] p-2 shadow-2xl shadow-emerald-500/20">
              <img src={safeItem.imageUrl} alt={safeItem.name} className="w-full h-full object-cover rounded-3xl" />
            </div>
          ) : (
            <div className="w-36 h-36 bg-white rounded-3xl flex items-center justify-center text-7xl shadow-2xl shadow-emerald-500/10">
              {safeItem.emoji}
            </div>
          )}
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-t-3xl -mt-10 pt-8 px-6 pb-28 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] flex-1 overflow-y-auto relative z-20">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-black text-slate-900 leading-tight">{safeItem.name}</h1>
            <p className="text-emerald-600 font-bold mt-2 flex items-center gap-1">
              <Zap className="w-4 h-4 fill-emerald-600" /> {safeItem.time}
            </p>
          </div>
        </div>

        {/* Owner Info */}
        <div className="mt-8 flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-black text-lg border-2 border-white shadow-sm">
              {safeItem.ownerInitials || safeItem.owner?.[0] || 'U'}
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Owner</p>
              <p className="font-bold text-slate-800 flex items-center gap-1">
                {safeItem.owner}
                {safeItem.isVerified && (
                  <span className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider ml-1 border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" /> .edu Verified
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Reliability</p>
            <p className="font-black text-amber-500 flex items-center gap-1 text-lg justify-end">
              <Star className="w-4 h-4 fill-amber-500" /> {safeItem.rating}
            </p>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="mt-4 flex gap-3">
          <a href={`tel:${safeItem.contact}`} className="flex-1 bg-white border border-slate-200 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-emerald-200 transition-colors shadow-sm">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-700 text-sm">Call</span>
          </a>
          <a href={`https://wa.me/${safeItem.contact?.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="flex-1 bg-white border border-slate-200 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-emerald-200 transition-colors shadow-sm">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-700 text-sm">WhatsApp</span>
          </a>
        </div>

        {/* Borrowability Calculator */}
        <div className="mt-6 border-2 border-emerald-100 rounded-2xl p-5 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-emerald-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded shadow-sm">♻️ AI Insight</span>
            <span className="text-sm font-black text-emerald-900">Borrow instead of buying</span>
          </div>
          <div className="flex justify-between items-end mt-4 bg-white/60 p-3 rounded-xl">
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Buy new</span>
              <span className="text-slate-500 line-through font-semibold">₹{safeItem.price}</span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Borrow Fee</span>
              <span className="text-slate-700 font-semibold">₹{safeItem.price > 100 ? Math.floor(safeItem.price * 0.05) : 10}</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-bold text-emerald-600 uppercase mb-1">You save</span>
              <span className="font-black text-emerald-600 text-xl">₹{safeItem.price > 100 ? safeItem.price - Math.floor(safeItem.price * 0.05) : Math.max(0, safeItem.price - 10)}</span>
            </div>
          </div>
          <div className="mt-3 flex items-start gap-2 text-xs text-emerald-700 font-semibold bg-emerald-100/50 p-2 rounded-lg">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p>+ 1 item kept in circulation. Contributes directly to SDG 12 (Responsible Consumption).</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <MapPin className="w-5 h-5 text-slate-400 mb-2" />
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pickup Point</p>
            <p className="font-bold text-slate-800 mt-1">{safeItem.location}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <AlertCircle className="w-5 h-5 text-slate-400 mb-2" />
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Deposit</p>
            <p className="font-bold text-slate-800 mt-1">₹{safeItem.deposit} (Refundable)</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 mb-4">
          <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
            Community Reviews 
            <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">2</span>
          </h3>
          <div className="space-y-3">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-xs font-bold text-slate-400">3 days ago</span>
              </div>
              <p className="text-sm text-slate-600 font-medium">"Worked perfectly for my presentation. Super easy pickup right outside the hostel."</p>
              <p className="text-xs font-bold text-slate-800 mt-2">— Karan (Borrowed 3 hrs)</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 text-slate-200 fill-current" />
                </div>
                <span className="text-xs font-bold text-slate-400">1 week ago</span>
              </div>
              <p className="text-sm text-slate-600 font-medium">"Item is exactly as described. Only taking off one star because I couldn't find the room initially."</p>
              <p className="text-xs font-bold text-slate-800 mt-2">— Priya (Borrowed 1 day)</p>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Action */}
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-100 p-4 pb-6 px-6 z-50 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.15)]">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('pass')}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2"
        >
          Request to Borrow
          <ArrowLeft className="w-5 h-5 rotate-180" />
        </motion.button>
      </div>
    </div>
  );
}
