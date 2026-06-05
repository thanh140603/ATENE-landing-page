import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/company.module.css'

const STATS = [
  { value: '3', labelJa: '拠点（韓国・日本・ベトナム）', labelEn: 'Offices (Korea, Japan, Vietnam)' },
  { value: '10+', labelJa: '取り扱いブランド', labelEn: 'Brands managed' },
  { value: '0円', labelJa: '固定費・ノルマ', labelEn: 'Fixed fees or quotas' },
  { value: 'RS', labelJa: '完全成果報酬モデル', labelEn: 'Fully performance-based' },
] as const

const BENEFITS = [
  { labelJa: '商品', labelEn: 'Product', valueJa: '無償提供', valueEn: 'Free supply' },
  { labelJa: '専用リンク', labelEn: 'Dedicated link', valueJa: 'クーポン・トラッキング付与', valueEn: 'Coupons & tracking' },
  { labelJa: '運営', labelEn: 'Operations', valueJa: '配信・出荷サポート', valueEn: 'Live & shipping support' },
  { labelJa: '素材', labelEn: 'Assets', valueJa: 'バイラル・販売データ提供', valueEn: 'Viral & sales data' },
] as const

export function CompanySection() {
  const { locale } = useI18n()

  return (
    <section id="company" className={`section section--base ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.eyebrow}>ABOUT ATENE</div>
            <h2 className="h2">
              {locale === 'ja'
                ? 'K-beauty × 日本市場、専門エージェンシー。'
                : 'A specialist agency for K-beauty in the Japanese market.'}
            </h2>
            <p className={`p ${styles.copy}`}>
              {locale === 'ja'
                ? 'ATENEは、韓国・日本・ベトナムに拠点を持つK-beauty専門のマーケティング＆コマースエージェンシー。Qoo10・TikTok Shop・Amazonの日本市場導線を整備し、ブランドとインフルエンサーをつなぎます。成果報酬（RS）モデルが私たちの基盤。あなたが売れれば私たちも伸びる、同じ方向を向けるパートナーです。'
                : 'ATENE is a K-beauty focused marketing and commerce agency with hubs in Korea, Japan, and Vietnam. We operate Qoo10, TikTok Shop, and Amazon channels for the Japanese market and connect brands with creators. Our model is revenue-share (RS) based – when you grow, we grow, so we are fully aligned as partners.'}
            </p>
            <div className={styles.divider} />
            <div className={styles.trusted}>TRUSTED BY TOP JP CREATORS</div>
            <div className={styles.names}>
              Ayaka（@mcosmem）・Shin Anna（@annas_dazz）・Etsuko・Mayu・Tsubasa 他
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.stats}>
              {STATS.map((s) => (
                <div key={s.value} className={styles.stat}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{locale === 'ja' ? s.labelJa : s.labelEn}</div>
                </div>
              ))}
            </div>

            <div className={styles.benefitsCard}>
              <div className={styles.benefitsTitle}>{locale === 'ja' ? 'パートナー特典' : 'Partner benefits'}</div>
              <div className={styles.benefits}>
                {BENEFITS.map((b) => (
                  <div key={b.labelJa} className={styles.benefit}>
                    <div className={styles.benefitLabel}>{locale === 'ja' ? b.labelJa : b.labelEn}</div>
                    <div className={styles.benefitValue}>{locale === 'ja' ? b.valueJa : b.valueEn}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
