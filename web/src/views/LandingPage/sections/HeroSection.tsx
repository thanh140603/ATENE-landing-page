import { useI18n } from '../../../app/i18n/I18nContext'
import { APPLICATION_FORM_URL, LIVE_BOOKING_URL } from '../../../consts/links'
import styles from '../../../styles/hero.module.css'

export function HeroSection() {
  const { locale, copy } = useI18n()

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <div className={styles.eyebrowPill}>
            {locale === 'ja'
              ? 'K-BEAUTY PARTNER PROGRAM / TikTokShop Livestream'
              : 'K-BEAUTY PARTNER PROGRAM / TikTokShop Livestream'}
          </div>

          <h1 className="h1">
            {copy.headlineBefore}
            <span className={styles.kbeauty}>{copy.headlineHighlight}</span>
            {copy.headlineAfter.split('\n').map((line, idx) => (
              <span key={idx}>
                {idx > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h1>

          <p className={`p ${styles.sub}`}>
            {copy.sub.split('\n').map((line, idx, arr) => (
              <span key={idx}>
                {line}
                {idx < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>

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
            {locale === 'ja' ? 'いちばん気になる、 報酬から。' : 'Your commission, at a glance.'}
          </div>

          <div className={styles.rateGrid}>
            <div className={styles.rateLine}>
              <div className={styles.rateLabel}>
                {locale === 'ja' ? 'Celonia, Delere 他' : 'Celonia, Delere & more'}
              </div>
              <div className={styles.rateValue}>25%</div>
            </div>
            <div className={styles.rateLine}>
              <div className={styles.rateLabel}>PURITO</div>
              <div className={styles.rateValue}>20%</div>
            </div>
            <div className={styles.rateLine}>
              <div className={styles.rateLabel}>{locale === 'ja' ? '逆オファー' : 'Counter-offer'}</div>
              <div className={styles.rateValueSmall}>{locale === 'ja' ? '応相談' : 'Negotiable'}</div>
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
