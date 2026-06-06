import { useEffect, useRef, useState } from 'react'
import { BRANDS } from '../../../consts/brands'
import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/brands.module.css'

const VIDEO_CLASS: Record<string, string> = {
  PURITO: 'videoPurito',
  BABACO: 'videoBabaco',
  CELONIA: 'videoCelonia',
  DELERE: 'videoDelere',
}

type BrandVideoProps = {
  src: string
  caption: string
  className: string
}

function BrandVideo({ src, caption, className }: BrandVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = muted
  }, [muted])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      void video.play().catch(() => {})
    } else {
      video.pause()
    }
  }

  const toggleMute = () => {
    setMuted((value) => !value)
  }

  const handleSeek = (value: number) => {
    const video = videoRef.current
    if (!video || !Number.isFinite(duration) || duration <= 0) return

    const nextTime = (value / 100) * duration
    video.currentTime = nextTime
    setProgress(value)
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (!video) return
    setDuration(video.duration || 0)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return
    setProgress((video.currentTime / video.duration) * 100)
  }

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        className={styles.videoEl}
        src={src}
        playsInline
        muted={muted}
        loop
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div className={styles.videoCaption}>▶ {caption}</div>

      <div className={styles.videoScrim} aria-hidden="true" />

      <div className={styles.videoOverlay}>
        <button
          type="button"
          className={styles.centerPlay}
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          {playing ? (
            <span className={styles.pauseIcon} aria-hidden="true">
              <span />
              <span />
            </span>
          ) : (
            <span className={styles.playIcon} aria-hidden="true" />
          )}
        </button>

        <div className={styles.bottomControls}>
          <div className={styles.progressWrap}>
            <input
              className={styles.progressInput}
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={progress}
              onChange={(event) => handleSeek(Number(event.target.value))}
              aria-label="Video progress"
            />
          </div>

          <button
            type="button"
            className={styles.muteBtn}
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            {muted ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.5 12a4.5 4.5 0 0 0-2.5-4.03v8.05A4.48 4.48 0 0 0 16.5 12Z" />
                <path d="M5 9v6h4l5 4V5L9 9H5Z" />
                <path d="M19 9l-6 6M13 9l6 6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 9v6h4l5 4V5L9 9H5Z" />
                <path d="M16.5 12a4.5 4.5 0 0 0-2.5-4.03v8.05A4.48 4.48 0 0 0 16.5 12Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export function BrandProofSection() {
  const { locale, copy } = useI18n()

  return (
    <section id="brands" className="section section--soft">
      <div className="container">
        <h2 className="h2">
          {locale === 'ja' ? '韓国の高品質な化粧品ブランド' : 'Premium K-beauty brands from Korea'}
        </h2>
        <p className={`p ${styles.lead}`}>
          {locale === 'ja'
            ? '以下は各ブランドの詳細情報と主要セールスポイントです。'
            : 'Detailed information and key selling points for each brand.'}
        </p>

        <div className={styles.cards}>
          {BRANDS.map((b, idx) => {
            const reverse = idx % 2 === 1
            const videoClass = styles[VIDEO_CLASS[b.id] as keyof typeof styles] ?? ''
            const caption = `${b.name}｜${locale === 'ja' ? b.videoCaptionJa : b.videoCaptionEn}`

            return (
              <article key={b.id} className={`${styles.card} ${reverse ? styles.cardReverse : ''}`}>
                <BrandVideo
                  src={b.videoSrc}
                  caption={caption}
                  className={`${styles.video} ${videoClass}`}
                />

                <div className={styles.text}>
                  <div className={styles.kicker}>{b.commissionLabel}</div>
                  <h3 className={styles.name}>{b.name}</h3>
                  <p className={styles.tagline}>{b.tagline}</p>
                  <p className={`p ${styles.hook}`}>{copy.brandHooks[b.id]}</p>

                  <div className={styles.metrics}>
                    {b.metrics.map((m) => (
                      <div key={`${b.id}-${m.labelJa}`} className={styles.metric}>
                        <div className={styles.metricValue}>{m.value}</div>
                        <div className={styles.metricLabel}>{locale === 'ja' ? m.labelJa : m.labelEn}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {b.detailUrl ? (
                  <a
                    className={styles.moreBar}
                    href={b.detailUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {locale === 'ja' ? 'もっと見る' : 'See more'}
                  </a>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
