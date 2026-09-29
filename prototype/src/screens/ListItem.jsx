import React, { useState, useRef } from 'react';
import { X, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { items, requests } from '../data/mockData';

export default function ListItem({ onNavigate }) {
  const [mode, setMode] = useState('lend'); // 'lend' or 'request'
  const [step, setStep] = useState(1); // 1: form, 2: ai deposit, 3: success
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemLocation, setItemLocation] = useState('');
  const [itemUrgency, setItemUrgency] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleNext = () => {
    if (step === 1 && itemName) {
      if (mode === 'request') {
        // Skip AI deposit for requests, go straight to success
        setStep(3);
        const newRequest = {
          id: requests.length + 101,
          name: itemName,
          category: 'Others',
          location: itemLocation || 'Campus Center',
          urgency: itemUrgency || 'Flexible',
          requester: 'Jane Doe',
          requesterInitials: 'JD',
          bounty: Number(itemPrice) || 0,
          emoji: '📦',
          status: 'open',
          contact: '+91 9999999999'
        };
        requests.unshift(newRequest);
        setTimeout(() => {
          onNavigate('home');
        }, 2500);
      } else {
        setStep(2);
      }
    } else if (step === 2) {
      setStep(3);
      
      const newItem = {
        id: items.length + 1,
        name: itemName,
        category: 'Others',
        distance: '0m',
        location: itemLocation || 'Your Location',
        time: 'Available now',
        duration: 'Flexible',
        owner: 'Jane Doe',
        ownerInitials: 'JD',
        rating: '5.0',
        price: Number(itemPrice) || 0,
        deposit: calculatedDeposit,
        emoji: '📦',
        imageUrl: imagePreview || null,
        status: 'available',
        isVerified: true,
        contact: '+91 9999999999'
      };
      items.unshift(newItem);

      setTimeout(() => {
        onNavigate('home');
      }, 2500);
    }
  };

  const calculatedDeposit = itemPrice ? Math.round(Number(itemPrice) * 0.15) : 100;

  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden md:max-w-2xl md:mx-auto md:w-full md:border-x border-slate-200 md:shadow-2xl relative">
      <div className="p-4 pt-10 flex justify-between items-center border-b border-slate-100 relative z-10 bg-white">
        <button onClick={() => onNavigate('back')} className="p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors bg-slate-50">
          <X className="w-5 h-5" />
        </button>
        <span className="font-bold text-slate-800">{mode === 'lend' ? 'List an Item' : 'Request an Item'}</span>
        <div className="w-9"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex bg-slate-100 p-1 rounded-2xl mb-6">
                <button 
                  onClick={() => setMode('lend')}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${mode === 'lend' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500'}`}
                >
                  I want to Lend
                </button>
                <button 
                  onClick={() => setMode('request')}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${mode === 'request' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
                >
                  I want to Borrow
                </button>
              </div>

              {mode === 'lend' && (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-48 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-100 hover:border-emerald-300 transition-colors overflow-hidden relative"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                        <Camera className="w-8 h-8 text-emerald-500" />
                      </div>
                      <span className="font-bold">Add Photo</span>
                    </>
                  )}
                </div>
              )}
              
              <input 
                type="file" 
                accept="image/*"
                capture="environment"
                ref={fileInputRef} 
                onChange={handleImageChange} 
                className="hidden" 
              />

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Item Name</label>
                <input 
                  type="text" 
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder={mode === 'lend' ? "e.g. Arduino Uno Kit" : "e.g. Raspberry Pi"} 
                  className={`w-full bg-slate-50 p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 font-semibold text-slate-800 ${mode === 'lend' ? 'focus:ring-emerald-500' : 'focus:ring-indigo-500'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {mode === 'lend' ? 'Pickup Location' : 'Meetup / Drop-off Location'}
                </label>
                <input 
                  type="text" 
                  value={itemLocation}
                  onChange={(e) => setItemLocation(e.target.value)}
                  placeholder={mode === 'lend' ? "e.g. Hostel 4, Room 102" : "e.g. Library Cafe"} 
                  className={`w-full bg-slate-50 p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 font-semibold text-slate-800 ${mode === 'lend' ? 'focus:ring-emerald-500' : 'focus:ring-indigo-500'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {mode === 'lend' ? 'Original Price (₹)' : 'Willing to Pay (₹/day) - Optional'}
                </label>
                <input 
                  type="number" 
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  placeholder={mode === 'lend' ? "e.g. 1500" : "e.g. 50"} 
                  className={`w-full bg-slate-50 p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 font-semibold text-slate-800 ${mode === 'lend' ? 'focus:ring-emerald-500' : 'focus:ring-indigo-500'}`}
                />
              </div>

              {mode === 'request' && (
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">When do you need this?</label>
                  <input 
                    type="text" 
                    value={itemUrgency}
                    onChange={(e) => setItemUrgency(e.target.value)}
                    placeholder="e.g. Within 2 hours, Before 5 PM..." 
                    className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold text-slate-800"
                  />
                </div>
              )}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col items-center text-center mt-8"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-10 h-10 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-2">AI Smart Deposit</h2>
              <p className="text-slate-500 text-sm font-medium mb-8 px-4">
                Based on the item's original price of ₹{itemPrice || '0'}, our ML model suggests the following refundable deposit to ensure safe return.
              </p>

              <div className="bg-gradient-to-b from-emerald-500 to-emerald-700 w-full rounded-[2rem] p-8 text-white shadow-xl shadow-emerald-500/20">
                <p className="text-emerald-100 font-bold uppercase tracking-widest text-xs mb-2">Recommended Deposit</p>
                <h3 className="text-6xl font-black">₹{calculatedDeposit}</h3>
                <div className="mt-6 bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm">
                  100% refundable upon return
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center h-full mt-24"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${mode === 'lend' ? 'bg-emerald-100' : 'bg-indigo-100'}`}
              >
                <CheckCircle2 className={`w-12 h-12 ${mode === 'lend' ? 'text-emerald-600' : 'text-indigo-600'}`} />
              </motion.div>
              <h2 className="text-3xl font-black text-slate-800 mb-2">{mode === 'lend' ? 'Item Listed!' : 'Request Posted!'}</h2>
              <p className="text-slate-500 font-medium">
                {mode === 'lend' ? 'Your item is now visible to the campus network.' : 'Others will see your request and contact you!'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step < 3 && (
        <div className="p-6 bg-white border-t border-slate-100 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]">
          <button 
            onClick={handleNext}
            disabled={step === 1 && !itemName}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
              step === 1 && !itemName 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                : mode === 'lend' ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/30'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/30'
            }`}
          >
            {step === 1 ? 'Continue' : mode === 'lend' ? 'Confirm & List Item' : 'Post Request'}
          </button>
        </div>
      )}
    </div>
  );
}
