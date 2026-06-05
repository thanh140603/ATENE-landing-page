import { useI18n } from '../../../app/i18n/I18nContext'
import { APPLICATION_FORM_URL } from '../../../consts/links'
import styles from '../../../styles/commission.module.css'

type CardProps = {
  tag: string
  title: string
  value: string
  bullets: string[]
  variant?: 'standard' | 'plain'
}

function renderValue(value: string) {
  if (value.endsWith('%')) {
    const main = value.slice(0, -1)
    return (
      <span className={styles.valuePercent}>
        {main}
        <span className={styles.valuePercentSign}>%</span>
      </span>
    )
  }
  if (value.includes('α')) {
    return <span className={styles.valueAlpha}>{value}</span>
  }
  return <span>{value}</span>
}

function CommissionCard({ tag, title, value, bullets, variant = 'plain' }: CardProps) {
  return (
    <div className={`${styles.card} ${variant === 'standard' ? styles.cardStandard : ''}`}>
      <div className={styles.cardTag}>{tag}</div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardValue}>{renderValue(value)}</div>
      <ul className={styles.cardList}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export function CommissionSection() {
  const { locale, copy } = useI18n()

  return (
    <section id="commission" className="section section--warm">
      <div className="container">
        <div className={styles.eyebrow}>COMMISSION</div>
        <h2 className="h2">{locale === 'ja' ? '成果報酬レート' : 'Result-based commission rates'}</h2>
        <p className={`p ${styles.lead}`}>
          {locale === 'ja'
            ? '固定費・ノルマは一切なし。販売実績に応じた還元のみ。ブランドごとのレートは以下の通りです（メガ割期間 適用）。'
            : 'No fixed fees, no quotas – your rewards are based purely on actual sales. The commission rates per brand during Mega-wari are as follows.'}
        </p>

        <div className={`grid ${styles.grid}`}>
          <CommissionCard
            variant="standard"
            tag="STANDARD ・ 主力"
            title="CELONIA / DELERE / BABACO / QUADCERA 他"
            value="25%"
            bullets={
              locale === 'ja'
                ? ['売上に対する還元率', 'プレミアムK-beautyフラッグシップ', '専用クーポン・トラッキングリンク提供']
                : ['Commission on sales', 'Premium flagship K-beauty lineup', 'Unique coupons & tracking links']
            }
          />
          <CommissionCard
            tag="PURITO"
            title="グローバル人気ブランド"
            value="20%"
            bullets={
              locale === 'ja'
                ? ['売上に対する還元率', '世界的バイラル実績あり', '認知が高くライブが回しやすい']
                : ['Commission on sales', 'Proven global viral success', 'High brand awareness = easy to present']
            }
          />
          <CommissionCard
            tag="BONUS"
            title="インセンティブ"
            value="+α"
            bullets={
              locale === 'ja'
                ? ['目標達成で追加報酬【条件は応相談】', '継続パートナー優遇', '複数ブランド同時提案OK']
                : ['Extra bonuses for hitting targets', 'Better conditions for long-term partners', 'You can promote multiple brands']
            }
          />
        </div>

        <div className={styles.counterOfferBox}>
          <div>
            <div className={styles.counterOfferTitle}>
              {locale === 'ja' ? 'レートの逆オファー、歓迎します。' : 'We welcome counter-offers on rates.'}
            </div>
            <div className={`p ${styles.counterOfferText}`}>{copy.counterOffer}</div>
          </div>
          <a className={styles.ctaBtn} href={APPLICATION_FORM_URL} target="_blank" rel="noreferrer">
            {locale === 'ja' ? 'フォームで提案する →' : 'Propose via form →'}
          </a>
        </div>
      </div>
    </section>
  )
}

