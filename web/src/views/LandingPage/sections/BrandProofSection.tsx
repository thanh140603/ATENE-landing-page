import { BRANDS } from '../../../consts/brands'
import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/brands.module.css'

const VIDEO_CLASS: Record<string, string> = {
  PURITO: 'videoPurito',
  BABACO: 'videoBabaco',
  CELONIA: 'videoCelonia',
  DELERE: 'videoDelere',
}

export function BrandProofSection() {
  const { locale, copy } = useI18n()

  return (
    <section id="brands" className="section section--soft">
      <div className="container">
        <div className={styles.eyebrow}>BRANDS &amp; PROOF</div>
        <h2 className="h2">
          {locale === 'ja' ? '韓国で売れた実績を、そのまま日本へ。' : 'Bring proven K-beauty hits from Korea directly to Japan.'}
        </h2>
        <p className={`p ${styles.lead}`}>
          {locale === 'ja'
            ? '「売れるかどうか」は、すでに韓国で証明済み。ライブで紹介しやすいバイラル素材と販売データをご用意しています。'
            : '“Will it sell?” has already been proven in Korea. We provide viral-ready assets and sales data that are easy to present on your live.'}
        </p>

        <div className={styles.cards}>
          {BRANDS.map((b, idx) => {
            const reverse = idx % 2 === 1
            const videoClass = styles[VIDEO_CLASS[b.id] as keyof typeof styles] ?? ''

            return (
              <article key={b.id} className={`${styles.card} ${reverse ? styles.cardReverse : ''}`}>
                <div className={`${styles.video} ${videoClass}`}>
                  <a
                    className={styles.videoLink}
                    href={b.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${b.name} video`}
                  >
                    <span className={styles.playCircle} aria-hidden="true">
                      <span className={styles.playTriangle} />
                    </span>
                  </a>
                  <div className={styles.videoCaption}>
                    ▶ {b.name}｜{locale === 'ja' ? b.videoCaptionJa : b.videoCaptionEn}
                  </div>
                </div>

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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
