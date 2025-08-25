import NeonParticles from '../components/NeonParticles'
import NavBar from '../components/NavBar'
import Bento from '../components/Bento'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <a href="#grid" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-md focus:bg-black/60 focus:text-white focus:px-3 focus:py-2">Skip to content</a>
      <div className="bg-art" aria-hidden />
      <div className="holo-grid" aria-hidden />
      <NeonParticles />
      <div className="absolute inset-0 scanlines pointer-events-none" aria-hidden />

      <NavBar />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs tracking-widest uppercase text-cyan-200/90 shadow-neon animate-pulseSoft">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-flicker" />
            Cyberfunk Protocol Active
          </div>

          <h1
            data-text="Enter the Neon Net"
            className="glitch mt-6 text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight animate-glitch"
          >
            <span className="headline-neon">Enter the Neon Net</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Step into a rain-slicked grid of chrome and code. Build, deploy, and amplify your presence with a high‑tech neon interface.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#grid" className="neon-btn rounded-md px-8 py-3 font-semibold tracking-wide animate-flicker">Explore Modules</a>
            <a href="#" className="rounded-md px-8 py-3 font-medium tracking-wide border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">Learn More</a>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none">
          <div className="mx-auto h-32 w-[90%] max-w-5xl rounded-3xl blur-2xl opacity-70 animate-hue" style={{
            background: 'radial-gradient(60% 60% at 50% 50%, rgba(0,245,255,0.42) 0%, rgba(255,0,200,0.28) 45%, transparent 70%)'
          }} />
        </div>
      </section>

      <Bento />

      <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="glass rounded-2xl border border-white/10 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Upgrade to Hyperdrive</h3>
              <p className="mt-1 text-white/75">Get priority bandwidth, deeper analytics, and avatar uplinks.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="rounded-md border border-white/10 px-4 py-2 text-sm bg-white/5 hover:bg-white/10 transition">Compare</a>
              <a href="#" className="neon-btn rounded-md px-5 py-2 text-sm font-semibold">Activate</a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 border-t border-white/10/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} NeonNet. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Status</a>
          </div>
        </div>
      </footer>

      <div className="scanlines vignette absolute inset-0 pointer-events-none" aria-hidden />
    </main>
  )
}
