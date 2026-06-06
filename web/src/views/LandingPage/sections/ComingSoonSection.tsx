import { COMING_SOON_BRANDS, COMING_SOON_PLACEHOLDER_BG } from '../../../consts/comingSoonBrands'
import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/comingSoon.module.css'

type BrandTileProps = {
  background: string
  logo: string
  name: string
  logoBlend: 'multiply' | 'screen'
  logoWidth?: string
}

function BrandTile({ background, logo, name, logoBlend, logoWidth }: BrandTileProps) {
  return (
    <div className={styles.brandTile}>
      <img className={styles.brandTileBg} src={background} alt="" />
      <div className={styles.brandTileLogoWrap}>
        <img
          className={`${styles.brandTileLogo} ${logoBlend === 'multiply' ? styles.logoMultiply : styles.logoScreen}`}
          src={logo}
          alt={name}
          style={logoWidth ? { width: logoWidth } : undefined}
        />
      </div>
    </div>
  )
}

function PlaceholderTile() {
  const { locale } = useI18n()

  return (
    <div className={styles.brandTile}>
      <img className={styles.brandTileBg} src={COMING_SOON_PLACEHOLDER_BG} alt="" />
      <div className={styles.placeholderOverlay}>
        <div className={styles.placeholderTitle}>{locale === 'ja' ? 'NEW BRAND' : 'NEW BRAND'}</div>
        <div className={styles.placeholderSubtitle}>COMING SOON...</div>
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
            <BrandTile
              key={brand.id}
              background={brand.background}
              logo={brand.logo}
              name={brand.name}
              logoBlend={brand.logoBlend}
              logoWidth={brand.logoWidth}
            />
          ))}
          <PlaceholderTile />
        </div>
      </div>
    </section>
  )
}
