import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'es' | 'en';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

// Traducciones completas ES/EN
const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'nav.experiencia': 'Experiencia',
    'nav.especies': 'Especies',
    'nav.conservacion': 'Conservación',
    'nav.preguntas': 'Preguntas',
    'nav.reservar': 'Reservar Ahora',

    // Hero
    'hero.badge': 'Bosque de Niebla · Zipacón, Cundinamarca',
    'hero.title.pre': 'Avistamiento de aves en',
    'hero.title.highlight': 'La Palma y el Tucán',
    'hero.subtitle': 'Un refugio natural para descubrir la extraordinaria diversidad de aves de los Andes colombianos',
    'hero.description': 'Entre cafetales regenerativos y bosque de niebla, a solo 90 minutos de Bogotá, te espera una experiencia única de conexión con la naturaleza.',
    'hero.cta.reservar': 'Reservar Ahora',
    'hero.cta.especies': 'Ver especies',
    'hero.chip.bosque': 'Bosque de niebla',
    'hero.chip.especies': '150+ especies',
    'hero.chip.guias': 'Guías expertos',

    // Stats
    'stats.especies': 'Especies registradas',
    'stats.distancia': 'min desde Bogotá',
    'stats.rating': 'Calificación huéspedes',
    'stats.coffee': 'Coffee Tour',

    // Why Section
    'why.subtitle': 'POR QUÉ AVISTAR AQUÍ',
    'why.title': 'Un santuario natural de aves',
    'why.description': 'La Palma y el Tucán está ubicada en una zona privilegiada donde confluyen diferentes ecosistemas, creando el hábitat perfecto para más de 150 especies de aves.',

    // Experience Section
    'exp.subtitle': 'TU EXPERIENCIA',
    'exp.title': 'Cómo será tu avistamiento',
    'exp.guide.label': 'Guías locales expertos',
    'exp.guide.text': 'Nuestros guías conocen cada sendero, cada canto y cada especie del bosque.',
    'exp.guide.subtext': 'Una experiencia de avistamiento acompañada por quienes mejor conocen este ecosistema.',

    // Species Gallery
    'species.subtitle': 'GALERÍA DE ESPECIES',
    'species.title': 'Algunas de nuestras aves',
    'species.description': 'Estas son solo algunas de las más de 150 especies que puedes observar en La Palma y el Tucán.',

    // Conservation
    'conservation.subtitle': 'NUESTRO COMPROMISO',
    'conservation.title': 'Conservación y biodiversidad',

    // More Experiences
    'more.subtitle': 'EXPERIENCIAS COMPLEMENTARIAS',
    'more.title': 'Más allá del avistamiento',
    'more.description': 'Complementa tu experiencia de avistamiento con otras actividades que ofrece La Palma y el Tucán.',

    // Reviews
    'reviews.subtitle': 'TESTIMONIOS',
    'reviews.title': 'Lo que dicen nuestros visitantes',

    // FAQ
    'faq.subtitle': 'PREGUNTAS FRECUENTES',
    'faq.title': 'Todo lo que necesitas saber',
    'faq.q1': '¿Cuántas especies puedo ver?',
    'faq.a1': 'En La Palma y el Tucán se han registrado más de 150 especies de aves. En un recorrido típico puedes observar entre 30 y 50 especies diferentes.',
    'faq.q2': '¿Necesito experiencia previa?',
    'faq.a2': 'No necesitas experiencia previa. Nuestros guías adaptan la experiencia a todos los niveles, desde principiantes hasta observadores avanzados.',
    'faq.q3': '¿Qué debo llevar?',
    'faq.a3': 'Ropa cómoda, zapatos cerrados, repelente si lo consideras y la mejor disposición para un recorrido contemplativo',
    'faq.q4': '¿A qué hora es el avistamiento?',
    'faq.a4': 'Podemos empezar entre 6:00am y 6:30am, cuando las aves están más activas',
    'faq.q5': '¿Está incluido en la estadía?',
    'faq.a5': 'En La Palma y el Tucán Hotel tu estadía será un escenario de avistamiento de aves permanente. El Tour con guía especializado tiene costo adicional.',
    'faq.q6': '¿Puedo traer mi propio equipo?',
    'faq.a6': 'Por supuesto. Si tienes binoculares, cámara con teleobjetivo o cualquier equipo de observación, tráelo. También tenemos binoculares disponibles para quienes no tengan.',

    // Location
    'location.subtitle': 'CÓMO LLEGAR',
    'location.title': '¿Dónde estamos?',
    'location.address': 'Vereda La Palma, Zipacón, Cundinamarca',
    'location.directions': 'Desde Bogotá',
    'location.time': '90 minutos por la vía Mosquera - La Mesa',

    // CTA Final
    'cta.title': 'Reserva tu experiencia de avistamiento',
    'cta.subtitle': 'Descubre más de 150 especies de aves en el corazón del bosque de niebla',
    'cta.button': 'Reservar Ahora',
    'cta.whatsapp': 'Escríbenos por WhatsApp',

    // Footer
    'footer.description': 'Un refugio natural en el corazón del bosque de niebla colombiano, donde la observación de aves se convierte en una experiencia transformadora.',
    'footer.enlaces': 'Enlaces',
    'footer.contacto': 'Contacto',
    'footer.derechos': 'Todos los derechos reservados.',
    'footer.location': 'Zipacón, Cundinamarca, Colombia',

    // StatsBar
    'stats.0.label': 'Especies',
    'stats.0.sublabel': 'Residentes y migratorias',
    'stats.1.label': 'Desde Bogotá',
    'stats.1.sublabel': 'Acceso fácil en carro',
    'stats.2.label': 'TripAdvisor',
    'stats.2.sublabel': '#1 en Zipacón',
    'stats.3.label': 'Coffee Tour',
    'stats.3.sublabel': 'Incluido en tu estadía',

    // WhySection — 6 cards
    'why.0.title': 'Bosque de niebla protegido',
    'why.0.desc': 'Un ecosistema único que alberga una gran diversidad de especies.',
    'why.1.title': 'Cafetales regenerativos',
    'why.1.desc': 'Nuestro modelo de agricultura regenerativa crea hábitats naturales para la fauna.',
    'why.2.title': 'Alta diversidad de especies',
    'why.2.desc': 'Aves residentes y migratorias pueden observarse durante todo el año.',
    'why.3.title': 'Senderos naturales',
    'why.3.desc': 'Recorridos diseñados para explorar el bosque con mínimo impacto.',
    'why.4.title': 'Acompañamiento especializado',
    'why.4.desc': 'Guías locales que conocen el ecosistema y sus especies.',
    'why.5.title': 'Cerca de Bogotá',
    'why.5.desc': 'A solo 90 minutos de la ciudad, pero inmerso en plena naturaleza.',

    // ExperienceSection — paragraph + 4 steps
    'exp.intro': 'Nuestros recorridos de avistamiento comienzan temprano en la mañana, cuando el bosque despierta y las aves están más activas. Durante la caminata, explorarás senderos entre cafetales y bosque nativo mientras aprendes sobre las especies, su comportamiento y el papel fundamental que cumplen en el ecosistema.',
    'exp.step.0.title': 'Inicio al amanecer',
    'exp.step.0.desc': 'El mejor momento del día para observar la actividad de las aves.',
    'exp.step.1.title': 'Recorrido guiado',
    'exp.step.1.desc': 'Caminata por senderos naturales entre bosque y cafetales.',
    'exp.step.2.title': 'Identificación de especies',
    'exp.step.2.desc': 'Aprende a reconocer aves por su canto, comportamiento y plumaje.',
    'exp.step.3.title': 'Fotografía y observación',
    'exp.step.3.desc': 'Tiempo para disfrutar y capturar momentos únicos.',

    // SpeciesGallery
    'species.also': 'También podrás observar:',
    'species.also.list': 'tangaras multicolores, colibríes de montaña, atrapamoscas, búhos, aves nocturnas, halcones y aves rapaces',
    'species.also.suffix': ', entre muchas otras.',

    // ConservationSection
    'conservation.h2': 'Conservar el bosque también protege las aves',
    'conservation.desc': 'En La Palma & El Tucán Hotel, el avistamiento de aves está profundamente conectado con nuestro compromiso con la sostenibilidad y la agricultura regenerativa. Nuestro proyecto cafetero protege el bosque, promueve la biodiversidad y crea corredores ecológicos que permiten a muchas especies prosperar en este ecosistema.',
    'conservation.0': 'Agricultura regenerativa que restaura el ecosistema',
    'conservation.1': 'Protección activa del bosque de niebla',
    'conservation.2': 'Conservación de biodiversidad como eje del proyecto',
    'conservation.3': 'Apoyo a comunidades cafeteras locales',
    'conservation.4': 'Turismo responsable y de bajo impacto',

    // MoreExperiencesSection — 6 cards
    'more.0': 'Tour de café en la finca',
    'more.1': 'Degustación de cafés especiales',
    'more.2': 'Caminatas ecológicas',
    'more.3': 'Clases de yoga',
    'more.4': 'Masajes relajantes',
    'more.5': 'Gastronomía de la huerta',

    // ReviewsSection — 6 reviews
    'review.0.text': 'El avistamiento de aves fue lo más especial del viaje. Vimos tucanes, tangaras y un carpintero increíble. El guía conocía cada especie por su canto.',
    'review.0.author': 'Observador · Bogotá',
    'review.1.text': 'Un paraíso para los amantes de la naturaleza. Más de 20 especies en una sola mañana. El bosque de niebla al amanecer es mágico.',
    'review.1.author': 'Pareja · Medellín',
    'review.2.text': 'No necesitas ser experto. Los guías te enseñan todo. Mis hijos quedaron fascinados con los colibríes. Una experiencia educativa y hermosa.',
    'review.2.author': 'Familia · Bogotá',
    'review.3.text': 'La combinación de café y aves es única. Primero el coffee tour, luego avistamiento al amanecer. No existe otro lugar así cerca de Bogotá.',
    'review.3.author': 'Viajero · Cali',
    'review.4.text': 'Vinimos por las aves y nos quedamos por todo lo demás. Las cabañas, el desayuno, el silencio del bosque. Ya estamos planeando volver.',
    'review.4.author': 'Pareja birders · USA',
    'review.5.text': 'Como fotógrafo de naturaleza, este lugar es un sueño. La biodiversidad es impresionante y los senderos están perfectamente cuidados.',
    'review.5.author': 'Fotógrafo · Bogotá',

    // LocationSection
    'location.howto': '¿Cómo llegar?',
    'location.item.0': '90 minutos en carro desde Bogotá',
    'location.item.1': 'Ruta: Bogotá → Facatativá → Zipacón',
    'location.item.2': 'Clima templado de montaña (18-24°C)',
    'location.item.3': '1.800 metros sobre el nivel del mar',

    // CtaFinal
    'cta.badge': 'Bosque de niebla andino',
    'cta.email': 'Escribir por correo',
    'cta.trust': 'Respuesta inmediata · Hablamos español · Confirmación al instante',

    // FloatingCTA
    'floating.tooltip': 'Consulta sobre avistamiento 🦜',
  },
  en: {
    // Navbar
    'nav.experiencia': 'Experience',
    'nav.especies': 'Species',
    'nav.conservacion': 'Conservation',
    'nav.preguntas': 'FAQ',
    'nav.reservar': 'Book Now',

    // Hero
    'hero.badge': 'Cloud Forest · Zipacón, Cundinamarca',
    'hero.title.pre': 'Birdwatching at',
    'hero.title.highlight': 'La Palma y el Tucán',
    'hero.subtitle': 'A natural refuge to discover the extraordinary bird diversity of the Colombian Andes',
    'hero.description': 'Among regenerative coffee plantations and cloud forest, just 90 minutes from Bogotá, a unique nature connection experience awaits you.',
    'hero.cta.reservar': 'Book Now',
    'hero.cta.especies': 'See species',
    'hero.chip.bosque': 'Cloud forest',
    'hero.chip.especies': '150+ species',
    'hero.chip.guias': 'Expert guides',

    // Stats
    'stats.especies': 'Registered species',
    'stats.distancia': 'min from Bogotá',
    'stats.rating': 'Guest rating',
    'stats.coffee': 'Coffee Tour',

    // Why Section
    'why.subtitle': 'WHY BIRDWATCH HERE',
    'why.title': 'A natural bird sanctuary',
    'why.description': 'La Palma y el Tucán is located in a privileged area where different ecosystems converge, creating the perfect habitat for more than 150 bird species.',

    // Experience Section
    'exp.subtitle': 'YOUR EXPERIENCE',
    'exp.title': 'How your birdwatching will be',
    'exp.guide.label': 'Local expert guides',
    'exp.guide.text': 'Our guides know every trail, every song, and every species in the forest.',
    'exp.guide.subtext': 'A birdwatching experience accompanied by those who know this ecosystem best.',

    // Species Gallery
    'species.subtitle': 'SPECIES GALLERY',
    'species.title': 'Some of our birds',
    'species.description': 'These are just some of the more than 150 species you can observe at La Palma y el Tucán.',

    // Conservation
    'conservation.subtitle': 'OUR COMMITMENT',
    'conservation.title': 'Conservation and biodiversity',

    // More Experiences
    'more.subtitle': 'COMPLEMENTARY EXPERIENCES',
    'more.title': 'Beyond birdwatching',
    'more.description': 'Complement your birdwatching experience with other activities offered at La Palma y el Tucán.',

    // Reviews
    'reviews.subtitle': 'TESTIMONIALS',
    'reviews.title': 'What our visitors say',

    // FAQ
    'faq.subtitle': 'FREQUENTLY ASKED QUESTIONS',
    'faq.title': 'Everything you need to know',
    'faq.q1': 'How many species can I see?',
    'faq.a1': 'Over 150 bird species have been recorded at La Palma y el Tucán. On a typical tour you can observe between 30 and 50 different species.',
    'faq.q2': 'Do I need previous experience?',
    'faq.a2': 'No previous experience is needed. Our guides adapt the experience to all levels, from beginners to advanced birdwatchers.',
    'faq.q3': 'What should I bring?',
    'faq.a3': 'Comfortable clothing, closed shoes, insect repellent if you wish, and the best disposition for a contemplative walk.',
    'faq.q4': 'What time is the birdwatching?',
    'faq.a4': 'We can start between 6:00am and 6:30am, when birds are most active.',
    'faq.q5': 'Is it included in the stay?',
    'faq.a5': 'At La Palma y el Tucán Hotel your stay will be a permanent birdwatching setting. The guided tour with a specialized guide has an additional cost.',
    'faq.q6': 'Can I bring my own equipment?',
    'faq.a6': "Of course. If you have binoculars, a camera with a telephoto lens, or any observation equipment, bring it along. We also have binoculars available for those who don't.",

    // Location
    'location.subtitle': 'HOW TO GET HERE',
    'location.title': 'Where are we?',
    'location.address': 'Vereda La Palma, Zipacón, Cundinamarca',
    'location.directions': 'From Bogotá',
    'location.time': '90 minutes via Mosquera - La Mesa road',

    // CTA Final
    'cta.title': 'Book your birdwatching experience',
    'cta.subtitle': 'Discover over 150 bird species in the heart of the cloud forest',
    'cta.button': 'Book Now',
    'cta.whatsapp': 'Message us on WhatsApp',

    // Footer
    'footer.description': 'A natural refuge in the heart of the Colombian cloud forest, where birdwatching becomes a transformative experience.',
    'footer.enlaces': 'Links',
    'footer.contacto': 'Contact',
    'footer.derechos': 'All rights reserved.',
    'footer.location': 'Zipacón, Cundinamarca, Colombia',

    // StatsBar
    'stats.0.label': 'Species',
    'stats.0.sublabel': 'Resident and migratory',
    'stats.1.label': 'From Bogotá',
    'stats.1.sublabel': 'Easy access by car',
    'stats.2.label': 'TripAdvisor',
    'stats.2.sublabel': '#1 in Zipacón',
    'stats.3.label': 'Coffee Tour',
    'stats.3.sublabel': 'Included in your stay',

    // WhySection — 6 cards
    'why.0.title': 'Protected cloud forest',
    'why.0.desc': 'A unique ecosystem that harbors a great diversity of species.',
    'why.1.title': 'Regenerative coffee plantations',
    'why.1.desc': 'Our regenerative agriculture model creates natural habitats for wildlife.',
    'why.2.title': 'High species diversity',
    'why.2.desc': 'Resident and migratory birds can be observed throughout the year.',
    'why.3.title': 'Natural trails',
    'why.3.desc': 'Routes designed to explore the forest with minimal impact.',
    'why.4.title': 'Expert guidance',
    'why.4.desc': 'Local guides who know the ecosystem and its species.',
    'why.5.title': 'Close to Bogotá',
    'why.5.desc': 'Just 90 minutes from the city, yet immersed in nature.',

    // ExperienceSection — paragraph + 4 steps
    'exp.intro': 'Our birdwatching tours begin early in the morning, when the forest awakens and birds are most active. During the walk, you will explore trails through coffee plantations and native forest while learning about the species, their behavior, and the vital role they play in the ecosystem.',
    'exp.step.0.title': 'Sunrise start',
    'exp.step.0.desc': 'The best time of day to observe bird activity.',
    'exp.step.1.title': 'Guided tour',
    'exp.step.1.desc': 'A walk through natural trails between forest and coffee plantations.',
    'exp.step.2.title': 'Species identification',
    'exp.step.2.desc': 'Learn to recognize birds by their song, behavior, and plumage.',
    'exp.step.3.title': 'Photography and observation',
    'exp.step.3.desc': 'Time to enjoy and capture unique moments.',

    // SpeciesGallery
    'species.also': 'You may also observe:',
    'species.also.list': 'multicolored tanagers, mountain hummingbirds, flycatchers, owls, nocturnal birds, hawks, and raptors',
    'species.also.suffix': ', among many others.',

    // ConservationSection
    'conservation.h2': 'Protecting the forest also protects the birds',
    'conservation.desc': 'At La Palma & El Tucán Hotel, birdwatching is deeply connected to our commitment to sustainability and regenerative agriculture. Our coffee project protects the forest, promotes biodiversity, and creates ecological corridors that allow many species to thrive in this ecosystem.',
    'conservation.0': 'Regenerative agriculture that restores the ecosystem',
    'conservation.1': 'Active cloud forest protection',
    'conservation.2': "Biodiversity conservation as the project's core",
    'conservation.3': 'Support for local coffee communities',
    'conservation.4': 'Responsible and low-impact tourism',

    // MoreExperiencesSection — 6 cards
    'more.0': 'Farm coffee tour',
    'more.1': 'Specialty coffee tasting',
    'more.2': 'Ecological hikes',
    'more.3': 'Yoga classes',
    'more.4': 'Relaxing massages',
    'more.5': 'Farm-to-table dining',

    // ReviewsSection — 6 reviews
    'review.0.text': 'Birdwatching was the most special part of the trip. We saw toucans, tanagers, and an incredible woodpecker. The guide knew every species by its song.',
    'review.0.author': 'Birdwatcher · Bogotá',
    'review.1.text': 'A paradise for nature lovers. Over 20 species in a single morning. The cloud forest at dawn is magical.',
    'review.1.author': 'Couple · Medellín',
    'review.2.text': "You don't need to be an expert. The guides teach you everything. My kids were fascinated by the hummingbirds. A beautiful and educational experience.",
    'review.2.author': 'Family · Bogotá',
    'review.3.text': "The combination of coffee and birds is unique. First the coffee tour, then birdwatching at sunrise. There's no other place like this near Bogotá.",
    'review.3.author': 'Traveler · Cali',
    'review.4.text': 'We came for the birds and stayed for everything else. The cabins, breakfast, the forest silence. We\'re already planning to come back.',
    'review.4.author': 'Birder couple · USA',
    'review.5.text': 'As a nature photographer, this place is a dream. The biodiversity is impressive and the trails are perfectly maintained.',
    'review.5.author': 'Photographer · Bogotá',

    // LocationSection
    'location.howto': 'How to get here?',
    'location.item.0': '90 minutes by car from Bogotá',
    'location.item.1': 'Route: Bogotá → Facatativá → Zipacón',
    'location.item.2': 'Temperate mountain climate (18-24°C)',
    'location.item.3': '1,800 meters above sea level',

    // CtaFinal
    'cta.badge': 'Andean cloud forest',
    'cta.email': 'Send an email',
    'cta.trust': 'Immediate response · We speak English · Instant confirmation',

    // FloatingCTA
    'floating.tooltip': 'Ask about birdwatching 🦜',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lpet-aves-lang') as Lang) || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('lpet-aves-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const t = (key: string): string => {
    return translations[lang][key] || translations['es'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
