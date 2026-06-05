import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/comingSoon.module.css'

export function ComingSoonSection() {
  const { locale } = useI18n()

  return (
    <section className="section section--tight section--warm">
      <div className="container">
        <div className="eyebrow">COMING SOON</div>
        <h2 className="h2">{locale === 'ja' ? '続々、ラインナップ拡大中。' : 'More brands are coming soon.'}</h2>
        <p className={`p ${styles.lead}`}>
          {locale === 'ja'
            ? '近日、取り扱いブランドがさらに増えます。早期パートナーには優先的にご案内します。'
            : 'We are adding more brands shortly. Early partners will be informed first.'}
        </p>

        <div className={styles.grid}>
          <div className={styles.tile}>
            <div className={styles.tileBig}>COMING</div>
            <div className={styles.tileSmall}>VT</div>
            <div className={styles.tileCaption}>Coming Soon</div>
          </div>
          <div className={styles.tile}>
            <div className={styles.tileBig}>COMING</div>
            <div className={styles.tileSmall}>New Brand</div>
            <div className={styles.tileCaption}>Coming Soon</div>
          </div>
          <div className={styles.tile}>
            <div className={styles.tileBig}>COMING</div>
            <div className={styles.tileSmall}>New Brand</div>
            <div className={styles.tileCaption}>Coming Soon</div>
          </div>
        </div>
      </div>
    </section>
  )
}

