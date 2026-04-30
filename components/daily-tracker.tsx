"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Flame, TrendingDown, Clock, Smile } from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"
import { useLanguage } from "@/lib/language-context"

const moodData = [
  { day: "Mon", mood: 65, meditation: 15 },
  { day: "Tue", mood: 72, meditation: 20 },
  { day: "Wed", mood: 68, meditation: 10 },
  { day: "Thu", mood: 78, meditation: 25 },
  { day: "Fri", mood: 82, meditation: 30 },
  { day: "Sat", mood: 88, meditation: 35 },
  { day: "Sun", mood: 85, meditation: 25 },
]

export function DailyTracker() {
  const { t } = useLanguage()

  const stats = [
    {
      label: t.meditationStreak,
      value: "7",
      unit: t.days,
      icon: Flame,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      label: t.stressReduction,
      value: "23",
      unit: "%",
      icon: TrendingDown,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: t.minutesPracticed,
      value: "160",
      unit: t.min,
      icon: Clock,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: t.averageMood,
      value: "77",
      unit: "/100",
      icon: Smile,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

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
            {t.yourCalmJourney}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.trackProgress}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-semibold text-foreground">
                        {stat.value}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Mood Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 h-full">
              <h3 className="font-serif text-xl text-foreground mb-6">
                {t.moodThisWeek}
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={moodData}>
                    <defs>
                      <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.72 0.08 85)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="oklch(0.72 0.08 85)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 75)" />
                    <XAxis 
                      dataKey="day" 
                      stroke="oklch(0.45 0.01 75)" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="oklch(0.45 0.01 75)" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "oklch(1 0 0)",
                        border: "1px solid oklch(0.90 0.01 75)",
                        borderRadius: "0.75rem",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      labelStyle={{ color: "oklch(0.22 0.01 75)", fontWeight: 600 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="mood"
                      stroke="oklch(0.72 0.08 85)"
                      strokeWidth={3}
                      fill="url(#moodGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Meditation Minutes Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 h-full">
              <h3 className="font-serif text-xl text-foreground mb-6">
                {t.minutesPracticed}
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 75)" />
                    <XAxis 
                      dataKey="day" 
                      stroke="oklch(0.45 0.01 75)" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="oklch(0.45 0.01 75)" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "oklch(1 0 0)",
                        border: "1px solid oklch(0.90 0.01 75)",
                        borderRadius: "0.75rem",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      labelStyle={{ color: "oklch(0.22 0.01 75)", fontWeight: 600 }}
                    />
                    <Bar
                      dataKey="meditation"
                      fill="oklch(0.78 0.05 230)"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
