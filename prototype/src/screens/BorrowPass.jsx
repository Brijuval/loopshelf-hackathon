import React, { useEffect, useState } from 'react';
import { items } from '../data/mockData';
import { X, ArrowRight, ShieldCheck, CheckCircle2, Clock, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import QRCode from 'react-qr-code';
import { Scanner } from '@yudiel/react-qr-scanner';

export default function BorrowPass({ item, onNavigate }) {
  const [step, setStep] = useState('loading'); // loading -> qr -> active
  const [mode, setMode] = useState('borrower'); // borrower | owner
  const safeItem = item || items[0];

  useEffect(() => {
    // Simulate approval delay
    const timer = setTimeout(() => {
      setStep('qr');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScan = () => {
    setStep('active');
  };

  return (
    <div className="flex-1 bg-slate-900 p-6 pt-12 flex flex-col h-full overflow-hidden relative">
      <div className="flex justify-between items-center mb-6 relative z-10">
        <button onClick={() => onNavigate('back')} className="text-slate-400 p-2 hover:bg-slate-800 rounded-full transition-colors">
          <X className="w-6 h-6" />
        </button>
        
        {step === 'qr' ? (
          <div className="flex bg-slate-800 rounded-full p-1 border border-slate-700 shadow-inner">
            <button 
              onClick={() => setMode('borrower')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${mode === 'borrower' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              Borrower
            </button>
            <button 
              onClick={() => setMode('owner')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${mode === 'owner' ? 'bg-indigo-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              Owner Scan
            </button>
          </div>
        ) : (
          <span className="text-white font-bold tracking-[0.2em] text-xs">BORROW PASS</span>
        )}
        
        <div className="w-10"></div>
      </div>

      <AnimatePresence mode="wait">
        {step === 'loading' && (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center text-center mt-[-10%]"
          >
            <div className="relative">
              <div className="w-24 h-24 border-4 border-slate-700 rounded-full"></div>
              <div className="w-24 h-24 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
              <div className="absolute inset-0 flex items-center justify-center text-3xl">
                {safeItem.emoji}
              </div>
            </div>
            <h2 className="text-2xl font-black text-white mt-8">Request Sent</h2>
            <p className="text-slate-400 mt-2 font-medium">Waiting for {safeItem.owner} to approve...</p>
          </motion.div>
        )}

        {(step === 'qr' || step === 'active') && (
          <motion.div 
            key="ticket"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="flex-1 flex flex-col z-10"
          >
            {/* Ticket Container */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl relative">
              {/* Ticket Header */}
              <div className={`p-6 text-white flex justify-between items-center transition-colors duration-500 ${step === 'active' ? 'bg-indigo-600' : mode === 'owner' ? 'bg-indigo-500' : 'bg-emerald-600'}`}>
                <div>
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1">
                    {step === 'active' ? 'Item Active' : mode === 'owner' ? 'Scan to Verify' : 'Approved'}
                  </p>
                  <h2 className="text-2xl font-black leading-tight">{safeItem.name}</h2>
                </div>
                {safeItem.imageUrl ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-inner shrink-0 border-2 border-white/20 bg-white">
                    <img src={safeItem.imageUrl} alt={safeItem.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="text-4xl bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-inner">
                    {safeItem.emoji}
                  </div>
                )}
              </div>

              {/* Ticket Body */}
              <div className="p-6 pb-8 border-b-2 border-dashed border-slate-200">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Borrower</p>
                    <p className="text-slate-800 font-black text-lg">You</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                      Owner {safeItem.isVerified && <ShieldCheck className="w-3 h-3 text-emerald-500" />}
                    </p>
                    <p className="text-slate-800 font-black text-lg">{safeItem.owner}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-slate-800 font-bold">{safeItem.duration}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Pickup</p>
                    <p className="text-slate-800 font-bold">{safeItem.location}</p>
                  </div>
                </div>
              </div>

              {/* Ticket Footer / QR */}
              <div className="bg-slate-50 p-6 flex flex-col items-center justify-center relative min-h-[240px]">
                {/* Decorative notches */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-slate-900 rounded-full"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-slate-900 rounded-full"></div>
                
                <AnimatePresence mode="wait">
                  {step === 'qr' ? (
                    <motion.div 
                      key="qr-view"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex flex-col items-center w-full"
                    >
                      {mode === 'borrower' ? (
                        <>
                          <div className="bg-white p-3 rounded-2xl shadow-sm border-2 border-slate-200 flex items-center justify-center relative overflow-hidden group hover:border-emerald-500 transition-colors cursor-pointer" onClick={handleScan}>
                            <QRCode value={`loopshelf://handshake/${safeItem.id}`} size={160} className="text-slate-800" />
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">Simulate Success</span>
                            </div>
                          </div>
                          <div className="mt-5 text-center flex flex-col items-center">
                            <p className="text-sm text-slate-500 font-bold flex items-center gap-2">
                              <ArrowRight className="w-4 h-4 animate-bounce-x" /> Show to owner to receive item
                            </p>
                            <p className="text-[10px] text-slate-400 font-medium mt-1">Scanning this QR verifies you received the correct item.</p>
                          </div>
                        </>
                      ) : (
                        <div className="w-full max-w-[220px] flex flex-col items-center">
                          <div className="w-full aspect-square rounded-3xl overflow-hidden border-4 border-indigo-500/30 shadow-lg relative bg-black">
                            <Scanner 
                              onScan={(result) => {
                                if (result && result.length > 0 && result[0].rawValue.includes('handshake')) {
                                  handleScan();
                                }
                              }}
                              components={{ audio: false, finder: false }}
                            />
                            <div className="absolute inset-0 border-2 border-white/50 border-dashed rounded-2xl pointer-events-none m-4"></div>
                          </div>
                          <p className="text-sm text-slate-500 font-bold mt-4 text-center">Point camera at Borrower's QR Code</p>
                          <button onClick={handleScan} className="mt-3 text-xs text-indigo-500 font-bold hover:underline">Or simulate scan manually</button>
                        </div>
                      )}
                      
                      {mode === 'borrower' && (
                        <div className="mt-4 flex gap-2 w-full">
                          <a href={`tel:${safeItem.contact}`} className="flex-1 bg-white border border-slate-200 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm text-slate-700 font-bold text-xs">
                            <Phone className="w-3.5 h-3.5 text-emerald-600" /> Call
                          </a>
                          <a href={`https://wa.me/${safeItem.contact?.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="flex-1 bg-white border border-slate-200 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm text-slate-700 font-bold text-xs">
                            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
                          </a>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="active-view"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex flex-col items-center text-center w-full"
                    >
                      <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <Clock className="w-10 h-10 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-black text-slate-800">Item in your possession</h3>
                      <p className="text-sm text-slate-500 mt-2 font-medium">Return by Tomorrow, 5:00 PM</p>
                      
                      <button 
                        onClick={() => onNavigate('impact')}
                        className="mt-6 w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold shadow-md shadow-slate-900/20 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5" /> Return Item
                      </button>
                      <div className="mt-3 flex gap-2 w-full">
                        <a href={`tel:${safeItem.contact}`} className="flex-1 bg-white border border-slate-200 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm text-slate-700 font-bold text-xs">
                          <Phone className="w-3.5 h-3.5 text-emerald-600" /> Call Owner
                        </a>
                        <a href={`https://wa.me/${safeItem.contact?.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="flex-1 bg-white border border-slate-200 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm text-slate-700 font-bold text-xs">
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {step === 'qr' && (
              <p className="text-center text-slate-500 text-xs mt-6 font-medium">
                Deposit of ₹{safeItem.deposit} is held securely until return.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
