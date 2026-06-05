import { CommissionSection } from './sections/CommissionSection'
import { CompanySection } from './sections/CompanySection'
import { ComingSoonSection } from './sections/ComingSoonSection'
import { HowItWorksSection } from './sections/HowItWorksSection'
import { DealTermsSection } from './sections/DealTermsSection'
import { FaqSection } from './sections/FaqSection'
import { Footer } from './sections/Footer'
import { HeroSection } from './sections/HeroSection'
import { LiveBookingSection } from './sections/LiveBookingSection'
import { Navbar } from './sections/Navbar'
import { BrandProofSection } from './sections/BrandProofSection'
import styles from './landing.module.css'

export function LandingPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <HeroSection />
        <CommissionSection />
        <LiveBookingSection />
        <BrandProofSection />
        <ComingSoonSection />
        <CompanySection />
        <HowItWorksSection />
        <DealTermsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

