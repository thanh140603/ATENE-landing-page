export type Copy = {
  headlineBefore: string
  headlineHighlight: string
  headlineAfter: string
  sub: string
  ctaApply: string
  ctaBook: string
  counterOffer: string
  brandHooks: {
    PURITO: string
    BABACO: string
    CELONIA: string
    DELERE: string
  }
  faqApproved: { q: string; a: string }[]
}

export const COPY_JA: Copy = {
  headlineBefore: '話題の',
  headlineHighlight: 'K-BEAUTY',
  headlineAfter: 'を、\nあなたのライブで',
  sub: '韓国で実証済みのヒットブランドを、高還元の成果報酬で商品提供 + 専用リンク + 運営サポートまで、ATENEがすべて用意します。\nあとは魅せるだけ。',
  ctaApply: 'パートナー申し込み',
  ctaBook: 'ライブ枠を予約',
  counterOffer:
    '大きな実績・特別な企画をお持ちの方は、申し込みフォームの「希望レート」欄にご記入ください。\n内容を拝見し、個別にご提案します。',
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
  faqApproved: [
    {
      q: 'フォロワー数の最低条件はありますか？',
      a: 'フォロワー数の最低条件はありません。ライブ配信の効果やコンテンツの質を重視して評価します。',
    },
    {
      q: '参加に費用はかかりますか？',
      a: '参加は完全に無料です。ライブ配信で使用する商品は無償で提供され、いかなる費用も発生しません。',
    },
    {
      q: '日本国外に住んでいても参加できますか？',
      a: '海外在住でも参加可能ですが、商品の配送やタイムゾーンに注意してください。お客様が日本国内であれば問題ありません。海外の場合でもサンプルは受け取れますが、ライブ配信の時間はJSTに合わせて調整する必要があります。',
    },
    {
      q: '報酬の受け取り方法は？',
      a: '報酬は、あらかじめ合意したサイクル（例：週次または月次）に基づき、あなたのリンクやアフィリエイト経由の売上結果に応じて支払われます。支払い方法は銀行振込または契約で合意した方法となります。',
    },
  ],
}

export const COPY_EN: Copy = {
  headlineBefore: 'Trending ',
  headlineHighlight: 'K-BEAUTY',
  headlineAfter: ' —\non your live.',
  sub: 'ATENE provides proven hit brands from Korea with high commission rates — products, dedicated links, and full operational support.\nAll you need to do is showcase them.',
  ctaApply: 'Partner application',
  ctaBook: 'Reserve live slots',
  counterOffer:
    'If you have strong track records or special campaign ideas, enter your preferred rate in the application form.\nWe will review and propose individually.',
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
  faqApproved: [
    {
      q: 'Is there a minimum follower count?',
      a: 'There is no minimum follower requirement. We evaluate live performance and content quality.',
    },
    {
      q: 'Does it cost anything to participate?',
      a: 'Participation is completely free. Products used in your live streams are provided at no cost.',
    },
    {
      q: 'Can I join if I live outside Japan?',
      a: 'Yes, but note shipping and time zones. If your audience is in Japan, there is no issue. Overseas creators can receive samples, but live times should align with JST.',
    },
    {
      q: 'How and when will I receive my commission?',
      a: 'Commissions are paid based on agreed cycles (e.g. weekly or monthly) according to sales through your links. Payment via bank transfer or as agreed in contract.',
    },
  ],
}
