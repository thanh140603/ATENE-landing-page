import puritoVideo from '../assets/vids/purito.mp4'
import babacoVideo from '../assets/vids/babaco.mp4'
import celoniaVideo from '../assets/vids/celonia.mp4'
import delereVideo from '../assets/vids/delere.mp4'

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
}

export const BRANDS: Brand[] = [
  {
    id: 'PURITO',
    name: 'PURITO',
    commissionLabel: '報酬 20%',
    tagline: 'Global viral, proven worldwide',
    hook: '世界が認めた定番。説明不要で売れる。',
    videoCaptionJa: 'グローバルバイラル動画',
    videoCaptionEn: 'global viral video',
    videoSrc: puritoVideo,
    metrics: [
      { value: 'Global', labelJa: 'バイラル実績', labelEn: 'Viral track record' },
      { value: '★【4.X】', labelJa: '平均レビュー評価', labelEn: 'Average review rating' },
      { value: '【数値】', labelJa: '韓国累計販売数', labelEn: 'Cumulative sales in Korea' },
    ],
  },
  {
    id: 'BABACO',
    name: 'BABACO',
    commissionLabel: '報酬 25%',
    tagline: 'Acne care, that actually sticks',
    hook: '貼るだけビフォーアフター。ライブ映えNo.1のニキビパッチ。',
    videoCaptionJa: 'バイラル動画',
    videoCaptionEn: 'viral video',
    videoSrc: babacoVideo,
    metrics: [
      { value: 'No.1', labelJa: 'ニキビケア部門', labelEn: 'Acne care category' },
      { value: '【数値】', labelJa: 'パッチ累計販売', labelEn: 'Patch sales' },
      { value: '【％】', labelJa: 'リピート率', labelEn: 'Repeat rate' },
    ],
  },
  {
    id: 'CELONIA',
    name: 'CELONIA',
    commissionLabel: '報酬 25%',
    tagline: 'Sold out, again and again',
    hook: 'コラボは即完売の常連。出せば、動く。',
    videoCaptionJa: 'コラボ即完売の実績',
    videoCaptionEn: 'sold-out collab record',
    videoSrc: celoniaVideo,
    metrics: [
      { value: '即完売', labelJa: 'コラボ実績', labelEn: 'Collab record' },
      { value: 'TOP', labelJa: 'Qoo10ランキング', labelEn: 'Qoo10 ranking' },
      { value: '【数値】', labelJa: 'レビュー件数', labelEn: 'Review count' },
    ],
  },
  {
    id: 'DELERE',
    name: 'DELERE',
    commissionLabel: '報酬 25% ・ 主力',
    tagline: 'Caviar premium, the flagship',
    hook: 'キャビア配合のプレミアム。単価が高い＝あなたの報酬も大きい。',
    videoCaptionJa: 'プレミアム キャビアライン',
    videoCaptionEn: 'premium caviar line',
    videoSrc: delereVideo,
    metrics: [
      { value: '主力', labelJa: 'メガ割フラッグシップ', labelEn: 'Mega-wari flagship' },
      { value: 'High', labelJa: '客単価・還元率', labelEn: 'Unit price & return' },
      { value: 'Caviar', labelJa: 'プレミアム処方', labelEn: 'Premium formula' },
    ],
  },
]
