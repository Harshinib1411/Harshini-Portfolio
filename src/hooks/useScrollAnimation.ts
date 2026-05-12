import { useEffect } from 'react'
import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options?: gsap.TweenVars,
) {
  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const tween = gsap.fromTo(
      element,
      { autoAlpha: 0, y: 44, filter: 'blur(10px)' },
      {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
        ...options,
        scrollTrigger: {
          trigger: element,
          start: 'top 82%',
          once: true,
          ...(options?.scrollTrigger as ScrollTrigger.Vars | undefined),
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [options, ref])
}
