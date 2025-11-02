import React, { useState } from 'react';
import { Server, Wallet, Network } from 'lucide-react';

export default function ProviderForm() {
  const [form, setForm] = useState({ gpu: '', vram: '', location: '', price: '1.00', wallet: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Node registered: ${form.gpu} • ${form.vram} • ${form.location} • $${form.price}/hr`);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Provide your GPU</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Share capacity when you want, pause anytime. You decide the price and visibility.
          </p>
          <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-3"><Server className="h-5 w-5 text-indigo-600" />Secure, containerized job runner</div>
            <div className="flex items-center gap-3"><Network className="h-5 w-5 text-indigo-600" />Bandwidth optimized uploads</div>
            <div className="flex items-center gap-3"><Wallet className="h-5 w-5 text-indigo-600" />Transparent per-minute payouts</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">GPU Model</label>
              <input name="gpu" value={form.gpu} onChange={handleChange} required placeholder="e.g., RTX 4090" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">VRAM</label>
              <input name="vram" value={form.vram} onChange={handleChange} required placeholder="e.g., 24 GB" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Location</label>
              <input name="location" value={form.location} onChange={handleChange} required placeholder="City, Country" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Price ($/hr)</label>
              <input name="price" value={form.price} onChange={handleChange} type="number" step="0.01" min="0" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Payout Wallet</label>
              <input name="wallet" value={form.wallet} onChange={handleChange} placeholder="Your wallet address" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">By continuing you agree to our terms and privacy policy.</p>
            <button type="submit" className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Register Node</button>
          </div>
        </form>
      </div>
    </section>
  );
}
