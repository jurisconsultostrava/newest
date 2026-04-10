'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const FS_BIG = 32
    const FS_SMALL = 20
    const SPEED = 0.1
    const PAUSE_DURATION = 90

    let W: number, H: number, cols: number
    let drops: number[], pauseFrames: number[], smallAfterPause: boolean[], frozenChar: string[]
    let animId: number

    function init() {
      const hero = canvas!.parentElement!
      W = canvas!.width = hero.offsetWidth || window.innerWidth
      H = canvas!.height = hero.offsetHeight || window.innerHeight
      cols = Math.floor(W / FS_BIG)
      drops = Array.from({ length: cols }, () => Math.random() * -(H / FS_BIG))
      pauseFrames = Array.from({ length: cols }, () => 0)
      smallAfterPause = Array.from({ length: cols }, () => false)
      frozenChar = Array.from({ length: cols }, () => Math.random() > 0.5 ? '1' : '0')
    }

    function draw() {
      ctx.fillStyle = 'rgba(4,6,14,0.08)'
      ctx.fillRect(0, 0, W, H)

      for (let i = 0; i < cols; i++) {
        const fs = smallAfterPause[i] ? FS_SMALL : FS_BIG
        const y = drops[i] * fs
        const isPaused = pauseFrames[i] > 0

        const char0 = isPaused ? frozenChar[i] : (Math.random() > 0.5 ? '1' : '0')
        const char1 = isPaused ? frozenChar[i] : (Math.random() > 0.5 ? '1' : '0')
        const char2 = isPaused ? frozenChar[i] : (Math.random() > 0.5 ? '1' : '0')

        ctx.font = `${fs}px monospace`
        ctx.fillStyle = 'rgba(255,220,130,0.95)'
        ctx.fillText(char0, i * FS_BIG, y)
        ctx.fillStyle = 'rgba(196,149,74,0.55)'
        ctx.fillText(char1, i * FS_BIG, y - fs * 2)
        ctx.fillStyle = 'rgba(160,120,56,0.25)'
        ctx.fillText(char2, i * FS_BIG, y - fs * 4)

        if (isPaused) {
          pauseFrames[i]--
          if (pauseFrames[i] === 0) smallAfterPause[i] = true
        } else {
          frozenChar[i] = Math.random() > 0.5 ? '1' : '0'
          const prevY = drops[i]
          drops[i] += SPEED
          const halfRow = H / (2 * FS_BIG)
          if (!smallAfterPause[i] && prevY < halfRow && drops[i] >= halfRow) {
            pauseFrames[i] = PAUSE_DURATION
          }
          if (drops[i] * FS_BIG > H && Math.random() > 0.985) {
            drops[i] = Math.random() * -20
            pauseFrames[i] = 0
            smallAfterPause[i] = false
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        init()
        window.addEventListener('resize', init)
        draw()
      })
    })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <canvas ref={canvasRef} style={{
      position: 'absolute', inset: 0, zIndex: 0,
      opacity: 0.15, pointerEvents: 'none',
    }} />
  )
}
