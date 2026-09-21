import React from 'react';

export default function DeviceFrame({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 sm:p-8 bg-gradient-to-br from-emerald-900 via-slate-900 to-indigo-900">
      <div className="relative w-full h-[100dvh] sm:w-[390px] sm:h-[844px] sm:rounded-[3rem] sm:shadow-[0_0_50px_rgba(0,0,0,0.5)] sm:overflow-hidden bg-white sm:border-[12px] border-slate-950 ring-2 ring-slate-800">
        
        {/* Dynamic Island / Notch (Only visible on desktop) */}
        <div className="hidden sm:block absolute top-2 inset-x-0 h-7 z-50 pointer-events-none">
          <div className="w-32 h-7 bg-slate-950 mx-auto rounded-full flex justify-between items-center px-3">
             <div className="w-2 h-2 rounded-full bg-slate-800/80"></div>
             <div className="w-2 h-2 rounded-full bg-indigo-500/20 blur-[1px]"></div>
          </div>
        </div>
        
        {/* Hardware Buttons */}
        <div className="hidden sm:block absolute top-32 -left-[15px] w-[3px] h-8 bg-slate-800 rounded-l-md"></div>
        <div className="hidden sm:block absolute top-48 -left-[15px] w-[3px] h-14 bg-slate-800 rounded-l-md"></div>
        <div className="hidden sm:block absolute top-64 -left-[15px] w-[3px] h-14 bg-slate-800 rounded-l-md"></div>
        <div className="hidden sm:block absolute top-48 -right-[15px] w-[3px] h-20 bg-slate-800 rounded-r-md"></div>

        {/* The App Content */}
        <div className="w-full h-full overflow-hidden bg-slate-50 relative rounded-none sm:rounded-[2.2rem]">
          {children}
        </div>
        
      </div>
    </div>
  );
}
