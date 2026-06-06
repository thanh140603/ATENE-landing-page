import { useI18n } from '../../../app/i18n/I18nContext'
import { APPLICATION_FORM_URL } from '../../../consts/links'
import styles from '../../../styles/dealTerms.module.css'

const ROWS = [
  [
    { k: '商品提供', kEn: 'Product supply', v: '無償提供（対象ブランド）', vEn: 'Free (eligible brands)' },
    { k: '配送目安', kEn: 'Delivery estimate', v: '【日数：要記入】', vEn: '[Days: TBD]' },
  ],
  [
    { k: '報酬サイクル', kEn: 'Payout cycle', v: '【締め・支払日：要記入】', vEn: '[Closing & payout date: TBD]' },
    { k: '最低出金額', kEn: 'Minimum payout', v: '【金額：要記入】', vEn: '[Amount: TBD]' },
  ],
  [
    { k: '専用クーポン', kEn: 'Dedicated coupon', v: 'パートナーごとに発行', vEn: 'Issued per partner' },
    { k: '二次利用', kEn: 'Content reuse', v: 'コンテンツの再利用範囲【要記入】', vEn: 'Scope of content reuse [TBD]' },
  ],
] as const

export function DealTermsSection() {
  const { locale } = useI18n()

  return (
    <section className={`section section--dark ${styles.section}`}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.title}>
            {locale === 'ja' ? '取引条件（事前にご確認ください）' : 'Deal terms (please check before applying)'}
          </div>

          <div className={styles.table}>
            {ROWS.map((row) => (
              <div key={row[0].k} className={styles.tableRow}>
                {row.map((cell) => (
                  <div key={cell.k} className={styles.cell}>
                    <span className={styles.k}>{locale === 'ja' ? cell.k : cell.kEn}</span>
                    <span className={styles.sep}>:</span>
                    <span className={styles.v}>{locale === 'ja' ? cell.v : cell.vEn}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.formBtnWrap}>
            <a className={styles.formBtn} href={APPLICATION_FORM_URL} target="_blank" rel="noreferrer">
              {locale === 'ja' ? 'パートナー申し込みフォームへ →' : 'Go to the partner application form →'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
