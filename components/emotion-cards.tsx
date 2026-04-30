"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Brain,
  CloudRain,
  Flame,
  Heart,
  Sparkles,
  Wind,
  Play,
  Timer,
  Quote,
  Lightbulb,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const emotions = [
  {
    id: "anxiety",
    name: "Anxiety",
    icon: Wind,
    color: "from-blue-400/20 to-cyan-400/20",
    borderColor: "border-blue-400/30",
    iconColor: "text-blue-400",
    guidance: {
      exercise: "4-7-8 Breathing Technique",
      exerciseDesc: "Inhale for 4 seconds, hold for 7, exhale for 8. This activates your parasympathetic nervous system.",
      quote: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
      author: "Charles Spurgeon",
      action: "Take 3 deep breaths right now. Ground yourself by naming 5 things you can see.",
      duration: "3 min",
    },
  },
  {
    id: "overthinking",
    name: "Overthinking",
    icon: Brain,
    color: "from-purple-400/20 to-pink-400/20",
    borderColor: "border-purple-400/30",
    iconColor: "text-purple-400",
    guidance: {
      exercise: "Thought Labeling Practice",
      exerciseDesc: "Observe each thought without judgment. Simply label it as 'thinking' and let it pass like a cloud.",
      quote: "The mind is a wonderful servant but a terrible master.",
      author: "Robin Sharma",
      action: "Write down your top 3 worries, then ask: Will this matter in 5 years?",
      duration: "5 min",
    },
  },
  {
    id: "stress",
    name: "Stress",
    icon: CloudRain,
    color: "from-gray-400/20 to-slate-400/20",
    borderColor: "border-gray-400/30",
    iconColor: "text-gray-400",
    guidance: {
      exercise: "Progressive Muscle Relaxation",
      exerciseDesc: "Tense each muscle group for 5 seconds, then release. Start from your toes and work up to your head.",
      quote: "It is not stress that kills us, it is our reaction to it.",
      author: "Hans Selye",
      action: "Step away from your current task for 5 minutes. Take a short walk or stretch.",
      duration: "7 min",
    },
  },
  {
    id: "sadness",
    name: "Sadness",
    icon: Heart,
    color: "from-rose-400/20 to-red-400/20",
    borderColor: "border-rose-400/30",
    iconColor: "text-rose-400",
    guidance: {
      exercise: "Self-Compassion Meditation",
      exerciseDesc: "Place your hand on your heart. Speak kindly to yourself as you would to a dear friend.",
      quote: "The wound is the place where the Light enters you.",
      author: "Rumi",
      action: "Reach out to someone you trust. Connection heals what isolation cannot.",
      duration: "5 min",
    },
  },
  {
    id: "anger",
    name: "Anger",
    icon: Flame,
    color: "from-orange-400/20 to-amber-400/20",
    borderColor: "border-orange-400/30",
    iconColor: "text-orange-400",
    guidance: {
      exercise: "Cooling Breath (Sitali)",
      exerciseDesc: "Curl your tongue and inhale through it. Exhale slowly through your nose. This cools and calms the body.",
      quote: "Holding onto anger is like drinking poison and expecting the other person to die.",
      author: "Buddha",
      action: "Count to 10 slowly. Ask yourself: What need is beneath this anger?",
      duration: "4 min",
    },
  },
  {
    id: "peaceful",
    name: "Peaceful",
    icon: Sparkles,
    color: "from-emerald-400/20 to-teal-400/20",
    borderColor: "border-emerald-400/30",
    iconColor: "text-emerald-400",
    guidance: {
      exercise: "Gratitude Expansion",
      exerciseDesc: "In this state of peace, amplify it by reflecting on three things you are grateful for.",
      quote: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
      action: "Share your peaceful energy with someone today through a kind word or gesture.",
      duration: "3 min",
    },
  },
]

export function EmotionCards() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)

  const selected = emotions.find((e) => e.id === selectedEmotion)

  return (
    <section className="py-24 bg-background" id="mission">
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
            How Is Your Mind Today?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your current emotional state and receive guidance instantly.
          </p>
        </motion.div>

        {/* Emotion Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {emotions.map((emotion, index) => {
            const Icon = emotion.icon
            const isSelected = selectedEmotion === emotion.id
            
            return (
              <motion.div
                key={emotion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className={`relative cursor-pointer p-6 transition-all duration-300 border-2 overflow-hidden group ${
                    isSelected
                      ? `${emotion.borderColor} bg-gradient-to-br ${emotion.color}`
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                  onClick={() => setSelectedEmotion(emotion.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${emotion.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`w-8 h-8 ${isSelected ? emotion.iconColor : "text-muted-foreground group-hover:" + emotion.iconColor}`} />
                    </motion.div>
                    <span className={`font-medium text-sm ${isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {emotion.name}
                    </span>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Guidance Panel */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className={`relative p-8 md:p-12 border-2 ${selected.borderColor} bg-gradient-to-br ${selected.color} overflow-hidden`}>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedEmotion(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors"
                  aria-label="Close guidance panel"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Breathing Exercise */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-card ${selected.iconColor}`}>
                        <Wind className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-foreground mb-2">
                          {selected.guidance.exercise}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {selected.guidance.exerciseDesc}
                        </p>
                      </div>
                    </div>

                    {/* Meditation Button */}
                    <Button
                      className={`w-full rounded-xl py-6 ${selected.iconColor} bg-card hover:bg-card/80 text-foreground border border-border`}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Play {selected.guidance.duration} Guided Meditation
                    </Button>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Quote */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-card ${selected.iconColor}`}>
                        <Quote className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-foreground italic leading-relaxed mb-2">
                          {`"${selected.guidance.quote}"`}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          — {selected.guidance.author}
                        </p>
                      </div>
                    </div>

                    {/* Recommended Action */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-card ${selected.iconColor}`}>
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Recommended Action
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {selected.guidance.action}
                        </p>
                      </div>
                    </div>

                    {/* Start Timer Button */}
                    <Button
                      variant="outline"
                      className="w-full rounded-xl py-6 border-foreground/20 hover:bg-foreground/5"
                    >
                      <Timer className="w-5 h-5 mr-2" />
                      Start {selected.guidance.duration} Timer
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
