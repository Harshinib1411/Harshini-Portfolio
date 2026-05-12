import { useEffect } from 'react'
import type { RefObject } from 'react'

export function useMouseGlow<T extends HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect()
      element.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
      element.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
    }

    element.addEventListener('pointermove', handlePointerMove)
    return () => element.removeEventListener('pointermove', handlePointerMove)
  }, [ref])
}
