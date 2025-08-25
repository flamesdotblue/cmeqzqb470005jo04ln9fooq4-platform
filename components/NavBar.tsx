"use client"
import { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 glass rounded-xl border border-white/10 shadow-neon">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-cyan-400/15 text-cyan-300 shadow-[0_0_32px_rgba(0,245,255,0.35)]">
                <span className="absolute inset-0 rounded-md blur-md bg-cyan-400/25" aria-hidden />
                <span className="font-black">Ξ</span>
              </span>
              <span className="font-semibold tracking-wide">NeonNet</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#grid" className="text-white/80 hover:text-white transition-colors">Grid</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="rounded-md border border-white/10 px-4 py-2 text-sm bg-white/5 hover:bg-white/10 transition">Sign in</a>
              <a href="#" className="neon-btn rounded-md px-4 py-2 text-sm font-semibold">Launch App</a>
            </div>

            <button aria-label="Toggle menu" className="md:hidden rounded-md border border-white/10 bg-white/5 px-3 py-2" onClick={() => setOpen(v => !v)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/80"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              <a href="#features" className="block text-white/80 hover:text-white">Features</a>
              <a href="#grid" className="block text-white/80 hover:text-white">Grid</a>
              <a href="#pricing" className="block text-white/80 hover:text-white">Pricing</a>
              <a href="#contact" className="block text-white/80 hover:text-white">Contact</a>
              <div className="flex gap-2 pt-2">
                <a href="#" className="flex-1 rounded-md border border-white/10 px-4 py-2 text-sm bg-white/5 hover:bg-white/10 transition">Sign in</a>
                <a href="#" className="flex-1 neon-btn rounded-md px-4 py-2 text-sm font-semibold text-center">Launch</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
