"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "es"

interface Translations {
  // Navbar
  ourMission: string
  supportUs: string
  contact: string
  
  // Hero
  heroTitle: string
  heroTitleHighlight: string
  heroSubtitle: string
  beginJourney: string
  explorePractices: string
  
  // Emotion Cards
  howIsYourMind: string
  chooseEmotionalState: string
  anxiety: string
  overthinking: string
  stress: string
  sadness: string
  anger: string
  peaceful: string
  recommendedAction: string
  playGuided: string
  startTimer: string
  
  // Emotion guidance
  anxietyExercise: string
  anxietyExerciseDesc: string
  anxietyQuote: string
  anxietyAction: string
  
  overthinkingExercise: string
  overthinkingExerciseDesc: string
  overthinkingQuote: string
  overthinkingAction: string
  
  stressExercise: string
  stressExerciseDesc: string
  stressQuote: string
  stressAction: string
  
  sadnessExercise: string
  sadnessExerciseDesc: string
  sadnessQuote: string
  sadnessAction: string
  
  angerExercise: string
  angerExerciseDesc: string
  angerQuote: string
  angerAction: string
  
  peacefulExercise: string
  peacefulExerciseDesc: string
  peacefulQuote: string
  peacefulAction: string
  
  // Daily Tracker
  yourCalmJourney: string
  trackProgress: string
  meditationStreak: string
  stressReduction: string
  minutesPracticed: string
  averageMood: string
  days: string
  min: string
  moodThisWeek: string
  
  // Feature Cards
  pathwaysToInnerPeace: string
  discoverTools: string
  guidedMeditation: string
  guidedMeditationDesc: string
  emotionalIntelligence: string
  emotionalIntelligenceDesc: string
  silentCommunity: string
  silentCommunityDesc: string
  learnMore: string
  
  // Testimonials
  storiesOfTransformation: string
  hearFromThose: string
  testimonial1: string
  testimonial2: string
  testimonial3: string
  yogaInstructor: string
  softwareEngineer: string
  healthcareProfessional: string
  
  // Footer
  footerDesc: string
  about: string
  careers: string
  privacyPolicy: string
  termsOfService: string
  cookiePolicy: string
  helpCenter: string
  contactUs: string
  faq: string
  allRightsReserved: string
  madeWith: string
  forYourPeace: string
  company: string
  legal: string
  support: string
}

const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    ourMission: "Our Mission",
    supportUs: "Support Us",
    contact: "Contact",
    
    // Hero
    heroTitle: "Find Peace in the Edge of",
    heroTitleHighlight: "Silence",
    heroSubtitle: "Discover tranquility through mindful meditation and embrace the stillness that exists between thoughts and breath.",
    beginJourney: "Begin Your Journey",
    explorePractices: "Explore Practices",
    
    // Emotion Cards
    howIsYourMind: "How Is Your Mind Today?",
    chooseEmotionalState: "Choose your current emotional state and receive guidance instantly.",
    anxiety: "Anxiety",
    overthinking: "Overthinking",
    stress: "Stress",
    sadness: "Sadness",
    anger: "Anger",
    peaceful: "Peaceful",
    recommendedAction: "Recommended Action",
    playGuided: "Play Guided Meditation",
    startTimer: "Start Timer",
    
    // Emotion guidance
    anxietyExercise: "4-7-8 Breathing Technique",
    anxietyExerciseDesc: "Inhale for 4 seconds, hold for 7, exhale for 8. This activates your parasympathetic nervous system.",
    anxietyQuote: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
    anxietyAction: "Take 3 deep breaths right now. Ground yourself by naming 5 things you can see.",
    
    overthinkingExercise: "Thought Labeling Practice",
    overthinkingExerciseDesc: "Observe each thought without judgment. Simply label it as 'thinking' and let it pass like a cloud.",
    overthinkingQuote: "The mind is a wonderful servant but a terrible master.",
    overthinkingAction: "Write down your top 3 worries, then ask: Will this matter in 5 years?",
    
    stressExercise: "Progressive Muscle Relaxation",
    stressExerciseDesc: "Tense each muscle group for 5 seconds, then release. Start from your toes and work up to your head.",
    stressQuote: "It is not stress that kills us, it is our reaction to it.",
    stressAction: "Step away from your current task for 5 minutes. Take a short walk or stretch.",
    
    sadnessExercise: "Self-Compassion Meditation",
    sadnessExerciseDesc: "Place your hand on your heart. Speak kindly to yourself as you would to a dear friend.",
    sadnessQuote: "The wound is the place where the Light enters you.",
    sadnessAction: "Reach out to someone you trust. Connection heals what isolation cannot.",
    
    angerExercise: "Cooling Breath (Sitali)",
    angerExerciseDesc: "Curl your tongue and inhale through it. Exhale slowly through your nose. This cools and calms the body.",
    angerQuote: "Holding onto anger is like drinking poison and expecting the other person to die.",
    angerAction: "Count to 10 slowly. Ask yourself: What need is beneath this anger?",
    
    peacefulExercise: "Gratitude Expansion",
    peacefulExerciseDesc: "In this state of peace, amplify it by reflecting on three things you are grateful for.",
    peacefulQuote: "Peace comes from within. Do not seek it without.",
    peacefulAction: "Share your peaceful energy with someone today through a kind word or gesture.",
    
    // Daily Tracker
    yourCalmJourney: "Your Calm Journey",
    trackProgress: "Track your progress and celebrate every moment of mindfulness.",
    meditationStreak: "Meditation Streak",
    stressReduction: "Stress Reduction",
    minutesPracticed: "Minutes Practiced",
    averageMood: "Average Mood",
    days: "days",
    min: "min",
    moodThisWeek: "Mood This Week",
    
    // Feature Cards
    pathwaysToInnerPeace: "Pathways to Inner Peace",
    discoverTools: "Discover the tools and community that will support your journey to tranquility.",
    guidedMeditation: "Guided Meditation",
    guidedMeditationDesc: "Immerse yourself in expertly crafted meditation sessions led by world-class mindfulness teachers. From 3-minute breathers to deep hour-long journeys.",
    emotionalIntelligence: "Emotional Intelligence",
    emotionalIntelligenceDesc: "Develop a deeper understanding of your emotions through AI-powered insights and personalized recommendations based on your unique mental patterns.",
    silentCommunity: "Silent Community",
    silentCommunityDesc: "Connect with like-minded souls in our peaceful community spaces. Share your journey, find accountability partners, and grow together in silence.",
    learnMore: "Learn more",
    
    // Testimonials
    storiesOfTransformation: "Stories of Transformation",
    hearFromThose: "Hear from those who have found their path to inner peace.",
    testimonial1: "Anicca Mind has transformed my daily practice. The guided meditations are beautifully crafted, and the emotion tracking helps me understand my patterns. I feel more centered than ever.",
    testimonial2: "As someone who struggles with anxiety, finding Anicca Mind was life-changing. The breathing exercises and instant guidance have become my go-to tools during stressful workdays.",
    testimonial3: "The silent community feature is beautiful. Knowing others are meditating alongside me, even in silence, creates a sense of connection I never expected from an app.",
    yogaInstructor: "Yoga Instructor",
    softwareEngineer: "Software Engineer",
    healthcareProfessional: "Healthcare Professional",
    
    // Footer
    footerDesc: "Guiding you toward inner peace, one breath at a time. Join thousands who have discovered the transformative power of mindfulness.",
    about: "About",
    careers: "Careers",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    helpCenter: "Help Center",
    contactUs: "Contact Us",
    faq: "FAQ",
    allRightsReserved: "All rights reserved.",
    madeWith: "Made with",
    forYourPeace: "for your peace of mind",
    company: "Company",
    legal: "Legal",
    support: "Support",
  },
  es: {
    // Navbar
    ourMission: "Nuestra Mision",
    supportUs: "Apoyanos",
    contact: "Contacto",
    
    // Hero
    heroTitle: "Encuentra la Paz en el Borde del",
    heroTitleHighlight: "Silencio",
    heroSubtitle: "Descubre la tranquilidad a traves de la meditacion consciente y abraza la quietud que existe entre los pensamientos y la respiracion.",
    beginJourney: "Comienza tu Viaje",
    explorePractices: "Explorar Practicas",
    
    // Emotion Cards
    howIsYourMind: "Como Esta Tu Mente Hoy?",
    chooseEmotionalState: "Elige tu estado emocional actual y recibe orientacion al instante.",
    anxiety: "Ansiedad",
    overthinking: "Pensar Demasiado",
    stress: "Estres",
    sadness: "Tristeza",
    anger: "Ira",
    peaceful: "Tranquilo",
    recommendedAction: "Accion Recomendada",
    playGuided: "Reproducir Meditacion Guiada",
    startTimer: "Iniciar Temporizador",
    
    // Emotion guidance
    anxietyExercise: "Tecnica de Respiracion 4-7-8",
    anxietyExerciseDesc: "Inhala durante 4 segundos, manten durante 7, exhala durante 8. Esto activa tu sistema nervioso parasimpatico.",
    anxietyQuote: "La ansiedad no vacia el manana de sus penas, solo vacia el hoy de su fuerza.",
    anxietyAction: "Toma 3 respiraciones profundas ahora mismo. Anclate nombrando 5 cosas que puedes ver.",
    
    overthinkingExercise: "Practica de Etiquetado de Pensamientos",
    overthinkingExerciseDesc: "Observa cada pensamiento sin juzgar. Simplemente etiquetalo como 'pensando' y dejalo pasar como una nube.",
    overthinkingQuote: "La mente es un sirviente maravilloso pero un amo terrible.",
    overthinkingAction: "Escribe tus 3 principales preocupaciones, luego pregunta: Importara esto en 5 anos?",
    
    stressExercise: "Relajacion Muscular Progresiva",
    stressExerciseDesc: "Tensa cada grupo muscular durante 5 segundos, luego suelta. Comienza desde los dedos de los pies y sube hasta la cabeza.",
    stressQuote: "No es el estres lo que nos mata, es nuestra reaccion a el.",
    stressAction: "Alejate de tu tarea actual por 5 minutos. Da un paseo corto o estirate.",
    
    sadnessExercise: "Meditacion de Autocompasion",
    sadnessExerciseDesc: "Coloca tu mano sobre tu corazon. Hablate con amabilidad como lo harias con un querido amigo.",
    sadnessQuote: "La herida es el lugar por donde entra la Luz.",
    sadnessAction: "Contacta a alguien de tu confianza. La conexion sana lo que el aislamiento no puede.",
    
    angerExercise: "Respiracion Refrescante (Sitali)",
    angerExerciseDesc: "Enrolla tu lengua e inhala a traves de ella. Exhala lentamente por la nariz. Esto enfria y calma el cuerpo.",
    angerQuote: "Aferrarse a la ira es como beber veneno y esperar que la otra persona muera.",
    angerAction: "Cuenta hasta 10 lentamente. Preguntate: Que necesidad hay detras de esta ira?",
    
    peacefulExercise: "Expansion de Gratitud",
    peacefulExerciseDesc: "En este estado de paz, amplificalo reflexionando sobre tres cosas por las que estas agradecido.",
    peacefulQuote: "La paz viene de adentro. No la busques afuera.",
    peacefulAction: "Comparte tu energia pacifica con alguien hoy a traves de una palabra amable o un gesto.",
    
    // Daily Tracker
    yourCalmJourney: "Tu Viaje de Calma",
    trackProgress: "Registra tu progreso y celebra cada momento de atencion plena.",
    meditationStreak: "Racha de Meditacion",
    stressReduction: "Reduccion de Estres",
    minutesPracticed: "Minutos Practicados",
    averageMood: "Estado de Animo Promedio",
    days: "dias",
    min: "min",
    moodThisWeek: "Estado de Animo Esta Semana",
    
    // Feature Cards
    pathwaysToInnerPeace: "Caminos Hacia la Paz Interior",
    discoverTools: "Descubre las herramientas y la comunidad que apoyaran tu viaje hacia la tranquilidad.",
    guidedMeditation: "Meditacion Guiada",
    guidedMeditationDesc: "Sumérgete en sesiones de meditación expertamente diseñadas, dirigidas por maestros de mindfulness de clase mundial. Desde respiraciones de 3 minutos hasta viajes profundos de una hora.",
    emotionalIntelligence: "Inteligencia Emocional",
    emotionalIntelligenceDesc: "Desarrolla una comprension mas profunda de tus emociones a traves de insights impulsados por IA y recomendaciones personalizadas basadas en tus patrones mentales unicos.",
    silentCommunity: "Comunidad Silenciosa",
    silentCommunityDesc: "Conecta con almas afines en nuestros espacios comunitarios pacificos. Comparte tu viaje, encuentra companeros de responsabilidad y crece juntos en silencio.",
    learnMore: "Saber mas",
    
    // Testimonials
    storiesOfTransformation: "Historias de Transformacion",
    hearFromThose: "Escucha a quienes han encontrado su camino hacia la paz interior.",
    testimonial1: "Anicca Mind ha transformado mi practica diaria. Las meditaciones guiadas estan bellamente elaboradas, y el seguimiento emocional me ayuda a entender mis patrones. Me siento mas centrada que nunca.",
    testimonial2: "Como alguien que lucha con la ansiedad, encontrar Anicca Mind cambio mi vida. Los ejercicios de respiracion y la orientacion instantanea se han convertido en mis herramientas favoritas durante los dias de trabajo estresantes.",
    testimonial3: "La funcion de comunidad silenciosa es hermosa. Saber que otros estan meditando junto a mi, incluso en silencio, crea una sensacion de conexion que nunca espere de una aplicacion.",
    yogaInstructor: "Instructora de Yoga",
    softwareEngineer: "Ingeniero de Software",
    healthcareProfessional: "Profesional de Salud",
    
    // Footer
    footerDesc: "Guiandote hacia la paz interior, una respiracion a la vez. Unete a miles que han descubierto el poder transformador de la atencion plena.",
    about: "Nosotros",
    careers: "Carreras",
    privacyPolicy: "Politica de Privacidad",
    termsOfService: "Terminos de Servicio",
    cookiePolicy: "Politica de Cookies",
    helpCenter: "Centro de Ayuda",
    contactUs: "Contactanos",
    faq: "Preguntas Frecuentes",
    allRightsReserved: "Todos los derechos reservados.",
    madeWith: "Hecho con",
    forYourPeace: "para tu paz mental",
    company: "Empresa",
    legal: "Legal",
    support: "Soporte",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
