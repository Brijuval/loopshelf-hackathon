import React, { useState } from 'react';
import SplashScreen from './screens/Splash';
import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ItemDetailsScreen from './screens/ItemDetails';
import BorrowPassScreen from './screens/BorrowPass';
import ImpactScreen from './screens/Impact';
import MapScreen from './screens/Map';
import ProfileScreen from './screens/Profile';
import ListItemScreen from './screens/ListItem';
import ForecastScreen from './screens/Forecast';
import { Home, Leaf, Map as MapIcon, User, PlusCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [history, setHistory] = useState(['splash']);

  const navigate = (screen) => {
    if (screen === 'back') {
      if (history.length > 1) {
        const newHistory = [...history];
        newHistory.pop();
        setHistory(newHistory);
        setCurrentScreen(newHistory[newHistory.length - 1]);
      } else {
        setCurrentScreen('home');
      }
      return;
    }
    
    // For main tabs, clear deep history to prevent infinite loops
    if (['home', 'map', 'impact', 'profile'].includes(screen)) {
      setHistory(['home', screen]);
    } else {
      setHistory(prev => [...prev, screen]);
    }
    
    setCurrentScreen(screen);
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'map', icon: MapIcon, label: 'Map' },
    { id: 'impact', icon: Leaf, label: 'Impact' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-slate-50 h-full shadow-2xl relative overflow-hidden flex flex-col font-sans">
      <AnimatePresence mode="wait">
        {currentScreen === 'splash' && (
          <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col h-full absolute inset-0 z-50">
            <SplashScreen onNavigate={navigate} />
          </motion.div>
        )}
        {currentScreen === 'welcome' && (
          <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col h-full absolute inset-0 z-10">
            <WelcomeScreen onNavigate={navigate} />
          </motion.div>
        )}
        {currentScreen === 'home' && (
          <motion.div key="home" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex-1 flex flex-col h-full w-full">
            <HomeScreen 
              onNavigate={navigate} 
              onSearch={(query) => { setSearchQuery(query); setSearchFilter(''); navigate('search'); }} 
              onFilter={(tag) => { setSearchQuery(''); setSearchFilter(tag); navigate('search'); }}
              onSelectItem={(item) => { setSelectedItem(item); navigate('details'); }}
            />
          </motion.div>
        )}
        {currentScreen === 'search' && (
          <motion.div key="search" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="flex-1 flex flex-col h-full w-full bg-white z-20 absolute inset-0">
            <SearchScreen 
              initialQuery={searchQuery}
              initialFilter={searchFilter}
              onNavigate={navigate}
              onSelectItem={(item) => { setSelectedItem(item); navigate('details'); }}
            />
          </motion.div>
        )}
        {currentScreen === 'details' && (
          <motion.div key="details" initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="flex-1 flex flex-col h-full w-full bg-white z-30 absolute inset-0">
            <ItemDetailsScreen 
              item={selectedItem} 
              onNavigate={navigate} 
            />
          </motion.div>
        )}
        {currentScreen === 'pass' && (
          <motion.div key="pass" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="flex-1 flex flex-col h-full w-full z-40 absolute inset-0">
            <BorrowPassScreen 
              item={selectedItem} 
              onNavigate={navigate} 
            />
          </motion.div>
        )}
        {currentScreen === 'impact' && (
          <motion.div key="impact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col h-full w-full bg-emerald-600">
            <ImpactScreen 
              onNavigate={navigate} 
            />
          </motion.div>
        )}
        {currentScreen === 'map' && (
          <motion.div key="map" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col h-full w-full">
            <MapScreen 
              onNavigate={navigate} 
              onSelectItem={(item) => { setSelectedItem(item); navigate('details'); }}
            />
          </motion.div>
        )}
        {currentScreen === 'profile' && (
          <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col h-full w-full">
            <ProfileScreen 
              onNavigate={navigate} 
            />
          </motion.div>
        )}
        {currentScreen === 'list_item' && (
          <motion.div key="list_item" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="flex-1 flex flex-col h-full w-full z-50 absolute inset-0">
            <ListItemScreen 
              onNavigate={navigate} 
            />
          </motion.div>
        )}
        {currentScreen === 'forecast' && (
          <motion.div key="forecast" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col h-full w-full bg-slate-50 z-20 absolute inset-0">
            <ForecastScreen 
              onNavigate={navigate} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation for Prototype */}
      {['home', 'map', 'impact', 'profile'].includes(currentScreen) && (
        <div className="absolute bottom-0 w-full max-w-md bg-white/90 backdrop-blur-md border-t border-slate-200 flex justify-around items-center p-2 pb-6 z-40 shadow-[0_-8px_15px_-3px_rgba(0,0,0,0.05)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button 
                key={item.id}
                onClick={() => navigate(item.id)} 
                className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
              >
                <motion.div animate={{ scale: isActive ? 1.1 : 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                <span className={`text-[10px] font-bold mt-1 ${isActive ? 'opacity-100' : 'opacity-70'}`}>{item.label}</span>
              </button>
            );
          })}
          
          {/* Floating Action Button inside Nav */}
          <button 
            onClick={() => navigate('list_item')}
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white p-3 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-700 transition-colors hover:-translate-y-1"
          >
            <PlusCircle className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
