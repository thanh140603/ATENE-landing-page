import { APPLICATION_FORM_URL, CONTACT, LIVE_BOOKING_URL } from '../../../consts/links'
import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/footer.module.css'

export function Footer() {
  const { locale } = useI18n()

  return (
    <footer className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.eyebrow}>DON&apos;T MISS MEGA-WARI</div>

        <div className={styles.copy}>
          <div className={styles.head}>
            {locale === 'ja' ? (
              <>
                メガ割は、<span className={styles.highlight}>6.11</span>まで。
                <br />
                枠が埋まる前に。
              </>
            ) : (
              <>
                Mega-wari ends on <span className={styles.highlight}>6.11</span>.
                <br />
                Book before slots fill up.
              </>
            )}
          </div>
          <p className={styles.sub}>
            {locale === 'ja'
              ? '韓国で売れた実証済みブランドを、いちばん良い条件で。先着順のライブ枠が残っているうちに、今すぐパートナー登録を。'
              : 'Proven K-beauty brands from Korea, on the best terms. Register now while first-come live slots remain.'}
          </p>
        </div>

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
