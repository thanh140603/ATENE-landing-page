import { useI18n } from '../../../app/i18n/I18nContext'
import styles from '../../../styles/company.module.css'

const STATS = [
  {
    value: '3',
    labelMainJa: '拠点',
    labelSubJa: '(韓国・日本・ベトナム）',
    labelMainEn: 'Offices',
    labelSubEn: '(Korea, Japan, Vietnam)',
    accent: 'lime',
  },
  {
    value: '10+',
    labelMainJa: '取り扱いブランド',
    labelSubJa: '',
    labelMainEn: 'Brands managed',
    labelSubEn: '',
    accent: 'lime',
  },
  {
    value: '0円',
    labelMainJa: '固定費・ノルマ',
    labelSubJa: '',
    labelMainEn: 'Fixed fees or quotas',
    labelSubEn: '',
    accent: 'dark',
  },
  {
    value: 'RS',
    labelMainJa: '成果報酬モデル',
    labelSubJa: '',
    labelMainEn: 'Performance-based model',
    labelSubEn: '',
    accent: 'dark',
  },
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
    <section id="company" className={styles.section}>
      <div className={styles.split}>
        <div className={styles.leftPanel}>
          <div className={styles.leftInner}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowAbout}>ABOUT</span>{' '}
              <span className={styles.eyebrowBrand}>ATENE</span>
            </div>

            <h2 className={styles.title}>
              {locale === 'ja' ? (
                <>
                  日本向け
                  <br />
                  韓国コスメ専門会社
                </>
              ) : (
                <>
                  K-beauty specialist
                  <br />
                  for the Japan market
                </>
              )}
            </h2>

            <p className={styles.copy}>
              {locale === 'ja' ? (
                <>
                  ATENEは、韓国・日本・ベトナムに拠点を持つK-beauty専門のマーケティング＆コマースエージェンシー。
                  Qoo10・TikTok Shop・Amazonの日本市場運営を一貫して手がけ、ブランドとインフルエンサーをつなぎます。
                  成果報酬（RS）モデルが私たちの基盤。だから、あなたが売れれば私たちも伸びる。同じ方向を向けるパートナーです。
                </>
              ) : (
                <>
                  ATENE is a K-beauty marketing and commerce agency with hubs in Korea, Japan, and Vietnam. We
                  operate Qoo10, TikTok Shop, and Amazon in Japan end-to-end, connecting brands with creators. Our
                  revenue-share (RS) model means when you grow, we grow — fully aligned partners.
                </>
              )}
            </p>

            <div className={styles.divider} />

            <div className={styles.trusted}>TRUSTED BY JP CREATORS</div>
            <div className={styles.names}>
              {locale === 'ja' ? (
                <>
                  Ayaka (@mcosmem) ・ Shin Anna (@annas_dazz)
                  <br />
                  Etsuko(@etsuko_mrok) ・ Mayu (@_mayucc)
                </>
              ) : (
                <>
                  Ayaka (@mcosmem) · Shin Anna (@annas_dazz)
                  <br />
                  Etsuko (@etsuko_mrok) · Mayu (@_mayucc)
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.rightInner}>
            <div className={styles.stats}>
              {STATS.map((s) => (
                <div key={s.value} className={styles.statCard}>
                  <div
                    className={`${styles.statValue} ${s.accent === 'lime' ? styles.statValueLime : styles.statValueDark}`}
                  >
                    {s.value}
                  </div>
                  <div className={styles.statLabelMain}>
                    {locale === 'ja' ? s.labelMainJa : s.labelMainEn}
                  </div>
                  {s.labelSubJa ? (
                    <div className={styles.statLabelSub}>
                      {locale === 'ja' ? s.labelSubJa : s.labelSubEn}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className={styles.benefitsCard}>
              <div className={styles.benefitsBadge}>
                {locale === 'ja' ? 'パートナー特典' : 'Partner benefits'}
              </div>

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
