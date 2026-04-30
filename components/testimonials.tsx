"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Yoga Instructor",
    avatar: "SM",
    content:
      "CalmMind has transformed my daily practice. The guided meditations are beautifully crafted, and the emotion tracking helps me understand my patterns. I feel more centered than ever.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Software Engineer",
    avatar: "JC",
    content:
      "As someone who struggles with anxiety, finding CalmMind was life-changing. The breathing exercises and instant guidance have become my go-to tools during stressful workdays.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Healthcare Professional",
    avatar: "ER",
    content:
      "The silent community feature is beautiful. Knowing others are meditating alongside me, even in silence, creates a sense of connection I never expected from an app.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
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
            Stories of Transformation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from those who have found their path to inner peace.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-8">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
