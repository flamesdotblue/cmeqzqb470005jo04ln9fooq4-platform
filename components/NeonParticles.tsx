"use client"
import { useEffect, useRef } from 'react'

export default function NeonParticles() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const resizeObserver = new ResizeObserver(() => {
      canvas.width = Math.floor(canvas.offsetWidth * dpr)
      canvas.height = Math.floor(canvas.offsetHeight * dpr)
      width = canvas.width
      height = canvas.height
    })
    resizeObserver.observe(canvas)

    const particles: { x: number; y: number; vx: number; vy: number; r: number; c: string }[] = []
    const colors = ['#00F5FF', '#FF00C8', '#FF4DDE']
    const count = 80

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 * dpr,
        vy: (Math.random() - 0.5) * 0.25 * dpr,
        r: Math.random() * 1.8 * dpr + 0.4 * dpr,
        c: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      // subtle vignette background glow
      const grd = ctx.createRadialGradient(width * 0.7, height * 0.3, 0, width * 0.7, height * 0.3, Math.max(width, height) * 0.8)
      grd.addColorStop(0, 'rgba(0,245,255,0.03)')
      grd.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // soft glow
        ctx.beginPath()
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        g.addColorStop(0, `${p.c}66`)
        g.addColorStop(1, '#0000')
        ctx.fillStyle = g
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()

        // core
        ctx.beginPath()
        ctx.fillStyle = p.c
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      resizeObserver.disconnect()
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}
