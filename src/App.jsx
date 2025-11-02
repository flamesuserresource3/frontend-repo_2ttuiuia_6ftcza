import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import GPUGrid from './components/GPUGrid';
import ProviderForm from './components/ProviderForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600" />
            <span className="text-lg font-bold">ComputeShare</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 sm:flex">
            <a href="#market" className="hover:text-slate-900 dark:hover:text-white">Marketplace</a>
            <a href="#how" className="hover:text-slate-900 dark:hover:text-white">How it works</a>
            <a href="#provide" className="hover:text-slate-900 dark:hover:text-white">Provide GPU</a>
          </nav>
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-slate-900">Sign in</button>
        </div>
      </header>

      <main>
        <Hero />
        <div id="how">
          <HowItWorks />
        </div>
        <div id="market">
          <GPUGrid />
        </div>
        <div id="provide">
          <ProviderForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
