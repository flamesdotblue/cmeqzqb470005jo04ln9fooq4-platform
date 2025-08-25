import NeonParticles from '../components/NeonParticles'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-art" aria-hidden />
      <div className="holo-grid" aria-hidden />
      <NeonParticles />
      <div className="absolute inset-0 scanlines pointer-events-none" aria-hidden />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs tracking-widest uppercase text-cyan-200/90 shadow-neon animate-pulseSoft">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-flicker" />
            Neural Interface Online
          </div>

          <h1
            data-text="Enter the Neon Net"
            className="glitch mt-6 text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight animate-glitch"
          >
            <span className="headline-neon">Enter the Neon Net</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Jack into a city of rain-soaked chrome, where sentient code haunts the alleys and every signal leaves a trace.
            Explore our cyberpunk platform that fuses holographic UI, neural analytics, and neon-lit immersion.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="neon-btn rounded-md px-8 py-3 font-semibold tracking-wide animate-flicker"
            >
              Access Console
            </a>
            <a
              href="#"
              className="rounded-md px-8 py-3 font-medium tracking-wide border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none">
          <div className="mx-auto h-32 w-[90%] max-w-5xl rounded-3xl blur-2xl opacity-70 animate-hue" style={{
            background: 'radial-gradient(60% 60% at 50% 50%, rgba(0,245,255,0.42) 0%, rgba(255,0,200,0.28) 45%, transparent 70%)'
          }} />
        </div>
      </section>

      <div className="scanlines vignette absolute inset-0 pointer-events-none" aria-hidden />
    </main>
  )
}
