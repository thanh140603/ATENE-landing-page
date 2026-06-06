import { useI18n } from '../../../app/i18n/I18nContext'
import { APPLICATION_FORM_URL } from '../../../consts/links'
import styles from '../../../styles/commission.module.css'

type CardProps = {
  tag: string
  title: string | string[]
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
  const titles = Array.isArray(title) ? title : [title]

  return (
    <div className={`${styles.card} ${variant === 'standard' ? styles.cardStandard : ''}`}>
      <div className={styles.cardTag}>{tag}</div>
      <div className={styles.cardTitle}>
        {titles.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
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
    <section id="commission" className="section section--base">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.cardsCol}>
            <div className={`grid ${styles.grid}`}>
              <CommissionCard
                variant="standard"
                tag={locale === 'ja' ? 'STANDARD（主力）' : 'STANDARD'}
                title={
                  locale === 'ja'
                    ? ['CELONIA/DELERE', 'BABACO/QUADCERA他']
                    : ['CELONIA/DELERE', 'BABACO/QUADCERA & more']
                }
                value="25%"
                bullets={
                  locale === 'ja'
                    ? ['売上に対する還元率', 'プレミアムK-Beautyフラッグシップ', '専用クーポン・トラッキングリンク提供']
                    : ['Commission on sales', 'Premium flagship K-beauty lineup', 'Unique coupons & tracking links']
                }
              />
              <CommissionCard
                tag="PURITO"
                title={locale === 'ja' ? 'グローバル人気ブランド' : 'Global popular brand'}
                value="20%"
                bullets={
                  locale === 'ja'
                    ? ['売上に対する還元率', '世界的バイラル実績あり', '認知済みでライブが回しやすい']
                    : ['Commission on sales', 'Proven global viral success', 'High awareness = easy to present live']
                }
              />
              <CommissionCard
                tag="BONUS"
                title={locale === 'ja' ? 'インセンティブ' : 'Incentive'}
                value="+α"
                bullets={
                  locale === 'ja'
                    ? ['目標達成で追加報酬【条件は応相談】', '継続パートナー優遇', '複数ブランド同時起用OK']
                    : ['Extra bonuses for hitting targets', 'Better conditions for long-term partners', 'Multiple brands at once OK']
                }
              />
            </div>
          </div>

          <div className={styles.copyCol}>
            <div className={styles.eyebrow}>COMMISSION</div>
            <h2 className="h2">{locale === 'ja' ? '成果報酬レート' : 'Result-based commission rates'}</h2>
            <p className={`p ${styles.lead}`}>
              {locale === 'ja'
                ? '固定費・ノルマは一切なし。販売実績に応じた還元のみ。ブランドごとのレートは以下の通りです'
                : 'No fixed fees, no quotas – your rewards are based purely on actual sales. Commission rates per brand are as follows.'}
            </p>
          </div>
        </div>

        <div className={styles.counterOfferBox}>
          <div>
            <div className={styles.counterOfferTitle}>
              {locale === 'ja' ? 'レートの逆オファー、歓迎します。' : 'We welcome counter-offers on rates.'}
            </div>
            <div className={`p ${styles.counterOfferText}`}>
              {copy.counterOffer.split('\n').map((line, idx, arr) => (
                <span key={idx}>
                  {line}
                  {idx < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </div>
          </div>
          <a className={styles.ctaBtn} href={APPLICATION_FORM_URL} target="_blank" rel="noreferrer">
            {locale === 'ja' ? 'フォームで提案する →' : 'Propose via form →'}
          </a>
        </div>
      </div>
    </section>
  )
}
