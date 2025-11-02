import React from 'react';
import { Plug, Lock, Coins, Globe } from 'lucide-react';

const steps = [
  {
    icon: Plug,
    title: 'Connect your node',
    desc: 'Install a lightweight agent that exposes your GPU securely with resource limits.',
  },
  {
    icon: Lock,
    title: 'Isolated jobs',
    desc: 'Every workload runs sandboxed with encrypted model weights and datasets.',
  },
  {
    icon: Globe,
    title: 'Discoverable marketplace',
    desc: 'Your node is listed with specs, pricing, and live availability for renters.',
  },
  {
    icon: Coins,
    title: 'Get paid instantly',
    desc: 'Usage is metered per-minute with automatic payouts to your wallet.',
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">How it works</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-slate-300">
        A simple, secure flow to turn idle GPUs into on-demand compute for AI, rendering, and scientific workloads.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
