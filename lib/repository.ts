import type { Lang } from "@/lib/i18n"
import { NODES_EN, PILLARS_EN } from "@/lib/repository-en"

export type PracticeStep = { title: string; desc: string }

export type ConceptNode = {
  id: string
  code: string
  type: string
  name: string
  pali: string
  translation: string
  summary: string
  quote: string
  essence: string
  steps: PracticeStep[]
  source: string
  connections: string[]
}

export type Pillar = {
  id: string
  num: string
  pali: string
  title: string
  desc: string
  nodes: ConceptNode[]
}

export const REPOSITORY: Pillar[] = [
  {
    id: "impermanencia",
    num: "01",
    pali: "Tilakkhana",
    title: "Realidad y Cambio",
    desc: "Las leyes de la existencia condicionada, la impermanencia y la naturaleza relacional de todo fenómeno.",
    nodes: [
      {
        id: "anicca",
        code: "01.1",
        type: "Marca de Existencia",
        name: "Anicca",
        pali: "अनिच्च · Impermanencia",
        translation: "Inconstancia / Flujo continuo",
        summary: "Nada permanece estático; todo fenómeno condicionado surge, se transforma mientras existe y cesa.",
        quote: "«Todo lo que tiene la naturaleza de surgir, tiene la naturaleza de cesar.»",
        essence: "En la filosofía budista temprana, Anicca no es una doctrina pesimista, sino una ley observable. El sufrimiento ocurre cuando la mente intenta congelar personas, estados de ánimo o situaciones que por definición están en movimiento continuo.",
        steps: [
          { title: "Observación en el cuerpo", desc: "Nota cómo una sensación física (frío, tensión, pulso) cambia de intensidad cada pocos segundos." },
          { title: "Curva emocional", desc: "Ante una emoción intensa (ira o euforia), observa su pico y su desgaste natural sin alimentarla." },
          { title: "Desapego operativo", desc: "Planifica tus proyectos asumiendo que las condiciones cambiarán, reduciendo la fricción ante lo imprevisto." }
        ],
        source: "Anicca Sutta (SN 22.12)",
        connections: ["dukkha", "anatta", "vipassana", "sankhara"]
      },
      {
        id: "anatta",
        code: "01.2",
        type: "Marca de Existencia",
        name: "Anattā",
        pali: "अनत्ता · No-Yo",
        translation: "Ausencia de un núcleo fijo",
        summary: "La identidad no es una entidad sólida, sino un proceso cambiante de percepciones, cuerpo y memoria.",
        quote: "«Los fenómenos son procesos en curso sin un dueño rígido detrás de ellos.»",
        essence: "Anattā desmonta la ilusión del ego como un centro inmutable. Lo que llamamos 'yo' es una corriente de cinco agregados (cuerpo, sensación, percepción, formaciones mentales y consciencia) renovándose en cada instante.",
        steps: [
          { title: "Despersonalizar el lenguaje", desc: "Sustituye mentalmente 'estoy furioso' por 'hay furia presente en este momento'." },
          { title: "Rastrear al observador", desc: "En silencio, busca dónde se ubica exactamente ese 'yo' que cree ser dueño de los pensamientos." },
          { title: "Soltar la defensa identitaria", desc: "Identifica cuándo discutes solo por proteger tu autoimagen y no por esclarecer la verdad." }
        ],
        source: "Anattalakkhana Sutta (SN 22.59)",
        connections: ["anicca", "sunyata", "sati", "upadana"]
      },
      {
        id: "pratitya",
        code: "01.3",
        type: "Ley Causal",
        name: "Paṭiccasamuppāda",
        pali: "पटिच्चसमुप्पाद · Interdependencia",
        translation: "Origen co-dependiente",
        summary: "Ningún evento existe por sí solo; todo emerge como resultado de una red de condiciones previas.",
        quote: "«Cuando esto existe, aquello llega a ser; al cesar esto, aquello cesa.»",
        essence: "En lugar de ver el mundo como objetos aislados, el origen interdependiente muestra una red de causas y condiciones. Comprender qué condición alimenta un hábito reactivo permite desactivarlo desde la raíz.",
        steps: [
          { title: "Identificar el disparador", desc: "Reconoce el contacto sensorial exacto (una notificación, un tono de voz) antes de que nazca la reacción." },
          { title: "Cortar el eslabón", desc: "Entre la sensación agradable/desagradable y el impulso ciego, introduce una exhalación consciente." },
          { title: "Visión sistémica", desc: "Analiza cualquier dificultad como una suma de condiciones modificables y no como una culpa estática." }
        ],
        source: "Maha-nidana Sutta (DN 15)",
        connections: ["anicca", "sunyata", "tanha", "avijja"]
      },
      {
        id: "sunyata",
        code: "01.4",
        type: "Filosofía Mahāyāna",
        name: "Śūnyatā",
        pali: "शून्यता · Vacuidad",
        translation: "Apertura relacional",
        summary: "Las cosas están vacías de existencia aislada e independiente; justamente por eso pueden transformarse.",
        quote: "«La forma no difiere del vacío; el vacío no difiere de la forma.»",
        essence: "Sistematizada por Nāgārjuna, la vacuidad no es nihilismo ni significa que 'nada exista'. Significa que nada posee una esencia cerrada: todo depende de su contexto, relaciones y causas, abriendo total libertad de cambio.",
        steps: [
          { title: "Desarmar etiquetas fijas", desc: "Cuestiona cuando sentencias que una situación o persona 'siempre es así'." },
          { title: "Percibir el espacio", desc: "Nota el silencio de fondo que permite que los sonidos de tu habitación puedan escucharse." },
          { title: "Flexibilidad cognitiva", desc: "Suelta un punto de vista rígido en cuanto aparezca nueva evidencia en el presente." }
        ],
        source: "Prajñāpāramitā Hṛdaya — Sutra del Corazón",
        connections: ["anatta", "pratitya", "panna", "upekkha"]
      },
      {
        id: "sankhara",
        code: "01.5",
        type: "Agregado Mental",
        name: "Saṅkhāra",
        pali: "सङ्खार · Formaciones",
        translation: "Construcciones mentales y hábitos",
        summary: "Tanto las huellas de carácter que moldean nuestras reacciones como todo compuesto condicionado.",
        quote: "«Transitorias son todas las formaciones condicionadas; trabajen con diligencia.»",
        essence: "Cada vez que reaccionamos con aversión o apego, grabamos un surco mental (Saṅkhāra) que hace más probable repetir esa reacción mañana. La práctica meditativa consiste en observar estos impulsos sin reforzarlos hasta que pierden inercia.",
        steps: [
          { title: "Mapear el piloto automático", desc: "Detecta tus tres reacciones automáticas más frecuentes ante la presión o el estrés." },
          { title: "No alimentar el surco", desc: "Cuando surja un viejo hábito mental, obsérvalo en el cuerpo sin actuar sobre él durante 30 segundos." },
          { title: "Sembrar nuevas disposiciones", desc: "Elige deliberadamente una respuesta serena para debilitar el reflejo condicionado anterior." }
        ],
        source: "Mahāparinibbāna Sutta (DN 16)",
        connections: ["anicca", "pratitya", "vipassana", "upadana"]
      }
    ]
  },
  {
    id: "sufrimiento",
    num: "02",
    pali: "Sacca",
    title: "Fricción y Deseo",
    desc: "Diagnóstico de la insatisfacción humana, el mecanismo del apego y la posibilidad real de soltar.",
    nodes: [
      {
        id: "dukkha",
        code: "02.1",
        type: "Primera Verdad",
        name: "Dukkha",
        pali: "दुक्ख · Insatisfacción",
        translation: "Fricción / Rueda descentrada",
        summary: "La brecha constante entre cómo exigimos que sea la realidad y cómo está ocurriendo en este instante.",
        quote: "«El dolor en el cuerpo es inevitable; el sufrimiento mental es la segunda flecha opcional.»",
        essence: "Etimológicamente, Dukkha describe el eje de una rueda mal encajada que chirría al avanzar. No significa que la vida sea triste, sino que exigir permanencia a cosas transitorias produce fricción psicológica constante.",
        steps: [
          { title: "Separar las dos flechas", desc: "Distingue entre el inconveniente objetivo (flecha 1) y la queja rumiativa que agregas después (flecha 2)." },
          { title: "Localizar la resistencia", desc: "Observa qué músculo (mandíbula, hombros, abdomen) se contrae cuando algo contradice tu plan." },
          { title: "Aceptación táctica", desc: "Reconoce el hecho consumado sin pelear con el pasado antes de decidir el siguiente paso." }
        ],
        source: "Sallatha Sutta — Las Dos Flechas (SN 36.6)",
        connections: ["tanha", "anicca", "nirodha", "upekkha"]
      },
      {
        id: "tanha",
        code: "02.2",
        type: "Segunda Verdad",
        name: "Taṇhā",
        pali: "तण्हा · Sed Mental",
        translation: "Anhelo compulsivo / Aversión",
        summary: "El impulso involuntario de capturar lo placentero, convertirse en alguien o aniquilar lo incómodo.",
        quote: "«La sed mental se multiplica cada vez que intentamos saciarla por impulso.»",
        essence: "Taṇhā significa literalmente 'sed febril'. Opera en tres frentes: sed de estímulos sensoriales (Kāma), sed de estatus e identidad (Bhava) y sed de rechazar o destruir lo que nos disgusta (Vibhava).",
        steps: [
          { title: "Pausa de 10 segundos", desc: "Cuando sientas urgencia por abrir una red social o comprar algo, observa el tirón físico en el pecho." },
          { title: "Ver la promesa corta", desc: "Recuerda cómo el último deseo saciado solo trajo calma durante unos minutos antes de pedir más." },
          { title: "Habitar la neutralidad", desc: "Permanece 3 minutos sin estímulos externos observando la inquietud de la mente sin obedecerla." }
        ],
        source: "Dhammacakkappavattana Sutta (SN 56.11)",
        connections: ["dukkha", "upadana", "nirodha", "sati"]
      },
      {
        id: "upadana",
        code: "02.3",
        type: "Eslabón Causal",
        name: "Upādāna",
        pali: "उपादान · Aferramiento",
        translation: "Combustible / Identificación rígida",
        summary: "Cuando el deseo puntual se solidifica en apego a placeres, dogmas, rituales o a la propia imagen.",
        quote: "«Así como el fuego arde mientras tiene combustible, la mente se agita mientras se aferra.»",
        essence: "En Pali, Upādāna significa a la vez 'aferrarse' y 'combustible'. El budismo señala que el aferramiento más sutil y conflictivo no es hacia los objetos materiales, sino hacia nuestras opiniones e ideas fijas (Diṭṭhupādāna).",
        steps: [
          { title: "Aflojar la opinión", desc: "En una conversación tensa, expón tu argumento sin atar tu dignidad personal a tener la razón." },
          { title: "Detectar el combustible", desc: "Pregúntate qué pensamiento repetitivo está manteniendo vivo un enojo de hace horas." },
          { title: "Usar sin poseer", desc: "Disfruta de tus herramientas, proyectos y logros recordando que eres su administrador temporal." }
        ],
        source: "Upādāna Sutta (SN 12.52)",
        connections: ["tanha", "anatta", "sankhara", "nirodha"]
      },
      {
        id: "avijja",
        code: "02.4",
        type: "Raíz Latente",
        name: "Avijjā",
        pali: "अविज्जा · Ignorancia",
        translation: "Ceguera perceptiva / Desconocimiento",
        summary: "No es falta de erudición académica, sino confundir lo transitorio con lo eterno y lo doloroso con felicidad.",
        quote: "«No ver las cosas tal como son es la raíz de toda confusión mental.»",
        essence: "Avijjā funciona como un lente distorsionado que nos hace percibir estabilidad donde hay flujo (Anicca) y un ego aislado donde hay interdependencia. La claridad perceptiva (Vijjā / Paññā) disuelve esa niebla mediante observación directa.",
        steps: [
          { title: "Cuestionar la primera impresión", desc: "No des por sentado que tu interpretación automática de un gesto ajeno es la realidad." },
          { title: "Verificar las 4 distorsiones", desc: "Pregúntate si estás exigiendo permanencia a algo que por naturaleza es cambiante." },
          { title: "Priorizar experiencia sobre teoría", desc: "Comprueba cada concepto filosófico en tu propia respiración y mente hoy mismo." }
        ],
        source: "Avijjā Sutta (SN 45.1)",
        connections: ["pratitya", "panna", "vipassana", "dukkha"]
      },
      {
        id: "nirodha",
        code: "02.5",
        type: "Tercera Verdad",
        name: "Nirodha",
        pali: "निरोध · Cesación",
        translation: "Extinción de la fricción / Soltar",
        summary: "El alivio inmediato y verificable que experimenta la mente cuando deja de alimentar la resistencia.",
        quote: "«Al soltar la sed y el aferramiento, cesa la agitación y emerge la paz imperturbable.»",
        essence: "La tercera noble verdad no es una promesa mística para otra vida, sino un diagnóstico práctico: si el sufrimiento tiene una causa concreta (el aferramiento), al soltar esa causa el sufrimiento se apaga en este mismo instante.",
        steps: [
          { title: "Notar el instante de alivio", desc: "Registra la sensación física de descanso justo cuando decides soltar una discusión inútil." },
          { title: "Exhalación de descarga", desc: "Usa una exhalación larga para soltar deliberadamente la tensión acumulada en hombros y pecho." },
          { title: "Restar antes que sumar", desc: "Cuando te sientas saturado, busca qué exigencia innecesaria puedes soltar hoy en vez de añadir más tareas." }
        ],
        source: "Dhammacakkappavattana Sutta (SN 56.11)",
        connections: ["dukkha", "tanha", "upadana", "upekkha"]
      }
    ]
  },
  {
    id: "mente",
    num: "03",
    pali: "Citta",
    title: "Arquitectura Mental",
    desc: "Cartografía de las facultades cognitivas: atención, estabilidad, discernimiento y ecuanimidad.",
    nodes: [
      {
        id: "sati",
        code: "03.1",
        type: "Facultad Ejecutiva",
        name: "Sati",
        pali: "सति · Atención Plena",
        translation: "Recordar estar presente",
        summary: "Capacidad de observar lo que ocurre en el cuerpo y la mente en tiempo real sin juzgarlo ni editarlo.",
        quote: "«En lo visto, solo hay lo visto; en lo oído, solo lo oído; en lo pensado, solo lo pensado.»",
        essence: "Sati es presencia desnuda y lúcida. Antes de que la narrativa mental construya toda una novela sobre un estímulo, Sati registra el dato puro manteniendo claridad y memoria del presente.",
        steps: [
          { title: "Anclaje somático", desc: "Mantén el 20% de tu atención en el contacto de los pies o las manos mientras trabajas." },
          { title: "Notar sin comentar", desc: "Percibe un sonido o interrupción y evita ponerle adjetivos inmediatos de 'molesto' o 'bueno'." },
          { title: "Micro-retornos amables", desc: "Cada vez que notes distracción, regresa al presente sin reprocharte haberte distraído." }
        ],
        source: "Satipaṭṭhāna Sutta (MN 10)",
        connections: ["anapanasati", "vipassana", "sampajanna", "upekkha"]
      },
      {
        id: "upekkha",
        code: "03.2",
        type: "Estado Sublime",
        name: "Upekkhā",
        pali: "उपेक्खा · Ecuanimidad",
        translation: "Mirar con equilibrio espacioso",
        summary: "Estabilidad mental que comprende el cambio y no es arrastrada ni por el elogio ni por la pérdida.",
        quote: "«Como una roca sólida no tiembla con el viento, el sabio no vacila ante el halago o la crítica.»",
        essence: "La ecuanimidad no es frialdad ni apatía; es amplitud. Es la capacidad de estar plenamente comprometido con una acción sin que tu paz interior dependa de las variables que no controlas.",
        steps: [
          { title: "Los 8 vientos mundanos", desc: "Observa con igual sobriedad ganancia y pérdida, elogio y crítica, éxito y fracaso." },
          { title: "Enfriamiento previo", desc: "Ante un mensaje provocador, espera a que baje la carga fisiológica antes de redactar respuesta." },
          { title: "Excelencia sin ansiedad", desc: "Cuida al máximo la ejecución técnica de tu trabajo hoy y suelta la obsesión por el resultado futuro." }
        ],
        source: "Lokavipatti Sutta (AN 8.6)",
        connections: ["sati", "dukkha", "nirodha", "karuna"]
      },
      {
        id: "samadhi",
        code: "03.3",
        type: "Entrenamiento Mental",
        name: "Samādhi",
        pali: "समाधि · Unificación",
        translation: "Recogimiento y foco estable",
        summary: "Reunir la energía mental dispersa en un único punto tranquilo, libre de fragmentación y multitarea.",
        quote: "«La mente unificada y libre de distracción ve la realidad tal como es.»",
        essence: "Una mente fragmentada en diez estímulos simultáneos carece de fuerza para comprenderse a sí misma. Samādhi recoge esa atención dispersa como una lupa que concentra la luz solar en un solo punto.",
        steps: [
          { title: "Monotarea estricta", desc: "Dedica bloques cerrados de 25 minutos a una sola actividad con notificaciones silenciadas." },
          { title: "Notar la dispersión", desc: "Detecta el síntoma físico de fatiga cuando saltas de una pestaña o idea a otra sin pausa." },
          { title: "Unificar cuerpo y mente", desc: "Alinea tu postura física antes de iniciar una sesión de estudio o programación compleja." }
        ],
        source: "Samādhi Sutta (SN 22.5)",
        connections: ["anapanasati", "samatha", "panna", "sati"]
      },
      {
        id: "panna",
        code: "03.4",
        type: "Facultad Superior",
        name: "Paññā",
        pali: "पञ्ञा · Sabiduría",
        translation: "Discernimiento penetrante",
        summary: "Comprensión experiencial directa que distingue qué acciones generan claridad y cuáles generan sufrimiento.",
        quote: "«La atención estabiliza la mente; el discernimiento corta de raíz la confusión.»",
        essence: "En el budismo hay tres niveles de sabiduría: la escuchada o leída (Suta), la reflexionada intelectualmente (Cintā) y la verificada por observación directa en el propio cuerpo y mente (Bhāvanā-mayā Paññā).",
        steps: [
          { title: "Filtro de utilidad ética", desc: "Antes de actuar, pregúntate: ¿esto conduce a mayor agitación o a mayor claridad y calma?" },
          { title: "Pasar del concepto al hecho", desc: "No te quedes solo con la definición de impermanencia; obsérvala operando en tu día." },
          { title: "Cuestionar supuestos", desc: "Revisa una creencia personal antigua bajo la luz de tu experiencia directa actual." }
        ],
        source: "Mahāvedalla Sutta (MN 43)",
        connections: ["vipassana", "avijja", "sunyata", "samadhi"]
      },
      {
        id: "karuna",
        code: "03.5",
        type: "Brahmavihāra",
        name: "Karuṇā & Mettā",
        pali: "करुणा · Benevolencia",
        translation: "Compasión lúcida y buena voluntad",
        summary: "Disposición mental libre de hostilidad que reconoce que todos los seres buscan evitar el sufrimiento.",
        quote: "«Del mismo modo que una madre protege su vida, cultiva una mente sin límites hacia todos.»",
        essence: "Mettā (buena voluntad) y Karuṇā (compasión) no son sentimentalismos débiles, sino antídotos cognitivos contra el resentimiento y la irritabilidad. Una mente libre de hostilidad piensa con mayor precisión y descansa mejor.",
        steps: [
          { title: "Reconocer la fricción ajena", desc: "Ante alguien difícil, recuerda que su torpeza proviene de su propia confusión e insatisfacción." },
          { title: "Soltar el rencor por higiene mental", desc: "Reconoce que sostener ira es como agarrar un carbón encendido esperando quemar al otro." },
          { title: "Intención silenciosa", desc: "Al iniciar el día, desea sobria y sinceramente claridad y calma para ti y quienes te rodean." }
        ],
        source: "Karaṇīya Mettā Sutta (Snp 1.8)",
        connections: ["upekkha", "samma_vaca", "dukkha", "sati"]
      }
    ]
  },
  {
    id: "practica",
    num: "04",
    pali: "Bhāvanā",
    title: "Cultivo y Método",
    desc: "Protocolos técnicos de meditación, calma mental y atención aplicada a la vida cotidiana.",
    nodes: [
      {
        id: "anapanasati",
        code: "04.1",
        type: "Técnica Base",
        name: "Ānāpānasati",
        pali: "आनापानसति · Respiración",
        translation: "Atención al flujo del aire",
        summary: "Uso de la respiración natural como ancla somática para calmar el ruido mental y estabilizar el enfoque.",
        quote: "«Inhalando largo, comprende: 'Inhalo largo'. Exhalando corto, comprende: 'Exhalo corto'.»",
        essence: "No es un ejercicio de retención forzada del aire, sino de observación silenciosa. La respiración ocurre por sí sola; el practicante entrena a la mente a permanecer quieta junto a un fenómeno vivo y presente.",
        steps: [
          { title: "Punto de contacto", desc: "Fija la atención en el borde de las fosas nasales o el labio superior donde roza el aire." },
          { title: "Respetar el ritmo natural", desc: "Permite que la respiración sea superficial o profunda por sí misma sin empujarla." },
          { title: "Ciclos de 10", desc: "Cuenta del 1 al 10 en cada exhalación; si pierdes la cuenta, vuelve a empezar desde 1 con calma." }
        ],
        source: "Ānāpānasati Sutta (MN 118)",
        connections: ["sati", "samatha", "vipassana", "samadhi"]
      },
      {
        id: "vipassana",
        code: "04.2",
        type: "Método Analítico",
        name: "Vipassanā",
        pali: "विपस्सना · Visión Cabal",
        translation: "Inspección de la realidad tal como es",
        summary: "Observación directa de sensaciones y pensamientos para comprobar en carne propia su carácter transitorio.",
        quote: "«No aceptes algo solo por tradición; cuando lo verifiques por experiencia propia, habítalo.»",
        essence: "Una vez que la mente está en calma (Samatha), Vipassanā dirige esa lupa hacia las sensaciones físicas y los estados mentales para ver cómo surgen, cambian de intensidad y se disuelven instante tras instante.",
        steps: [
          { title: "Escaneo imparcial", desc: "Recorre el cuerpo notando temperatura, presión o vibración sin buscar relajación, solo observación." },
          { title: "Ver la disolución", desc: "Enfócate en el final exacto de cada inhalación, el final de cada sonido y el final de cada pensamiento." },
          { title: "Integración abierta", desc: "Lleva la misma calidad de observación silenciosa al caminar o tomar una taza de café." }
        ],
        source: "Kālāma Sutta (AN 3.65) · MN 10",
        connections: ["anicca", "anapanasati", "panna", "samatha"]
      },
      {
        id: "samatha",
        code: "04.3",
        type: "Método de Calma",
        name: "Samatha",
        pali: "समथ · Serenidad",
        translation: "Apaciguamiento del ruido mental",
        summary: "El enfriamiento de la agitación cognitiva para que la mente funcione como agua quieta y transparente.",
        quote: "«Como un lago sin viento refleja con nitidez las montañas, la mente serena ve con claridad.»",
        essence: "Samatha y Vipassanā son las dos alas de la práctica. Mientras el agua de un estanque esté revuelta por olas de prisa y preocupación, es imposible ver el fondo; Samatha decanta el sedimento mental.",
        steps: [
          { title: "Estabilizar la postura", desc: "Siéntate con la columna erguida pero sin rigidez, dejando caer el peso de los hombros." },
          { title: "Soltar la agenda por 5 minutos", desc: "Declara conscientemente que durante los próximos minutos no tienes ningún problema que resolver." },
          { title: "Descansar en la quietud", desc: "Nota el bienestar silencioso que aparece cuando la mente deja de saltar hacia el futuro." }
        ],
        source: "Samatha-vipassanā Sutta (AN 2.30)",
        connections: ["anapanasati", "samadhi", "vipassana", "nirodha"]
      },
      {
        id: "sampajanna",
        code: "04.4",
        type: "Práctica en Movimiento",
        name: "Sampajañña",
        pali: "सम्पजञ्ञ · Comprensión Clara",
        translation: "Lucidez en la acción cotidiana",
        summary: "Llevar la presencia meditativa fuera del cojín hacia el caminar, trabajar, hablar y decidir.",
        quote: "«Actúa con plena consciencia al avanzar y al retroceder, al hablar y al guardar silencio.»",
        essence: "Si Sati es recordar estar presente, Sampajañña es comprender con claridad qué estamos haciendo, por qué lo hacemos y si es adecuado al contexto mientras nos movemos en el mundo.",
        steps: [
          { title: "Transiciones conscientes", desc: "Al levantarte de la silla o abrir una puerta, siente el movimiento completo de principio a fin." },
          { title: "Claridad de propósito", desc: "Antes de iniciar una tarea o abrir una aplicación, pregúntate: ¿cuál es mi intención exacta aquí?" },
          { title: "Ritmo deliberado", desc: "Camina o escribe un 10% más pausado de lo habitual para desactivar la sensación de urgencia." }
        ],
        source: "Satipaṭṭhāna Sutta — Sección Sampajañña (MN 10)",
        connections: ["sati", "samma_vaca", "panna", "anapanasati"]
      },
      {
        id: "samma_vaca",
        code: "04.5",
        type: "Ética Aplicada",
        name: "Sammā Vācā",
        pali: "सम्मा वाचा · Habla Correcta",
        translation: "Comunicación veraz, útil y oportuna",
        summary: "Entrenamiento de la palabra escrita y hablada como extensión directa de la atención plena.",
        quote: "«Habla en el momento oportuno, con la verdad, con suavidad y solo de aquello que aporta valor.»",
        essence: "En el Noble Camino Óctuple, la ética (Sīla) no es un mandamiento moralista, sino una herramienta para no agitar nuestra propia mente. El Buda propuso un filtro de 4 preguntas antes de hablar: ¿Es verdadero? ¿Es útil? ¿Es amable? ¿Es el momento adecuado?",
        steps: [
          { title: "El filtro de las 4 puertas", desc: "Si lo que vas a decir es cierto pero inútil o agresivo, elige el silencio consciente." },
          { title: "Ayuno de queja y rumor", desc: "Pasa un día entero evitando comentarios despectivos sobre terceros o quejas repetitivas." },
          { title: "Escucha sin interrumpir", desc: "Escucha el argumento completo de tu interlocutor sin preparar tu defensa mientras él habla." }
        ],
        source: "Abhaya Sutta (MN 58)",
        connections: ["sampajanna", "karuna", "sati", "upekkha"]
      }
    ]
  }
];

export const TOTAL_NODES = REPOSITORY.reduce((acc, p) => acc + p.nodes.length, 0)

const REPOSITORY_EN: Pillar[] = REPOSITORY.map((pillar) => ({
  ...pillar,
  ...PILLARS_EN[pillar.id],
  nodes: pillar.nodes.map((node) => ({ ...node, ...NODES_EN[node.id] })),
}))

export function getRepository(lang: Lang): Pillar[] {
  return lang === "en" ? REPOSITORY_EN : REPOSITORY
}

export function findNodeById(nodeId: string, lang: Lang = "es") {
  for (const pillar of getRepository(lang)) {
    const node = pillar.nodes.find((n) => n.id === nodeId)
    if (node) return { pillar, node }
  }
  return null
}

export function normalizeText(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}
