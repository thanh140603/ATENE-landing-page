import puritoVideo from '../assets/vids/Purito Edited.mp4'
import babacoVideo from '../assets/vids/Babaco edited.mp4'
import celoniaVideo from '../assets/vids/Celonia_Edited.mp4'
import delereVideo from '../assets/vids/Delere_Edited.mp4'

export type BrandId = 'PURITO' | 'BABACO' | 'CELONIA' | 'DELERE'

export type BrandMetric = {
  value: string
  labelJa: string
  labelEn: string
}

export type Brand = {
  id: BrandId
  name: string
  commissionLabel: string
  tagline: string
  hook: string
  metrics: BrandMetric[]
  videoCaptionJa: string
  videoCaptionEn: string
  videoSrc: string
  detailUrl?: string
}

export const BRANDS: Brand[] = [
  {
    id: 'PURITO',
    name: 'PURITO',
    commissionLabel: 'コミッション 20%',
    tagline: 'Global viral, proven worldwide',
    hook:
      '世界中で話題されたグローバルバイラルブランド。すでに認知度が高く、初見でも視聴者が反応しやすいのが強み。ライブ招待のパートナーにもおすすめです。',
    videoCaptionJa: 'グローバルバイラル動画',
    videoCaptionEn: 'global viral video',
    videoSrc: puritoVideo,
    detailUrl: 'https://app.notion.com/p/Purito-375f227e2fb08001a749caba9abbfa80?pvs=25',
    metrics: [
      { value: 'Global', labelJa: 'バイラル実績', labelEn: 'Viral track record' },
      { value: '★ 4.7', labelJa: 'Qoo10での平均評価', labelEn: 'Average rating on Qoo10' },
      { value: 'TOP 1', labelJa: 'OLIVE YOUNG', labelEn: 'OLIVE YOUNG' },
    ],
  },
  {
    id: 'BABACO',
    name: 'BABACO',
    commissionLabel: 'コミッション 25%',
    tagline: 'Acne care, that actually sticks',
    hook:
      '独自のバイオテクノロジー技術を採用。主力製品「フォアバランス スポッチュ」。このニキビケア製品は使いやすく、ライブ配信にも適しています。効果はネットで拡散された動画でも実証されています。',
    videoCaptionJa: 'バイラル動画',
    videoCaptionEn: 'viral video',
    videoSrc: babacoVideo,
    detailUrl: 'https://app.notion.com/p/Babaco-375f227e2fb080289d58cfe262a6ba91?pvs=25',
    metrics: [
      { value: 'No.1', labelJa: 'カテゴリ：ニキビケア', labelEn: 'Category: Acne care' },
      { value: '40%', labelJa: 'リピート率', labelEn: 'Repeat rate' },
    ],
  },
  {
    id: 'CELONIA',
    name: 'CELONIA',
    commissionLabel: 'コミッション 25%',
    tagline: 'Sold out, again and again',
    hook:
      '独自のNGF37幹細胞成分研究。韓国と日本で常に売り切れ、Qoo10のランキングでも上位にランクイン。ブランドの認知度と信頼性が非常に高いです。',
    videoCaptionJa: 'コラボ即完売の実績',
    videoCaptionEn: 'sold-out collab record',
    videoSrc: celoniaVideo,
    detailUrl: 'https://app.notion.com/p/Celonia-375f227e2fb080fb89cef0869271ed35?pvs=25',
    metrics: [
      { value: 'NO.1', labelJa: 'PREMIUM ANTI-AGING', labelEn: 'PREMIUM ANTI-AGING' },
      { value: 'TOP 1', labelJa: 'Qoo10ランキング', labelEn: 'Qoo10 ranking' },
    ],
  },
  {
    id: 'DELERE',
    name: 'DELERE',
    commissionLabel: 'コミッション 25%',
    tagline: 'Aesthetic glow capturing the pure essence of caviar',
    hook:
      'ATENEの主力ブランド。キャビアを贅沢に使ったプレミアムK-Beautyライン。希少価値が高く、25周年記念仕様、毎回のメガが目玉です。',
    videoCaptionJa: 'プレミアム キャビアライン',
    videoCaptionEn: 'premium caviar line',
    videoSrc: delereVideo,
    detailUrl: 'https://app.notion.com/p/Delere-375f227e2fb080449f83e50b03c2906f?pvs=25',
    metrics: [
      { value: 'HIGH', labelJa: '希少価値が高い', labelEn: 'High scarcity value' },
      { value: 'キャビア', labelJa: '高級成分', labelEn: 'Premium ingredient' },
    ],
  },
]
