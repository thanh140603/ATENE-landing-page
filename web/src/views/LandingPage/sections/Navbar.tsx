import { APPLICATION_FORM_URL } from '../../../consts/links'
import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/navbar.module.css'

const NAV_JA = [
  { href: '#commission', label: '報酬' },
  { href: '#booking', label: 'ライブ予約' },
  { href: '#brands', label: 'ブランド' },
  { href: '#company', label: '会社案内' },
  { href: '#faq', label: 'FAQ' },
] as const

const NAV_EN = [
  { href: '#commission', label: 'Commission' },
  { href: '#booking', label: 'Live booking' },
  { href: '#brands', label: 'Brands' },
  { href: '#company', label: 'Company' },
  { href: '#faq', label: 'FAQ' },
] as const

export function Navbar() {
  const { locale, setLocale } = useI18n()
  const nav = locale === 'ja' ? NAV_JA : NAV_EN

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandNav}>
          <a className={styles.logo} href="#top" aria-label="ATENE">
            ATEN<span className={styles.logoAccent}>E</span>
          </a>

          <nav className={styles.nav} aria-label="Primary">
            {nav.map((i) => (
              <a key={i.href} className={styles.navLink} href={i.href}>
                {i.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.actions}>
          <a className={styles.ctaBtn} href={APPLICATION_FORM_URL} target="_blank" rel="noreferrer">
            {locale === 'ja' ? 'パートナー申し込み' : 'Brand Partner'}
          </a>

          <div className={styles.localeSwitch} aria-label="Language switcher">
            <button
              type="button"
              className={`${styles.localeBtn} ${locale === 'ja' ? styles.localeBtnActive : ''}`}
              onClick={() => setLocale('ja')}
            >
              日本語
            </button>
            <span className={styles.localeDivider}>/</span>
            <button
              type="button"
              className={`${styles.localeBtn} ${locale === 'en' ? styles.localeBtnActive : ''}`}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

