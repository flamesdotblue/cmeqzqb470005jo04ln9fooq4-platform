import type { Metadata } from 'next'
import './globals.css'
import { Orbitron, JetBrains_Mono } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jbm' })

export const metadata: Metadata = {
  title: 'Cyberpunk Neon Hero',
  description: 'A sleek, high-tech, neon-drenched cyberpunk hero section with immersive effects.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased [--tw-ring-offset-shadow:0_0_#0000] [--tw-ring-shadow:0_0_#0000]">
        {children}
      </body>
    </html>
  )
}
