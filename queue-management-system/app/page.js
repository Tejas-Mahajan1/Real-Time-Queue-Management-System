'use client';

import { useState, useEffect } from 'react';
import Counter from './components/Counter';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  const [counters, setCounters] = useState([
    { customers: [], totalItems: 0 },
    { customers: [], totalItems: 0 },
    { customers: [], totalItems: 0 },
  ]);
  const [itemCount, setItemCount] = useState('');
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));
  }, []);

  // Update theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const findOptimalCounter = () => {
    let minItems = Infinity;
    let counterIndex = 0;

    counters.forEach((counter, index) => {
      if (counter.totalItems < minItems) {
        minItems = counter.totalItems;
        counterIndex = index;
      }
    });

    return counterIndex;
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const items = parseInt(itemCount);
    
    if (isNaN(items) || items <= 0) {
      alert('Please enter a valid number of items');
      return;
    }

    const optimalCounter = findOptimalCounter();
    
    setCounters(prevCounters => {
      const newCounters = [...prevCounters];
      newCounters[optimalCounter] = {
        customers: [...newCounters[optimalCounter].customers, items],
        totalItems: newCounters[optimalCounter].totalItems + items
      };
      return newCounters;
    });

    setItemCount('');
  };

  return (
    <div className={`min-h-screen py-8 px-4 transition-colors duration-200 
                    ${isDark ? 'bg-gray-900' : 'bg-sky-100'}`}>
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-3xl font-bold text-center mb-2 
                     ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Hypermart Checkout System
        </h1>
        <p className={`text-center mb-8 
                     ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
          Real-time queue management system
        </p>

        <div className="mb-8">
          <form onSubmit={handleCheckout} className="flex justify-center gap-4">
            <input
              type="number"
              value={itemCount}
              onChange={(e) => setItemCount(e.target.value)}
              placeholder="Enter number of items"
              className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                       focus:ring-blue-500 text-gray-800 
                       placeholder-gray-500 transition-colors duration-200
                       ${isDark 
                         ? 'bg-gray-800 border-gray-600 text-white dark:placeholder-gray-400' 
                         : 'bg-white border-sky-200 shadow-sm'}`}
              min="1"
            />
            <button
              type="submit"
              className={`px-6 py-2 text-white rounded-lg transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       ${isDark 
                         ? 'bg-blue-500 hover:bg-blue-600 dark:focus:ring-blue-400' 
                         : 'bg-sky-500 hover:bg-sky-600 shadow-sm'}`}
            >
              Checkout Items
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counters.map((counter, index) => (
            <Counter
              key={index}
              index={index}
              customers={counter.customers}
              totalItems={counter.totalItems}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
