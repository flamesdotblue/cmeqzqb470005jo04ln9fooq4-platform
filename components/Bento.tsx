export default function Bento() {
  return (
    <section id="grid" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight neon-text">Cyberfunk Bento Grid</h2>
        <p className="mt-3 text-white/75 max-w-2xl mx-auto">A modular, neon-drenched layout to showcase features, stats, or app previews with immersive glow.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[160px] gap-4">
        <div className="relative col-span-1 sm:col-span-2 row-span-2 glass card-neon rounded-xl p-5 overflow-hidden">
          <div className="card-gradient" aria-hidden></div>
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90">Neural HUD</p>
              <h3 className="mt-2 text-xl font-bold">Real-time Signal Map</h3>
              <p className="mt-2 text-white/75">Visualize live data streams as pulsing neon vectors across your network city.</p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-cyan-300/90">
              <span className="h-2 w-2 rounded-full bg-cyan-300 animate-flicker"></span>
              <span className="text-xs">Streaming</span>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 row-span-1 glass card-neon rounded-xl p-5 overflow-hidden">
          <div className="card-gradient" aria-hidden></div>
          <h3 className="text-lg font-semibold">Synth Metrics</h3>
          <p className="mt-1 text-sm text-white/70">Latency: 3.2ms • Uptime: 99.99%</p>
          <div className="mt-4 h-2 w-full rounded bg-white/10">
            <div className="h-2 rounded bg-cyan-400/70" style={{ width: '82%' }} />
          </div>
        </div>

        <div className="relative col-span-1 row-span-2 glass card-neon rounded-xl p-5 overflow-hidden">
          <div className="card-gradient" aria-hidden></div>
          <h3 className="text-lg font-semibold">Avatar Uplink</h3>
          <p className="mt-1 text-sm text-white/70">Immersive XR & haptics</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                <span className="text-xs">XR{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative col-span-1 row-span-1 glass card-neon rounded-xl p-5 overflow-hidden">
          <div className="card-gradient" aria-hidden></div>
          <h3 className="text-lg font-semibold">Quantum Vault</h3>
          <p className="mt-1 text-sm text-white/70">Encrypted assets with neon audit trail.</p>
          <a href="#" className="mt-3 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition">
            <span>Open Vault</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="relative col-span-1 sm:col-span-2 row-span-1 glass card-neon rounded-xl p-5 overflow-hidden">
          <div className="card-gradient" aria-hidden></div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Chrono Scheduler</h3>
              <p className="mt-1 text-sm text-white/70">Predictive load balancing across cycles.</p>
            </div>
            <button className="neon-btn rounded-md px-4 py-2 text-sm">Optimize</button>
          </div>
        </div>

        <div className="relative col-span-1 row-span-1 glass card-neon rounded-xl p-5 overflow-hidden">
          <div className="card-gradient" aria-hidden></div>
          <h3 className="text-lg font-semibold">Signal Booster</h3>
          <p className="mt-1 text-sm text-white/70">Amp your presence in the neon grid.</p>
        </div>
      </div>
    </section>
  )
}
