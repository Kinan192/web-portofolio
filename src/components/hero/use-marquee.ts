import { useEffect, useRef } from 'react'

export function useMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const slowRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    const group = track?.firstElementChild as HTMLElement | null
    if (!track || !group || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const mobile = window.matchMedia('(max-width: 760px)')
    let distance = 0
    let position = 0
    let speed = 0
    let previousTime = 0
    let frameId = 0

    const measure = () => {
      distance = mobile.matches ? group.offsetWidth : group.offsetHeight
      position %= distance || 1
    }
    const frame = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0
      previousTime = time
      const baseSpeed = mobile.matches ? 75 : 52
      const targetSpeed = slowRef.current ? baseSpeed * 0.18 : baseSpeed
      speed += (targetSpeed - speed) * Math.min(1, elapsed / 280)
      if (distance) position = (position + speed * elapsed / 1000) % distance
      track.style.transform = mobile.matches
        ? `translate3d(-${position}px, 0, 0)`
        : `translate3d(0, ${position - distance}px, 0)`
      frameId = requestAnimationFrame(frame)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(group)
    mobile.addEventListener('change', measure)
    frameId = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
      mobile.removeEventListener('change', measure)
    }
  }, [])

  return { trackRef, slowRef }
}
