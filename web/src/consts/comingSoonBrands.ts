import bbiaBackground from '../assets/images/bbia_backgrounds.png'
import bbiaLogo from '../assets/images/bbia.png'
import newBrandBackground from '../assets/images/new brand coming soon.png'
import quadtheraBackground from '../assets/images/quadthera_bg.png'
import quadtheraLogo from '../assets/images/quadthera.png'
import tiamBackground from '../assets/images/tiaii_background.jpg'
import tiamLogo from '../assets/images/tiaii.jpg'
import therawaveBackground from '../assets/images/therawave_bg.jpg'
import therawaveLogo from '../assets/images/therawave.jpg'
import vtBackground from '../assets/images/vf_bg.png'
import vtLogo from '../assets/images/vf.png'

export type ComingSoonBrand = {
  id: string
  name: string
  background: string
  logo: string
  logoBlend: 'multiply' | 'screen'
  logoWidth?: string
}

export const COMING_SOON_BRANDS: ComingSoonBrand[] = [
  {
    id: 'tiam',
    name: "TIA'M",
    background: tiamBackground,
    logo: tiamLogo,
    logoBlend: 'multiply',
    logoWidth: '58%',
  },
  {
    id: 'bbia',
    name: 'BBIA',
    background: bbiaBackground,
    logo: bbiaLogo,
    logoBlend: 'screen',
    logoWidth: '46%',
  },
  {
    id: 'vt',
    name: 'VT COSMETICS',
    background: vtBackground,
    logo: vtLogo,
    logoBlend: 'screen',
    logoWidth: '52%',
  },
  {
    id: 'quadthera',
    name: 'Quadthera',
    background: quadtheraBackground,
    logo: quadtheraLogo,
    logoBlend: 'screen',
    logoWidth: '62%',
  },
  {
    id: 'therawave',
    name: 'THERAWAVE',
    background: therawaveBackground,
    logo: therawaveLogo,
    logoBlend: 'multiply',
    logoWidth: '72%',
  },
]

export const COMING_SOON_PLACEHOLDER_BG = newBrandBackground
