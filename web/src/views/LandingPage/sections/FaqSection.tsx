import { useState } from 'react'
import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/faq.module.css'

export function FaqSection() {
  const { locale, copy } = useI18n()

  return (
    <section id="faq" className={`section section--base ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.eyebrow}>FAQ</div>
          <h2 className={styles.title}>{locale === 'ja' ? 'よくあるご質問' : 'Frequently asked questions'}</h2>
        </div>

        <div className={styles.list}>
          {copy.faqApproved.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.item}>
      <button className={styles.q} type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.icon} aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open ? <div className={styles.a}>{a}</div> : null}
    </div>
  )
}
