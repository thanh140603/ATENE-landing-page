import {
  COMING_SOON_BRANDS,
  COMING_SOON_PLACEHOLDER_BG,
  type ComingSoonBrand,
} from '../../../consts/comingSoonBrands'
import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/comingSoon.module.css'

function BrandTile({ brand }: { brand: ComingSoonBrand }) {
  const knockoutClass =
    brand.knockout === 'darken' ? styles.logoKnockoutDarken : styles.logoKnockoutCutout

  return (
    <div className={styles.brandTile} data-brand={brand.id}>
      <div className={styles.brandTileMedia}>
        <img className={styles.brandTileBg} src={brand.background} alt="" />
        <img
          className={`${styles.brandTileLogo} ${knockoutClass}`}
          src={brand.logo}
          alt={brand.name}
          style={{ width: brand.logoWidth }}
        />
      </div>
    </div>
  )
}

function PlaceholderTile() {
  return (
    <div className={styles.brandTile} data-brand="placeholder">
      <div className={styles.brandTileMedia}>
        <img className={styles.brandTileBg} src={COMING_SOON_PLACEHOLDER_BG} alt="" />
        <div className={styles.placeholderOverlay}>
          <div className={styles.placeholderTitle}>NEW BRAND</div>
          <div className={styles.placeholderSubtitle}>COMING SOON...</div>
        </div>
      </div>
    </div>
  )
}

export function ComingSoonSection() {
  const { locale } = useI18n()

  return (
    <section id="coming-soon" className="section section--tight section--base">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>COMING SOON</h2>
          <p className={styles.subtitle}>
            {locale === 'ja' ? 'ブランドリストは拡大中。' : 'Our brand list is expanding.'}
          </p>
          <p className={styles.subtitle}>
            {locale === 'ja'
              ? '追加ブランドは近日公開、最初のパートナーには優先案内。'
              : 'More brands coming soon — early partners get priority access.'}
          </p>
        </div>

        <div className={styles.grid}>
          {COMING_SOON_BRANDS.map((brand) => (
            <BrandTile key={brand.id} brand={brand} />
          ))}
          <PlaceholderTile />
        </div>
      </div>
    </section>
  )
}
