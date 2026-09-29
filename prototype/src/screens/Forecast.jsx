import React from 'react';

export default function Forecast({ onNavigate }) {
  const demandData = [
    { id: 1, name: 'Scientific Calculator', searches: 12, requests: 7, trend: 'High Demand', emoji: '🔢', icon: '🔥', color: 'text-rose-500', bg: 'bg-rose-50' },
    { id: 2, name: 'HDMI Cable', searches: 8, requests: 4, trend: 'Rising', emoji: '🔌', icon: '📈', color: 'text-amber-500', bg: 'bg-amber-50' },
    { id: 3, name: 'Arduino Kit', searches: 5, requests: 2, trend: 'Medium', emoji: '🤖', icon: '➖', color: 'text-slate-500', bg: 'bg-slate-100' },
  ];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col pb-24 h-screen overflow-y-auto w-full">
      <div className="bg-slate-900 p-6 pt-12 text-white">
        <h1 className="text-2xl font-black mb-1">Demand Radar</h1>
        <p className="text-slate-400 text-sm font-medium">Aggregated campus demand based on recent searches</p>
      </div>

      <div className="p-6">
        <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-2xl mb-6">
          <p className="text-indigo-800 text-sm font-medium">
            <strong>Midterms are approaching!</strong> Calculators are currently seeing a 400% spike in search volume. Have one you aren't using? List it now.
          </p>
        </div>

        <div className="space-y-4">
          {demandData.map(item => (
            <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center text-2xl`}>
                  {item.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    {item.name} <span className={item.color}>{item.icon}</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {item.searches} searches • {item.requests} requests
                  </p>
                </div>
              </div>
              <div className={`text-xs font-bold px-2 py-1 rounded-md ${item.bg} ${item.color}`}>
                {item.trend}
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onNavigate('home')}
          className="mt-8 w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-emerald-700 transition-colors"
        >
          List an Item
        </button>
      </div>
    </div>
  );
}
