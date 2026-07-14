import { useCallback, useEffect, useRef } from 'react'

const SHUFFLE_INTERVAL = 30
const RESET_DELAY = 75
const ADDITIONAL_DELAY = 50

const randomChar = () => String.fromCharCode(97 + Math.floor(Math.random() * 26))

interface HackerTextProps {
  text: string
  className?: string
  as?: 'span' | 'p' | 'div' | 'h3' | 'h4'
}

export const HackerText = ({ text, className, as: Tag = 'span' }: HackerTextProps) => {
  const charRefs = useRef<(HTMLSpanElement | null)[]>([])
  const timerIds = useRef<number[]>([])

  const clearTimers = () => {
    timerIds.current.forEach((id) => {
      window.clearTimeout(id)
      window.clearInterval(id)
    })
    timerIds.current = []
  }

  const shuffle = useCallback(() => {
    clearTimers()

    charRefs.current.forEach((el, index) => {
      if (!el) return
      const original = text[index]
      if (original === ' ') return

      const startTimeout = window.setTimeout(() => {
        const interval = window.setInterval(() => {
          el.textContent = randomChar()
        }, SHUFFLE_INTERVAL)
        timerIds.current.push(interval)

        const resetTimeout = window.setTimeout(() => {
          window.clearInterval(interval)
          el.textContent = original
        }, RESET_DELAY + index * ADDITIONAL_DELAY)
        timerIds.current.push(resetTimeout)
      }, index * SHUFFLE_INTERVAL)
      timerIds.current.push(startTimeout)
    })
  }, [text])

  useEffect(() => clearTimers, [])

  return (
    <Tag className={className} onMouseEnter={shuffle}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            charRefs.current[i] = el
          }}
          style={{ whiteSpace: 'pre' }}
        >
          {char}
        </span>
      ))}
    </Tag>
  )
}
