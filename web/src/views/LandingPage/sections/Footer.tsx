import { APPLICATION_FORM_URL, CONTACT, LIVE_BOOKING_URL } from '../../../consts/links'
import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/footer.module.css'

export function Footer() {
  const { locale } = useI18n()

  return (
    <footer className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowAccent}>DON&apos;T</span>{' '}
          <span className={styles.eyebrowMain}>MISS OUT!</span>
        </div>

        <p className={styles.copy}>
          {locale === 'ja' ? (
            <>
              TikTok Shopのライブ枠がまだ空いています。
              <br />
              人気ブランドの配信に参加して、あなたのライブで注目を集めましょう。
              <br />
              <span className={styles.emphasis}>今すぐパートナー登録を！</span>
            </>
          ) : (
            <>
              TikTok Shop live slots are still open.
              <br />
              Join streams for popular brands and stand out on your live.
              <br />
              <span className={styles.emphasis}>Register as a partner now!</span>
            </>
          )}
        </p>

        <div className={styles.actions}>
          <a className={styles.btnPrimary} href={APPLICATION_FORM_URL} target="_blank" rel="noreferrer">
            {locale === 'ja' ? 'パートナー申し込み →' : 'Partner application →'}
          </a>
          <a className={styles.btnGhost} href={LIVE_BOOKING_URL} target="_blank" rel="noreferrer">
            {locale === 'ja' ? 'ライブ枠を予約する' : 'Reserve live slots'}
          </a>
        </div>

        <div className={styles.contactSmall}>
          <div>Contact: {CONTACT.name}</div>
          <div>LINE: {CONTACT.lineId}</div>
          <div>Email: {CONTACT.email}</div>
        </div>
      </div>
    </footer>
  )
}
