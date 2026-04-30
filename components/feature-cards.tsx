"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Headphones, Brain, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function FeatureCards() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Headphones,
      title: t.guidedMeditation,
      description: t.guidedMeditationDesc,
      gradient: "from-primary/20 to-amber-400/20",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Brain,
      title: t.emotionalIntelligence,
      description: t.emotionalIntelligenceDesc,
      gradient: "from-accent/20 to-blue-400/20",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Users,
      title: t.silentCommunity,
      description: t.silentCommunityDesc,
      gradient: "from-emerald-400/20 to-teal-400/20",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
  ]

  return (
    <section className="py-24 bg-background" id="support">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t.pathwaysToInnerPeace}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.discoverTools}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className={`group relative p-8 h-full border-2 border-border hover:border-muted-foreground/30 transition-all duration-500 overflow-hidden`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6`}
                    >
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-serif text-2xl text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-medium text-foreground hover:text-primary hover:bg-transparent group/btn"
                    >
                      {t.learnMore}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
