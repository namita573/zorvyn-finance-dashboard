import React, { useState } from 'react';

const App = () => {
  const [userRole, setUserRole] = useState('admin'); // Simulated RBAC
  const [query, setQuery] = useState('');

  // Unique Mock Data (Data badal diya hai)
  const myTransactions = [
    { id: 101, label: 'Client Payment', dt: '2026-04-01', val: 42000, cat: 'Income' },
    { id: 102, label: 'Office Rent', dt: '2026-04-02', val: 8500, cat: 'Bills' },
    { id: 103, label: 'Cloud Hosting', dt: '2026-04-03', val: 2100, cat: 'Software' },
    { id: 104, label: 'Marketing Bonus', dt: '2026-04-04', val: 12000, cat: 'Income' },
    { id: 105, label: 'Team Lunch', dt: '2026-04-05', val: 3200, cat: 'Food' },
  ];

  const filtered = myTransactions.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase()) || 
    item.cat.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-5 md:p-12 font-sans selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Customized Header */}
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h1 className="text-3xl font-black tracking-tight text-white">Z-FIN <span className="text-emerald-400 text-lg font-light italic">v1.0</span></h1>
            <p className="text-slate-500 text-xs mt-1">Enterprise Financial Tracking</p>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800">
            <span className="text-[10px] font-bold text-slate-500 px-3 uppercase tracking-widest">Access Mode:</span>
            <button 
              onClick={() => setUserRole('admin')} 
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${userRole === 'admin' ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'hover:text-white text-slate-400'}`}>
              ADMIN
            </button>
            <button 
              onClick={() => setUserRole('viewer')} 
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${userRole === 'viewer' ? 'bg-emerald-500 text-black' : 'hover:text-white text-slate-400'}`}>
              VIEWER
            </button>
          </div>
        </nav>

        {/* Dynamic Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-7 rounded-[2rem] border border-slate-800 hover:border-emerald-500/50 transition">
              <span className="text-[10px] text-emerald-500 font-black tracking-widest">NET LIQUIDITY</span>
              <h2 className="text-4xl font-bold mt-3 text-white">₹54,200</h2>
            </div>
            <div className="bg-slate-900 p-7 rounded-[2rem] border border-slate-800">
              <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Revenue</span>
              <h2 className="text-4xl font-bold mt-3 text-emerald-400">+54k</h2>
            </div>
            <div className="bg-slate-900 p-7 rounded-[2rem] border border-slate-800">
              <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Outflow</span>
              <h2 className="text-4xl font-bold mt-3 text-rose-500">-13.8k</h2>
            </div>
          </div>

          <div className="lg:col-span-4 bg-emerald-500 p-8 rounded-[2rem] text-slate-950 flex flex-col justify-between shadow-2xl shadow-emerald-500/10">
            <h3 className="font-black text-xl leading-none">Smart<br/>Insight.</h3>
            <p className="text-sm font-medium mt-4 opacity-80 italic">"Client payments are up 12% this week. Consider re-investing in Cloud resources."</p>
          </div>
        </div>

        {/* Visual Data Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/40 p-8 rounded-[2.5rem] border border-slate-800">
            <h4 className="text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">Weekly Flow Pattern</h4>
            <div className="flex items-end gap-4 h-40">
              <div className="flex-1 bg-slate-800 rounded-2xl h-[40%] hover:bg-emerald-500 transition-all cursor-pointer"></div>
              <div className="flex-1 bg-emerald-500 rounded-2xl h-[95%] shadow-[0_0_25px_rgba(16,185,129,0.3)]"></div>
              <div className="flex-1 bg-slate-800 rounded-2xl h-[60%] hover:bg-emerald-500 transition-all"></div>
              <div className="flex-1 bg-slate-800 rounded-2xl h-[30%] hover:bg-emerald-500 transition-all"></div>
              <div className="flex-1 bg-emerald-400 rounded-2xl h-[75%]"></div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-8 rounded-[2.5rem] border border-slate-800">
            <h4 className="text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">Budget Distribution</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[11px] mb-2 font-bold"><span>REVENUE STREAM</span><span>78%</span></div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[78%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] mb-2 font-bold"><span>FIXED OVERHEADS</span><span>22%</span></div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 w-[22%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Ledger */}
        <section className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-800 shadow-3xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <h3 className="text-2xl font-bold text-white">Activity Ledger</h3>
            <div className="flex gap-4 w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Filter by label..." 
                className="bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-sm focus:border-emerald-500 outline-none w-full md:min-w-[280px] transition"
                onChange={(e) => setQuery(e.target.value)}
              />
              {userRole === 'admin' && (
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition transform active:scale-95 shadow-xl">
                  + Add Entry
                </button>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                  <th className="pb-6 text-left">Label</th>
                  <th className="pb-6 text-left">Category</th>
                  <th className="pb-6 text-right">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {filtered.map(item => (
                  <tr key={item.id} className="group hover:bg-slate-800/20 transition-colors">
                    <td className="py-6 font-medium text-slate-200">
                      {item.label}
                      <div className="text-[10px] text-slate-600 font-mono mt-1">{item.dt}</div>
                    </td>
                    <td className="py-6">
                      <span className="bg-slate-950 text-slate-400 px-3 py-1 rounded-full text-[10px] font-bold border border-slate-800">
                        {item.cat}
                      </span>
                    </td>
                    <td className={`py-6 text-right font-black text-lg ${item.cat === 'Income' ? 'text-emerald-400' : 'text-rose-500'}`}>
                      {item.cat === 'Income' ? '↑' : '↓'} ₹{item.val.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;
