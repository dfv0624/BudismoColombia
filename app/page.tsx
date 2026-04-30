import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EmotionCards } from "@/components/emotion-cards"
import { DailyTracker } from "@/components/daily-tracker"
import { FeatureCards } from "@/components/feature-cards"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EmotionCards />
      <DailyTracker />
      <FeatureCards />
      <Testimonials />
      <Footer />
    </main>
  )
}
