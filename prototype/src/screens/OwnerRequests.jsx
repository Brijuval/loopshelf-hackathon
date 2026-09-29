import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';

export default function OwnerRequests({ onNavigate, requestStatus, setRequestStatus }) {
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full overflow-y-auto md:max-w-2xl md:mx-auto md:w-full md:border-x border-slate-200 md:shadow-2xl relative">
      <div className="bg-slate-900 p-6 pt-12 text-white flex items-center gap-4">
        <button onClick={() => onNavigate('profile')} className="p-2 bg-white/20 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-black">Owner Requests</h1>
      </div>

      <div className="p-6">
        {requestStatus === 'pending' ? (
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">New Request</p>
                <h3 className="text-lg font-bold text-slate-800">Rahul wants to borrow</h3>
                <p className="text-slate-500 font-medium">HDMI Cable (3 hours)</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm">
                R
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => {
                  setRequestStatus('approved');
                  alert('Request approved! The borrower can now see their Borrow Pass.');
                  onNavigate('profile');
                }}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700"
              >
                <CheckCircle className="w-5 h-5" /> Approve
              </button>
              <button 
                className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200"
              >
                <XCircle className="w-5 h-5" /> Decline
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center p-8 text-slate-400 font-medium">
            No pending requests at this time.
          </div>
        )}
      </div>
    </div>
  );
}
