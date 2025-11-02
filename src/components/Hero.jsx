import React from 'react';
import { Rocket, Cpu, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-indigo-600">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Harness idle GPUs • Earn by the minute</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Share your GPU. Power the next AI breakthrough.
            </h1>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              Connect your hardware in minutes and start renting compute to researchers and builders worldwide. Secure, transparent, and under your control.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <Rocket className="h-5 w-5" />
                Get Started
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/50">
                <Cpu className="h-5 w-5" />
                Browse GPUs
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                End-to-end encrypted jobs
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Auto-scaling marketplace
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'RTX 4090', vram: '24 GB', price: '$1.90/hr', status: 'Available' },
                  { name: 'A100 80GB', vram: '80 GB', price: '$3.80/hr', status: 'In Job' },
                  { name: 'RTX 3080', vram: '10 GB', price: '$0.85/hr', status: 'Available' },
                  { name: 'T4', vram: '16 GB', price: '$0.35/hr', status: 'Available' },
                ].map((gpu) => (
                  <div key={gpu.name} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-900 dark:text-white">{gpu.name}</p>
                      <span className={`text-xs ${gpu.status === 'Available' ? 'text-emerald-600' : 'text-amber-600'}`}>{gpu.status}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{gpu.vram} VRAM</p>
                    <p className="mt-3 text-indigo-600">{gpu.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 p-[1px]">
                <div className="rounded-lg bg-white p-4 dark:bg-slate-950">
                  <p className="text-sm text-slate-600 dark:text-slate-300">Average queue time</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">under 30 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
