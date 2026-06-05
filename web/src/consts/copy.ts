export type Copy = {
  headline: string
  sub: string
  ctaApply: string
  ctaBook: string
  commissionExample: string
  counterOffer: string
  bookingUrgency: string
  brandHooks: {
    PURITO: string
    BABACO: string
    CELONIA: string
    DELERE: string
  }
  dealTermsProposed: string
  faqApproved: { q: string; a: string }[]
}

export const COPY_JA: Copy = {
  headline: '韓国で売れた。次は、あなたの番。',
  sub: '商品も、専用リンクも、運営サポートも、ぜんぶATENEが用意。あなたは“魅せる”ことに集中するだけ。報酬は最大25%。',
  ctaApply: '30秒で申し込む',
  ctaBook: '今すぐ枠を確保する',
  commissionExample:
    '例）客単価¥5,000 × 100本販売 = 売上¥500,000 → あなたの報酬 ¥125,000（25%）',
  counterOffer:
    '実績に自信のある方へ。レートは交渉可能です。フォームの「希望レート」に数字をご記入ください。',
  bookingUrgency: '枠は先着順。埋まり次第、締め切ります。',
  brandHooks: {
    PURITO:
      '世界中で話題されたグローバルバイラルブランド。すでに認知度が高く、初見でも視聴者が反応しやすいのが強み。ライブ招待のパートナーにもおすすめです。',
    BABACO:
      '独自のバイオテクノロジー技術を採用。主力製品「フォアバランス スポッチュ」。このニキビケア製品は使いやすく、ライブ配信にも適しています。効果はネットで拡散された動画でも実証されています。',
    CELONIA:
      '独自のNGF37幹細胞成分研究。韓国と日本で常に売り切れ、Qoo10のランキングでも上位にランクイン。ブランドの認知度と信頼性が非常に高いです。',
    DELERE:
      'ATENEの主力ブランド。キャビアを贅沢に使ったプレミアムK-Beautyライン。希少価値が高く、25周年記念仕様、毎回のメガが目玉です。',
  },
  dealTermsProposed:
    '無償（1ブランド1〜2点）/ 承認後3〜5営業日 / 月末締め・翌月15日払い / ¥5,000〜 / SNS・広告で二次利用可（クレジット表記）',
  faqApproved: [
    { q: 'フォロワー数の最低条件はありますか？', a: 'フォロワー1,000人以上が目安（個別相談可）' },
    { q: '参加に費用はかかりますか？', a: '無料です。' },
    { q: '日本国外に住んでいても参加できますか？', a: '日本国内配送が基本・海外は要相談' },
    { q: '報酬の受け取り方法は？', a: '報酬は月末締め翌月15日払い' },
    { q: '薬機法の表現が不安です。', a: 'ブランド提供の表現ガイドをご用意しています。ご不明点は運営までご相談ください。' },
  ],
} as const

export const COPY_EN: Copy = {
  headline: 'Proven in Korea. Now, it is your turn.',
  sub: 'ATENE prepares everything for you – products, unique tracking links, and full operational support – so you can focus on creating. Your commission can go up to 25%.',
  ctaApply: 'Apply in 30 seconds',
  ctaBook: 'Secure your slot now',
  commissionExample:
    'Example) Average order value ¥5,000 × 100 orders = ¥500,000 in sales → Your commission ¥125,000 (25%)',
  counterOffer:
    'If you have strong past results, we are open to rate negotiations. Please fill in your preferred rate in the “希望レート / desired rate” field in the form.',
  bookingUrgency: 'Slots are first-come, first-served and will close as soon as they are filled.',
  brandHooks: {
    PURITO:
      'A globally viral brand that took the world by storm. High awareness means viewers react easily, even on first exposure. Highly recommended for partners doing live invite streams.',
    BABACO:
      'Powered by proprietary biotechnology. Hero product: "Fore Balance Spot Patch." Easy to use and ideal for live streams. Results proven in viral videos across the web.',
    CELONIA:
      'Built on proprietary NGF37 stem cell research. Consistently sold out in Korea and Japan, ranking top on Qoo10. Exceptionally high brand awareness and trust.',
    DELERE:
      "ATENE's flagship brand. A premium K-Beauty line lavishly formulated with caviar. High scarcity value — 25th anniversary editions make every Mega-wari a headline event.",
  },
  dealTermsProposed:
    'Free product (1–2 SKUs per brand) / Ships within 3–5 business days after approval / Payout on the 15th of the following month / Minimum payout ¥5,000 / We may reuse your content for SNS & ads with credit.',
  faqApproved: [
    {
      q: 'Is there a minimum follower count?',
      a: 'Around 1,000 followers is the guideline (we can discuss case by case).',
    },
    {
      q: 'Does it cost anything to participate?',
      a: 'No, participation is free.',
    },
    {
      q: 'Can I join if I live outside Japan?',
      a: 'Domestic shipping within Japan is the default. For overseas creators, please consult us first.',
    },
    {
      q: 'How and when will I receive my commission?',
      a: 'We close at the end of each month and pay out on the 15th of the following month.',
    },
    {
      q: 'I am worried about pharmaceutical advertising regulations.',
      a: 'We provide brand-approved expression guidelines. Please contact us if you have any concerns.',
    },
  ],
}

