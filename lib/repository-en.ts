import type { ConceptNode, Pillar } from "@/lib/repository"

type PillarText = Pick<Pillar, "title" | "desc">
type NodeText = Pick<ConceptNode, "type" | "pali" | "translation" | "summary" | "quote" | "essence" | "steps" | "source">

export const PILLARS_EN: Record<string, PillarText> = {
  impermanencia: {
    title: "Reality and Change",
    desc: "The laws of conditioned existence, impermanence and the relational nature of every phenomenon.",
  },
  sufrimiento: {
    title: "Friction and Desire",
    desc: "A diagnosis of human dissatisfaction, the mechanism of attachment and the real possibility of letting go.",
  },
  mente: {
    title: "Mental Architecture",
    desc: "A map of the cognitive faculties: attention, stability, discernment and equanimity.",
  },
  practica: {
    title: "Cultivation and Method",
    desc: "Technical protocols for meditation, mental calm and attention applied to everyday life.",
  },
}

export const NODES_EN: Record<string, NodeText> = {
  anicca: {
    type: "Mark of Existence",
    pali: "अनिच्च · Impermanence",
    translation: "Inconstancy / Continuous flow",
    summary: "Nothing stays still; every conditioned phenomenon arises, transforms while it exists, and ceases.",
    quote: "“Whatever is subject to arising is subject to ceasing.”",
    essence:
      "In early Buddhist philosophy, Anicca is not a pessimistic doctrine but an observable law. Suffering occurs when the mind tries to freeze people, moods or situations that are, by definition, in continuous motion.",
    steps: [
      { title: "Observation in the body", desc: "Notice how a physical sensation (cold, tension, pulse) changes in intensity every few seconds." },
      { title: "Emotional curve", desc: "Faced with an intense emotion (anger or euphoria), observe its peak and natural fading without feeding it." },
      { title: "Operational non-attachment", desc: "Plan your projects assuming conditions will change, reducing friction in the face of the unexpected." },
    ],
    source: "Anicca Sutta (SN 22.12)",
  },
  anatta: {
    type: "Mark of Existence",
    pali: "अनत्ता · Non-Self",
    translation: "Absence of a fixed core",
    summary: "Identity is not a solid entity but a changing process of perceptions, body and memory.",
    quote: "“Phenomena are ongoing processes with no rigid owner behind them.”",
    essence:
      "Anattā dismantles the illusion of the ego as an unchanging center. What we call ‘I’ is a stream of five aggregates (body, feeling, perception, mental formations and consciousness) renewing itself at every moment.",
    steps: [
      { title: "Depersonalize language", desc: "Mentally replace ‘I am furious’ with ‘there is fury present at this moment’." },
      { title: "Track the observer", desc: "In silence, look for exactly where that ‘I’ that believes it owns the thoughts is located." },
      { title: "Drop the identity defense", desc: "Notice when you argue only to protect your self-image rather than to clarify the truth." },
    ],
    source: "Anattalakkhana Sutta (SN 22.59)",
  },
  pratitya: {
    type: "Causal Law",
    pali: "पटिच्चसमुप्पाद · Interdependence",
    translation: "Dependent origination",
    summary: "No event exists on its own; everything emerges as the result of a web of prior conditions.",
    quote: "“When this exists, that comes to be; with the ceasing of this, that ceases.”",
    essence:
      "Instead of seeing the world as isolated objects, dependent origination reveals a web of causes and conditions. Understanding which condition feeds a reactive habit makes it possible to defuse it at the root.",
    steps: [
      { title: "Identify the trigger", desc: "Recognize the exact sensory contact (a notification, a tone of voice) before the reaction is born." },
      { title: "Cut the link", desc: "Between the pleasant/unpleasant feeling and the blind impulse, insert one conscious exhalation." },
      { title: "Systemic view", desc: "Analyze any difficulty as a sum of modifiable conditions rather than as static blame." },
    ],
    source: "Maha-nidana Sutta (DN 15)",
  },
  sunyata: {
    type: "Mahāyāna Philosophy",
    pali: "शून्यता · Emptiness",
    translation: "Relational openness",
    summary: "Things are empty of isolated, independent existence; precisely because of this, they can transform.",
    quote: "“Form is not different from emptiness; emptiness is not different from form.”",
    essence:
      "Systematized by Nāgārjuna, emptiness is not nihilism, nor does it mean that ‘nothing exists’. It means nothing has a closed essence: everything depends on its context, relationships and causes, opening complete freedom to change.",
    steps: [
      { title: "Dismantle fixed labels", desc: "Question yourself whenever you declare that a situation or person ‘is always like that’." },
      { title: "Perceive the space", desc: "Notice the background silence that allows the sounds in your room to be heard." },
      { title: "Cognitive flexibility", desc: "Let go of a rigid point of view as soon as new evidence appears in the present." },
    ],
    source: "Prajñāpāramitā Hṛdaya — Heart Sutra",
  },
  sankhara: {
    type: "Mental Aggregate",
    pali: "सङ्खार · Formations",
    translation: "Mental constructions and habits",
    summary: "Both the character imprints that shape our reactions and every conditioned compound.",
    quote: "“All conditioned formations are transient; strive on with diligence.”",
    essence:
      "Every time we react with aversion or attachment, we carve a mental groove (Saṅkhāra) that makes repeating that reaction tomorrow more likely. Meditative practice consists of observing these impulses without reinforcing them until they lose momentum.",
    steps: [
      { title: "Map the autopilot", desc: "Detect your three most frequent automatic reactions to pressure or stress." },
      { title: "Don't feed the groove", desc: "When an old mental habit arises, observe it in the body without acting on it for 30 seconds." },
      { title: "Sow new dispositions", desc: "Deliberately choose a calm response to weaken the previous conditioned reflex." },
    ],
    source: "Mahāparinibbāna Sutta (DN 16)",
  },
  dukkha: {
    type: "First Truth",
    pali: "दुक्ख · Dissatisfaction",
    translation: "Friction / Off-center wheel",
    summary: "The constant gap between how we demand reality to be and how it is unfolding at this moment.",
    quote: "“Pain in the body is inevitable; mental suffering is the optional second arrow.”",
    essence:
      "Etymologically, Dukkha describes the axle of a badly fitted wheel that creaks as it turns. It does not mean that life is sad, but that demanding permanence from transient things produces constant psychological friction.",
    steps: [
      { title: "Separate the two arrows", desc: "Distinguish between the objective inconvenience (arrow 1) and the ruminating complaint you add afterwards (arrow 2)." },
      { title: "Locate the resistance", desc: "Observe which muscle (jaw, shoulders, abdomen) tightens when something contradicts your plan." },
      { title: "Tactical acceptance", desc: "Acknowledge what has already happened without fighting the past before deciding the next step." },
    ],
    source: "Sallatha Sutta — The Two Arrows (SN 36.6)",
  },
  tanha: {
    type: "Second Truth",
    pali: "तण्हा · Mental Thirst",
    translation: "Compulsive craving / Aversion",
    summary: "The involuntary urge to capture the pleasant, to become someone, or to annihilate the uncomfortable.",
    quote: "“Mental thirst multiplies every time we try to quench it on impulse.”",
    essence:
      "Taṇhā literally means ‘feverish thirst’. It operates on three fronts: thirst for sensory stimulation (Kāma), thirst for status and identity (Bhava), and thirst to reject or destroy what displeases us (Vibhava).",
    steps: [
      { title: "10-second pause", desc: "When you feel the urge to open social media or buy something, observe the physical pull in your chest." },
      { title: "See the short promise", desc: "Remember how the last satisfied desire only brought calm for a few minutes before asking for more." },
      { title: "Inhabit neutrality", desc: "Stay for 3 minutes without external stimuli, observing the mind's restlessness without obeying it." },
    ],
    source: "Dhammacakkappavattana Sutta (SN 56.11)",
  },
  upadana: {
    type: "Causal Link",
    pali: "उपादान · Clinging",
    translation: "Fuel / Rigid identification",
    summary: "When a passing desire solidifies into attachment to pleasures, dogmas, rituals or one's own image.",
    quote: "“Just as fire burns while it has fuel, the mind is agitated while it clings.”",
    essence:
      "In Pali, Upādāna means both ‘clinging’ and ‘fuel’. Buddhism points out that the subtlest and most conflictive clinging is not to material objects, but to our fixed opinions and ideas (Diṭṭhupādāna).",
    steps: [
      { title: "Loosen the opinion", desc: "In a tense conversation, present your argument without tying your personal dignity to being right." },
      { title: "Detect the fuel", desc: "Ask yourself which repetitive thought is keeping alive an anger from hours ago." },
      { title: "Use without owning", desc: "Enjoy your tools, projects and achievements, remembering that you are their temporary steward." },
    ],
    source: "Upādāna Sutta (SN 12.52)",
  },
  avijja: {
    type: "Latent Root",
    pali: "अविज्जा · Ignorance",
    translation: "Perceptual blindness / Unknowing",
    summary: "Not a lack of academic learning, but mistaking the transient for the eternal and the painful for happiness.",
    quote: "“Not seeing things as they are is the root of all mental confusion.”",
    essence:
      "Avijjā works like a distorted lens that makes us perceive stability where there is flow (Anicca) and an isolated ego where there is interdependence. Perceptual clarity (Vijjā / Paññā) dissolves that fog through direct observation.",
    steps: [
      { title: "Question the first impression", desc: "Don't assume your automatic interpretation of someone else's gesture is reality." },
      { title: "Check the 4 distortions", desc: "Ask yourself whether you are demanding permanence from something that is changing by nature." },
      { title: "Put experience before theory", desc: "Test every philosophical concept in your own breath and mind today." },
    ],
    source: "Avijjā Sutta (SN 45.1)",
  },
  nirodha: {
    type: "Third Truth",
    pali: "निरोध · Cessation",
    translation: "Extinction of friction / Letting go",
    summary: "The immediate, verifiable relief the mind experiences when it stops feeding resistance.",
    quote: "“By letting go of thirst and clinging, agitation ceases and unshakable peace emerges.”",
    essence:
      "The third noble truth is not a mystical promise for another life, but a practical diagnosis: if suffering has a concrete cause (clinging), then by letting go of that cause, suffering goes out in this very moment.",
    steps: [
      { title: "Notice the moment of relief", desc: "Register the physical sense of rest right when you decide to drop a pointless argument." },
      { title: "Release exhalation", desc: "Use a long exhalation to deliberately release the tension stored in your shoulders and chest." },
      { title: "Subtract before adding", desc: "When you feel overwhelmed, look for an unnecessary demand you can drop today instead of adding more tasks." },
    ],
    source: "Dhammacakkappavattana Sutta (SN 56.11)",
  },
  sati: {
    type: "Executive Faculty",
    pali: "सति · Mindfulness",
    translation: "Remembering to be present",
    summary: "The ability to observe what happens in body and mind in real time without judging or editing it.",
    quote: "“In the seen, there is only the seen; in the heard, only the heard; in the thought, only the thought.”",
    essence:
      "Sati is bare, lucid presence. Before the mental narrative builds a whole novel around a stimulus, Sati registers the raw data, keeping clarity and memory of the present.",
    steps: [
      { title: "Somatic anchor", desc: "Keep 20% of your attention on the contact of your feet or hands while you work." },
      { title: "Notice without commenting", desc: "Perceive a sound or interruption and avoid instantly labeling it ‘annoying’ or ‘good’." },
      { title: "Gentle micro-returns", desc: "Every time you notice distraction, return to the present without scolding yourself for drifting." },
    ],
    source: "Satipaṭṭhāna Sutta (MN 10)",
  },
  upekkha: {
    type: "Sublime State",
    pali: "उपेक्खा · Equanimity",
    translation: "Looking with spacious balance",
    summary: "Mental stability that understands change and is swept away neither by praise nor by loss.",
    quote: "“As a solid rock does not shake in the wind, the wise do not waver before praise or blame.”",
    essence:
      "Equanimity is not coldness or apathy; it is spaciousness. It is the ability to be fully committed to an action without your inner peace depending on variables you don't control.",
    steps: [
      { title: "The 8 worldly winds", desc: "Observe gain and loss, praise and blame, success and failure with equal sobriety." },
      { title: "Cool down first", desc: "Faced with a provocative message, wait for the physiological charge to drop before writing a reply." },
      { title: "Excellence without anxiety", desc: "Take the utmost care in the technical execution of your work today and let go of the obsession with future results." },
    ],
    source: "Lokavipatti Sutta (AN 8.6)",
  },
  samadhi: {
    type: "Mental Training",
    pali: "समाधि · Unification",
    translation: "Collectedness and stable focus",
    summary: "Gathering scattered mental energy into a single calm point, free of fragmentation and multitasking.",
    quote: "“The unified mind, free of distraction, sees reality as it is.”",
    essence:
      "A mind fragmented across ten simultaneous stimuli lacks the strength to understand itself. Samādhi gathers that scattered attention like a magnifying glass concentrating sunlight onto a single point.",
    steps: [
      { title: "Strict single-tasking", desc: "Dedicate closed 25-minute blocks to a single activity with notifications silenced." },
      { title: "Notice the scattering", desc: "Detect the physical symptom of fatigue when you jump from one tab or idea to another without pause." },
      { title: "Unify body and mind", desc: "Align your physical posture before starting a complex study or programming session." },
    ],
    source: "Samādhi Sutta (SN 22.5)",
  },
  panna: {
    type: "Higher Faculty",
    pali: "पञ्ञा · Wisdom",
    translation: "Penetrating discernment",
    summary: "Direct experiential understanding that distinguishes which actions bring clarity and which bring suffering.",
    quote: "“Attention steadies the mind; discernment cuts confusion at the root.”",
    essence:
      "In Buddhism there are three levels of wisdom: what is heard or read (Suta), what is reflected upon intellectually (Cintā), and what is verified through direct observation of one's own body and mind (Bhāvanā-mayā Paññā).",
    steps: [
      { title: "Ethical usefulness filter", desc: "Before acting, ask yourself: does this lead to more agitation or to more clarity and calm?" },
      { title: "From concept to fact", desc: "Don't settle for the definition of impermanence; watch it operating in your day." },
      { title: "Question assumptions", desc: "Review an old personal belief in the light of your current direct experience." },
    ],
    source: "Mahāvedalla Sutta (MN 43)",
  },
  karuna: {
    type: "Brahmavihāra",
    pali: "करुणा · Benevolence",
    translation: "Lucid compassion and goodwill",
    summary: "A mental disposition free of hostility that recognizes that all beings seek to avoid suffering.",
    quote: "“Just as a mother protects her own life, cultivate a boundless mind toward all beings.”",
    essence:
      "Mettā (goodwill) and Karuṇā (compassion) are not weak sentimentality, but cognitive antidotes to resentment and irritability. A mind free of hostility thinks more precisely and rests better.",
    steps: [
      { title: "Recognize the other's friction", desc: "Faced with a difficult person, remember that their clumsiness comes from their own confusion and dissatisfaction." },
      { title: "Drop resentment as mental hygiene", desc: "Recognize that holding anger is like grabbing a burning coal hoping to burn the other." },
      { title: "Silent intention", desc: "At the start of the day, soberly and sincerely wish clarity and calm for yourself and those around you." },
    ],
    source: "Karaṇīya Mettā Sutta (Snp 1.8)",
  },
  anapanasati: {
    type: "Core Technique",
    pali: "आनापानसति · Breathing",
    translation: "Attention to the flow of air",
    summary: "Using the natural breath as a somatic anchor to calm mental noise and stabilize focus.",
    quote: "“Breathing in long, one understands: ‘I breathe in long’. Breathing out short, one understands: ‘I breathe out short’.”",
    essence:
      "It is not an exercise in forced breath retention, but in silent observation. Breathing happens on its own; the practitioner trains the mind to stay still beside a living, present phenomenon.",
    steps: [
      { title: "Point of contact", desc: "Rest your attention on the rim of the nostrils or the upper lip where the air brushes past." },
      { title: "Respect the natural rhythm", desc: "Allow the breath to be shallow or deep on its own without pushing it." },
      { title: "Cycles of 10", desc: "Count from 1 to 10 on each exhalation; if you lose count, calmly start again from 1." },
    ],
    source: "Ānāpānasati Sutta (MN 118)",
  },
  vipassana: {
    type: "Analytical Method",
    pali: "विपस्सना · Insight",
    translation: "Seeing reality as it is",
    summary: "Direct observation of sensations and thoughts to verify their transient nature first-hand.",
    quote: "“Do not accept something just because of tradition; when you verify it through your own experience, live by it.”",
    essence:
      "Once the mind is calm (Samatha), Vipassanā turns that magnifying glass toward physical sensations and mental states to see how they arise, change in intensity and dissolve moment after moment.",
    steps: [
      { title: "Impartial scan", desc: "Move through the body noticing temperature, pressure or vibration, not seeking relaxation, only observation." },
      { title: "See the dissolution", desc: "Focus on the exact end of each inhalation, the end of each sound and the end of each thought." },
      { title: "Open integration", desc: "Bring the same quality of silent observation to walking or drinking a cup of coffee." },
    ],
    source: "Kālāma Sutta (AN 3.65) · MN 10",
  },
  samatha: {
    type: "Method of Calm",
    pali: "समथ · Serenity",
    translation: "Quieting mental noise",
    summary: "Cooling down cognitive agitation so the mind works like still, transparent water.",
    quote: "“As a windless lake clearly reflects the mountains, the serene mind sees with clarity.”",
    essence:
      "Samatha and Vipassanā are the two wings of practice. As long as the water of a pond is stirred by waves of hurry and worry, it is impossible to see the bottom; Samatha lets the mental sediment settle.",
    steps: [
      { title: "Stabilize the posture", desc: "Sit with the spine upright but not rigid, letting the weight of your shoulders drop." },
      { title: "Drop the agenda for 5 minutes", desc: "Consciously declare that for the next few minutes you have no problem to solve." },
      { title: "Rest in stillness", desc: "Notice the quiet well-being that appears when the mind stops jumping toward the future." },
    ],
    source: "Samatha-vipassanā Sutta (AN 2.30)",
  },
  sampajanna: {
    type: "Practice in Motion",
    pali: "सम्पजञ्ञ · Clear Comprehension",
    translation: "Lucidity in everyday action",
    summary: "Carrying meditative presence off the cushion into walking, working, speaking and deciding.",
    quote: "“Act with full awareness when going forward and coming back, when speaking and when keeping silent.”",
    essence:
      "If Sati is remembering to be present, Sampajañña is clearly understanding what we are doing, why we are doing it, and whether it fits the context as we move through the world.",
    steps: [
      { title: "Conscious transitions", desc: "When getting up from a chair or opening a door, feel the whole movement from start to finish." },
      { title: "Clarity of purpose", desc: "Before starting a task or opening an app, ask yourself: what is my exact intention here?" },
      { title: "Deliberate pace", desc: "Walk or type 10% slower than usual to switch off the feeling of urgency." },
    ],
    source: "Satipaṭṭhāna Sutta — Sampajañña Section (MN 10)",
  },
  samma_vaca: {
    type: "Applied Ethics",
    pali: "सम्मा वाचा · Right Speech",
    translation: "Truthful, useful and timely communication",
    summary: "Training written and spoken words as a direct extension of mindfulness.",
    quote: "“Speak at the right time, with truth, with gentleness, and only of what adds value.”",
    essence:
      "In the Noble Eightfold Path, ethics (Sīla) is not a moralistic commandment but a tool to avoid agitating our own mind. The Buddha proposed a 4-question filter before speaking: Is it true? Is it useful? Is it kind? Is it the right time?",
    steps: [
      { title: "The 4-gate filter", desc: "If what you are about to say is true but useless or aggressive, choose conscious silence." },
      { title: "Fast from complaint and gossip", desc: "Spend a whole day avoiding disparaging remarks about others or repetitive complaints." },
      { title: "Listen without interrupting", desc: "Hear the other person's full argument without preparing your defense while they speak." },
    ],
    source: "Abhaya Sutta (MN 58)",
  },
}
