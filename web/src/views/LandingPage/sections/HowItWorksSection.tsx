import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/howItWorks.module.css'

const STEPS = [
  {
    n: '01',
    titleJa: '申し込む',
    titleEn: 'Apply',
    bodyJa: 'フォームに基本情報・希望ブランド・サンプル希望・希望レートを入力。',
    bodyEn: 'Enter your basic info, preferred brands, sample request, and preferred rate in the form.',
  },
  {
    n: '02',
    titleJa: 'サンプル受け取り',
    titleEn: 'Receive samples',
    bodyJa: '審査後、希望商品を無償でお届け。専用クーポン・トラッキングリンクを発行します。',
    bodyEn: 'After review, we deliver your chosen products for free and issue coupons and tracking links.',
  },
  {
    n: '03',
    titleJa: 'ライブ＆報酬',
    titleEn: 'Go live & earn',
    bodyJa: '予約した枠で配信。売上に応じた報酬をでお支払いします。',
    bodyEn: 'Go live in your reserved slot. Payouts based on sales follow your agreed schedule.',
  },
] as const

export function HowItWorksSection() {
  const { locale } = useI18n()

  return (
    <section className={`section section--dark ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.eyebrow}>HOW IT WORKS</div>
          <h2 className="h2">{locale === 'ja' ? 'かんたん3ステップ' : '3 simple steps'}</h2>
          <p className={`p ${styles.lead}`}>
            {locale === 'ja'
              ? '申し込みからライブ、報酬受け取りまで。迷うところはありません'
              : 'From application to going live to receiving rewards — no confusion.'}
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((s) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.num}>{s.n}</div>
              <div className={styles.stepTitle}>{locale === 'ja' ? s.titleJa : s.titleEn}</div>
              <div className={styles.body}>{locale === 'ja' ? s.bodyJa : s.bodyEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
