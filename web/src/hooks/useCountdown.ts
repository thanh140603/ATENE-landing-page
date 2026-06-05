import { useEffect, useMemo, useState } from 'react'

function clampToZero(ms: number) {
  return Math.max(0, ms)
}

export function useCountdown(target: Date) {
  const targetMs = useMemo(() => target.getTime(), [target])
  const [nowMs, setNowMs] = useState(() => Date.now())

  useEffect(() => {
    const t = window.setInterval(() => setNowMs(Date.now()), 1000)
    return () => window.clearInterval(t)
  }, [])

  const diffMs = clampToZero(targetMs - nowMs)
  const totalSeconds = Math.floor(diffMs / 1000)

  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { diffMs, days, hours, minutes, seconds }
}

