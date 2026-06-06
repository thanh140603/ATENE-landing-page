import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/comingSoon.module.css'

export function ComingSoonSection() {
  const { locale } = useI18n()

  return (
    <section id="coming-soon" className="section section--tight section--base">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copyCol}>
            <div className={styles.eyebrow}>COMING SOON</div>
            <h2 className="h2">{locale === 'ja' ? 'ブランドリストは拡大中。' : 'Our brand list is expanding.'}</h2>
            <p className={`p ${styles.lead}`}>
              {locale === 'ja'
                ? '追加ブランドは近日公開、最初のパートナーには優先案内。'
                : 'More brands coming soon — early partners get priority access.'}
            </p>
          </div>

          <div className={styles.tilesCol}>
            <div className={styles.grid}>
              {[0, 1, 2].map((idx) => (
                <div key={idx} className={styles.tile}>
                  <div className={styles.tileBig}>NEW Brand</div>
                  <div className={styles.tileSmall}>COMING SOON...</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
