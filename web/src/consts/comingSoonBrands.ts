import bbiaBackground from '../assets/images/bbia_backgrounds.png'
import bbiaLogo from '../assets/images/bbia_cutout.png'
import newBrandBackground from '../assets/images/new brand coming soon.png'
import quadtheraBackground from '../assets/images/quadthera_bg.png'
import quadtheraLogo from '../assets/images/quadthera_cutout.png'
import tiamBackground from '../assets/images/tiaii_background.jpg'
import tiamLogo from '../assets/images/tiaii.jpg'
import therawaveBackground from '../assets/images/therawave_bg.jpg'
import therawaveLogo from '../assets/images/therawave.jpg'
import vtBackground from '../assets/images/vf_bg.jpg'
import vtLogo from '../assets/images/vf.webp'

export type LogoKnockout = 'darken' | 'cutout'

export type ComingSoonBrand = {
  id: string
  name: string
  background: string
  logo?: string
  knockout: LogoKnockout
  logoWidth: string
}

export const COMING_SOON_BRANDS: ComingSoonBrand[] = [
  {
    id: 'tiam',
    name: "TIA'M",
    background: tiamBackground,
    logo: tiamLogo,
    knockout: 'darken',
    logoWidth: '72%',
  },
  {
    id: 'bbia',
    name: 'BBIA',
    background: bbiaBackground,
    logo: bbiaLogo,
    knockout: 'cutout',
    logoWidth: '58%',
  },
  {
    id: 'vt',
    name: 'VT COSMETICS',
    background: vtBackground,
    logo: vtLogo,
    knockout: 'darken',
    logoWidth: '84%',
  },
  {
    id: 'quadthera',
    name: 'Quadthera',
    background: quadtheraBackground,
    logo: quadtheraLogo,
    knockout: 'cutout',
    logoWidth: '96%',
  },
  {
    id: 'therawave',
    name: 'THERAWAVE',
    background: therawaveBackground,
    logo: therawaveLogo,
    knockout: 'darken',
    logoWidth: '80%',
  },
]

export const COMING_SOON_PLACEHOLDER_BG = newBrandBackground
