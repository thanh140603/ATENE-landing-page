import { useI18n } from '../../../app/i18n/I18nContext'
import { APPLICATION_FORM_URL, LIVE_BOOKING_URL } from '../../../consts/links'
import { useCountdown } from '../../../hooks/useCountdown'
import { pad2 } from '../../../utils/format'
import styles from '../../../styles/hero.module.css'

const MEGAWARI_END = new Date('2026-06-11T23:59:59+09:00')

export function HeroSection() {
  const { days, hours, minutes } = useCountdown(MEGAWARI_END)
  const { locale, copy } = useI18n()

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <div className={styles.badge} aria-label="Mega-wari countdown">
            {locale === 'ja'
              ? `メガ割 終了まで ${days}日 ${pad2(hours)}時間 ${pad2(minutes)}分`
              : `Mega-wari ends in ${days}d ${pad2(hours)}h ${pad2(minutes)}m`}
          </div>

          <div className="eyebrow">
            {locale === 'ja'
              ? 'K-BEAUTY PARTNER PROGRAM / 楽天メガ割 6.11 まで'
              : 'K-BEAUTY PARTNER PROGRAM / Mega-wari until June 11'}
          </div>
          <h1 className="h1">{copy.headline}</h1>
          <p className={`p ${styles.sub}`}>{copy.sub}</p>

          <div className={styles.ctas}>
            <a className="btn btn--primary" href={APPLICATION_FORM_URL} target="_blank" rel="noreferrer">
              {copy.ctaApply}
            </a>
            <a className="btn" href={LIVE_BOOKING_URL} target="_blank" rel="noreferrer">
              {copy.ctaBook}
            </a>
          </div>
        </div>

        <aside className={`card ${styles.rateCard}`} aria-label="Rate summary">
          <div className={styles.rateKicker}>
            {locale === 'ja' ? '報酬レート' : 'COMMISSION'}
          </div>

          <div className={styles.rateTitle}>
            {locale === 'ja' ? 'いちばん気になる、報酬から。' : 'Your commission, at a glance.'}
          </div>

          <div className={styles.rateGrid}>
            <div className={styles.rateLine}>
              <div className={styles.rateLabel}>CELONIA・DELERE 他</div>
              <div className={styles.rateValue}>25%</div>
            </div>
            <div className={styles.rateLine}>
              <div className={styles.rateLabel}>PURITO</div>
              <div className={styles.rateValue}>20%</div>
            </div>
            <div className={styles.rateLine}>
              <div className={styles.rateLabel}>逆オファー</div>
              <div className={styles.rateValueSmall}>応相談</div>
            </div>
          </div>

          <a className={styles.rateLink} href="#commission">
            {locale === 'ja' ? '▼ レート詳細を見る' : '▼ See rate details'}
          </a>
        </aside>
      </div>
    </section>
  )
}

