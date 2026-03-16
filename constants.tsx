import type {
  NavLink,
  FaqItem,
  Stat,
  BirdSpecies,
  ConservationPoint,
  ComplementaryExperience,
} from './types';

// ─── Assets ───────────────────────────────────────────────────────────────────
const CDN = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto';
const CDN_VIDEO = 'https://res.cloudinary.com/dkqocgknd/video/upload/q_auto';

export const ASSETS = {
  // Bird photos
  TUCANETA:        `${CDN},w_1200/lpet/aves-tucaneta.jpg`,
  TANGARA_AZUL:    `${CDN},w_800/lpet/aves-tangara-azul.jpg`,
  BICHOFUE:        `${CDN},w_800/lpet/aves-bichofue.jpg`,
  CARPINTERO_ROJO: `${CDN},w_800/lpet/aves-carpintero-rojo.jpg`,
  GUIA:            `${CDN},w_800/lpet/aves-guia-binoculares.jpg`,
  CARPINTERO_OLIV: `${CDN},w_800/lpet/aves-carpintero-olivaceo.jpg`,
  COPETON:         `${CDN},w_800/lpet/aves-copeton.jpg`,
  SICALIS:         `${CDN},w_800/lpet/aves-sicalis.jpg`,
  PAVA:            `${CDN},w_800/lpet/aves-pava.jpg`,
  TANGARA_MULTI:   `${CDN},w_800/lpet/aves-tangara-multicolor.jpg`,

  // Video
  AVES_VIDEO_MP4:  `${CDN_VIDEO}/lpet/aves-video.mp4`,

  // Reuse from romantic landing
  HERO_BG:         `${CDN},w_1600/lpet/romantico-hero.jpg`,
  SUNSET:          `${CDN},w_1000/lpet/romantico-sunset.jpg`,
} as const;

// ─── Contact & CTAs ───────────────────────────────────────────────────────────
export const WHATSAPP_URL =
  'https://wa.me/573189565617?text=Hola%2C%20quiero%20información%20sobre%20avistamiento%20de%20aves';
export const CLOUDBEDS_URL =
  'https://hotels.cloudbeds.com/en/reservation/yB0fEt';
export const EMAIL = 'reservations@lapalmayeltucan.com';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Especies', href: '#especies' },
  { label: 'Conservación', href: '#conservacion' },
  { label: 'Preguntas', href: '#faq' },
];

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  {
    value: '150+',
    label: 'Especies',
    sublabel: 'Residentes y migratorias',
  },
  {
    value: '90 min',
    label: 'Desde Bogotá',
    sublabel: 'Acceso fácil en carro',
  },
  {
    value: '5.0/5',
    label: 'TripAdvisor',
    sublabel: '#1 en Zipacón',
  },
  {
    value: '☕',
    label: 'Coffee Tour',
    sublabel: 'Incluido en tu estadía',
  },
];

// ─── Why Section bullets ─────────────────────────────────────────────────────
export const WHY_BULLETS = [
  {
    title: 'Bosque de niebla protegido',
    description: 'Un ecosistema único que alberga una gran diversidad de especies.',
  },
  {
    title: 'Cafetales regenerativos',
    description: 'Nuestro modelo de agricultura regenerativa crea hábitats naturales para la fauna.',
  },
  {
    title: 'Alta diversidad de especies',
    description: 'Aves residentes y migratorias pueden observarse durante todo el año.',
  },
  {
    title: 'Senderos naturales',
    description: 'Recorridos diseñados para explorar el bosque con mínimo impacto.',
  },
  {
    title: 'Acompañamiento especializado',
    description: 'Guías locales que conocen el ecosistema y sus especies.',
  },
  {
    title: 'Cerca de Bogotá',
    description: 'A solo 90 minutos de la ciudad, pero inmerso en plena naturaleza.',
  },
];

// ─── Experience steps ─────────────────────────────────────────────────────────
export const EXPERIENCE_STEPS = [
  {
    step: '01',
    title: 'Inicio al amanecer',
    description: 'El mejor momento del día para observar la actividad de las aves.',
  },
  {
    step: '02',
    title: 'Recorrido guiado',
    description: 'Caminata por senderos naturales entre bosque y cafetales.',
  },
  {
    step: '03',
    title: 'Identificación de especies',
    description: 'Aprende a reconocer aves por su canto, comportamiento y plumaje.',
  },
  {
    step: '04',
    title: 'Fotografía y observación',
    description: 'Tiempo para disfrutar y capturar momentos únicos.',
  },
];

// ─── Bird species ─────────────────────────────────────────────────────────────
export const BIRD_SPECIES: BirdSpecies[] = [
  { name: 'Tucaneta', image: ASSETS.TUCANETA },
  { name: 'Tángara azul', image: ASSETS.TANGARA_AZUL },
  { name: 'Bichofué', image: ASSETS.BICHOFUE },
  { name: 'Carpintero real', image: ASSETS.CARPINTERO_ROJO },
  { name: 'Carpintero oliváceo', image: ASSETS.CARPINTERO_OLIV },
  { name: 'Copetón', image: ASSETS.COPETON },
  { name: 'Sicalis', image: ASSETS.SICALIS },
  { name: 'Pava andina', image: ASSETS.PAVA },
];

// ─── Conservation points ──────────────────────────────────────────────────────
export const CONSERVATION_POINTS: ConservationPoint[] = [
  { text: 'Agricultura regenerativa que restaura el ecosistema' },
  { text: 'Protección activa del bosque de niebla' },
  { text: 'Conservación de biodiversidad como eje del proyecto' },
  { text: 'Apoyo a comunidades cafeteras locales' },
  { text: 'Turismo responsable y de bajo impacto' },
];

// ─── Complementary experiences ────────────────────────────────────────────────
export const COMPLEMENTARY_EXPERIENCES: ComplementaryExperience[] = [
  { emoji: '☕', title: 'Tour de café en la finca' },
  { emoji: '🍵', title: 'Degustación de cafés especiales' },
  { emoji: '🥾', title: 'Caminatas ecológicas' },
  { emoji: '🧘', title: 'Clases de yoga' },
  { emoji: '💆', title: 'Masajes relajantes' },
  { emoji: '🍽️', title: 'Gastronomía de la huerta' },
];

// ─── FAQ Items ────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Necesito experiencia previa?',
    answer:
      'No. Nuestros recorridos están diseñados tanto para principiantes como para observadores experimentados.',
  },
  {
    question: '¿Qué debo llevar?',
    answer:
      'Ropa cómoda, zapatos cerrados, repelente si lo consideras y la mejor disposición para un recorrido contemplativo',
  },
  {
    question: '¿A qué hora es el avistamiento?',
    answer:
      'Podemos empezar entre 6:00am y 6:30am, cuando las aves están más activas',
  },
  {
    question: '¿Cuánto dura el recorrido?',
    answer:
      'Entre 2 y 3 horas, dependiendo del grupo y las condiciones.',
  },
  {
    question: '¿Está incluido en la estadía?',
    answer:
      'En La Palma y el Tucán Hotel tu estadía será un escenario de avistamiento de aves permanente. El Tour con guía especializado tiene costo adicional.',
  },
  {
    question: '¿Cuál es la mejor época?',
    answer:
      'Todo el año es bueno. De marzo a mayo y octubre a noviembre son especialmente buenos por las aves migratorias.',
  },
];
