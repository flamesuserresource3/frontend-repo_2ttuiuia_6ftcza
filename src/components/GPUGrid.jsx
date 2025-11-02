import React from 'react';
import { Cpu, Gauge } from 'lucide-react';

const sample = [
  {
    id: 1,
    name: 'NVIDIA RTX 4090',
    vram: '24 GB',
    memory: 'GDDR6X',
    location: 'Berlin, DE',
    hourly: 1.9,
    score: 98,
    available: true,
  },
  {
    id: 2,
    name: 'NVIDIA A100 80GB',
    vram: '80 GB',
    memory: 'HBM2e',
    location: 'Ashburn, US',
    hourly: 3.8,
    score: 99,
    available: false,
  },
  {
    id: 3,
    name: 'NVIDIA T4',
    vram: '16 GB',
    memory: 'GDDR6',
    location: 'Paris, FR',
    hourly: 0.35,
    score: 82,
    available: true,
  },
  {
    id: 4,
    name: 'NVIDIA RTX 3080',
    vram: '10 GB',
    memory: 'GDDR6X',
    location: 'Tokyo, JP',
    hourly: 0.85,
    score: 88,
    available: true,
  },
];

export default function GPUGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Available GPUs</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Browse live nodes and pick the best fit for your workload.</p>
        </div>
        <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 text-sm dark:border-slate-800 dark:bg-slate-900 sm:flex">
          <button className="rounded-md px-3 py-1.5 text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">Price</button>
          <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-white">Score</button>
          <button className="rounded-md px-3 py-1.5 text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">VRAM</button>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sample.map((gpu) => (
          <article key={gpu.id} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{gpu.name}</h3>
              <span className={`text-xs ${gpu.available ? 'text-emerald-600' : 'text-amber-600'}`}>{gpu.available ? 'Available' : 'In Job'}</span>
            </div>
            <div className="mt-3 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><Cpu className="h-4 w-4" />{gpu.vram}</div>
              <div className="flex items-center gap-2"><Gauge className="h-4 w-4" />Score {gpu.score}
              </div>
            </div>
            <p className="mt-3 text-slate-500 dark:text-slate-400">{gpu.memory} • {gpu.location}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-indigo-600">${gpu.hourly.toFixed(2)}/hr</p>
              <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60">Rent</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
