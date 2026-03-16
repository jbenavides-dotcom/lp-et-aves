import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Trees, Bird, Map, Users, Navigation, Sunrise, Footprints, Search, Camera, Shield, Heart, Sprout, Globe, MapPin } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';
import { useI18n } from './i18n';

import {
  ASSETS,
  STATS,
  WHY_BULLETS,
  EXPERIENCE_STEPS,
  BIRD_SPECIES,
  CONSERVATION_POINTS,
  COMPLEMENTARY_EXPERIENCES,
  WHATSAPP_URL,
  CLOUDBEDS_URL,
  EMAIL,
  NAV_LINKS,
} from './constants';

// ─── WhatsApp floating button ─────────────────────────────────────────────────
function FloatingCTA() {
  const { trackWhatsAppClick } = useAnalytics();
  const { t } = useI18n();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating_button')}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Consulta sobre avistamiento"
    >
      {/* Tooltip */}
      <span className="hidden sm:block bg-white text-brand-dark text-sm font-medium px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {t('floating.tooltip')}
      </span>
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink text-white shadow-lg hover:bg-brand-pink/90 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 transition-all duration-300">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </span>
    </a>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const { t } = useI18n();
  return (
    <section className="bg-brand-dark py-10" aria-label="Estadísticas clave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-0.5">
                {t(`stats.${i}.label`)}
              </div>
              <div className="text-white/50 text-xs sm:text-sm">{t(`stats.${i}.sublabel`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Section ──────────────────────────────────────────────────────────────
function WhySection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  const ICONS = [Trees, Bird, Bird, Map, Users, Navigation];

  return (
    <section
      id="por-que"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="porque-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('why.subtitle')}
          </p>
          <h2
            id="porque-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4"
          >
            {t('why.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('why.description')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_BULLETS.map((bullet, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={bullet.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-brand-beige/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-green" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg text-brand-dark mb-2 group-hover:text-brand-green transition-colors duration-200">
                  {t(`why.${i}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`why.${i}.desc`)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Experience Section ───────────────────────────────────────────────────────
function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  const ICONS = [Sunrise, Footprints, Search, Camera];

  return (
    <section
      id="experiencia"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="experiencia-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('exp.subtitle')}
          </p>
          <h2
            id="experiencia-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4"
          >
            {t('exp.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('exp.intro')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCE_STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={step.step}
                className="text-center group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/20 transition-colors duration-200">
                  <Icon className="w-7 h-7 text-brand-green" aria-hidden="true" />
                </div>
                <div className="text-brand-green font-bold text-sm mb-2 tracking-widest">{step.step}</div>
                <h3 className="font-serif text-lg text-brand-dark mb-2">{t(`exp.step.${i}.title`)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`exp.step.${i}.desc`)}</p>
              </div>
            );
          })}
        </div>

        {/* Guide image banner */}
        <div className="mt-14 rounded-3xl overflow-hidden shadow-xl relative h-80 sm:h-96">
          <img
            src={ASSETS.GUIA}
            alt="Guía de avistamiento de aves con binoculares"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center">
            <div className="p-8 max-w-lg text-center">
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                {t('exp.guide.label')}
              </p>
              <p className="font-serif text-white text-xl sm:text-2xl leading-snug mb-3">
                {t('exp.guide.text')}
              </p>
              <p className="text-white/80 text-sm leading-relaxed italic">
                {t('exp.guide.subtext')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Species Gallery ──────────────────────────────────────────────────────────
function SpeciesGallery() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  return (
    <section
      id="especies"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="especies-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('species.subtitle')}
          </p>
          <h2
            id="especies-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4"
          >
            {t('species.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('species.description')}
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BIRD_SPECIES.map((bird, i) => (
            <div
              key={bird.name}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={bird.image}
                  alt={`${bird.name} en La Palma & El Tucán`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-serif text-lg">{bird.name}</p>
                </div>
              </div>
              {/* Always visible name on mobile */}
              <div className="bg-white p-3 md:hidden">
                <p className="text-brand-dark font-serif text-sm text-center">{bird.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional species text */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            {t('species.also')} <span className="text-brand-dark font-medium">{t('species.also.list')}</span>{t('species.also.suffix')}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Conservation Section ─────────────────────────────────────────────────────
function ConservationSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  const ICONS = [Sprout, Shield, Heart, Users, Globe];

  return (
    <section
      id="conservacion"
      ref={ref}
      className={`py-20 bg-brand-dark scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="conservacion-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">
              {t('conservation.subtitle')}
            </p>
            <h2
              id="conservacion-titulo"
              className="font-serif text-3xl sm:text-4xl text-white mb-5"
            >
              {t('conservation.h2')}
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              {t('conservation.desc')}
            </p>

            <ul className="space-y-4">
              {CONSERVATION_POINTS.map((_point, i) => {
                const Icon = ICONS[i];
                return (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-brand-green" aria-hidden="true" />
                    </span>
                    <span className="text-white/85 leading-relaxed pt-2">{t(`conservation.${i}`)}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={ASSETS.TANGARA_MULTI}
              alt="Tángara multicolor en bosque de niebla"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── More Experiences Section ─────────────────────────────────────────────────
function MoreExperiencesSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  return (
    <section
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="mas-experiencias-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('more.subtitle')}
          </p>
          <h2
            id="mas-experiencias-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4"
          >
            {t('more.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('more.description')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {COMPLEMENTARY_EXPERIENCES.map((exp, i) => (
            <article
              key={exp.title}
              className="bg-brand-light rounded-2xl p-6 text-center shadow-sm border border-brand-beige/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-3">{exp.emoji}</div>
              <h3 className="font-serif text-base text-brand-dark">{t(`more.${i}`)}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section (carousel) ──────────────────────────────────────────────
function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const REVIEWS = [
    { text: t('review.0.text'), author: t('review.0.author'), stars: 5, source: 'Booking' },
    { text: t('review.1.text'), author: t('review.1.author'), stars: 5, source: 'TripAdvisor' },
    { text: t('review.2.text'), author: t('review.2.author'), stars: 5, source: 'Booking' },
    { text: t('review.3.text'), author: t('review.3.author'), stars: 5, source: 'TripAdvisor' },
    { text: t('review.4.text'), author: t('review.4.author'), stars: 5, source: 'Booking' },
    { text: t('review.5.text'), author: t('review.5.author'), stars: 5, source: 'Booking' },
  ];

  const perPage = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3;
  const totalPages = Math.ceil(REVIEWS.length / perPage);

  const goTo = (p: number, pause = true) => {
    if (pause) setIsPaused(true);
    setPage(((p % totalPages) + totalPages) % totalPages);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => goTo(page + 1, false), 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [page, isPaused]);

  const visible = REVIEWS.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      ref={ref}
      className={`py-20 bg-brand-dark scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="resenas-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-3">
            {t('reviews.subtitle')}
          </p>
          <h2
            id="resenas-titulo"
            className="font-serif text-4xl sm:text-5xl text-white"
          >
            {t('reviews.title')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-white/50 text-sm">/ 5</span>
          </div>
        </div>

        <div className="relative flex items-center gap-4">
          <button
            onClick={() => goTo(page - 1)}
            aria-label="Reseñas anteriores"
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 shadow-sm flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6" aria-live="polite">
            {visible.map((review, i) => (
              <article
                key={`${page}-${i}`}
                className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              >
                <div className="flex gap-0.5">
                  {[...Array(review.stars)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>{review.author}</span>
                  <span className="font-medium text-brand-gold">{review.source}</span>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            aria-label="Siguientes reseñas"
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/5 shadow-sm flex items-center justify-center text-white/60 hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Página ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === page
                  ? 'w-6 h-2.5 bg-brand-gold'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-brand-gold/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FaqSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // FAQ items driven by i18n keys
  const FAQ_I18N_KEYS = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
    { q: 'faq.q6', a: 'faq.a6' },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="faq-titulo"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('faq.subtitle')}
          </p>
          <h2
            id="faq-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark"
          >
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_I18N_KEYS.map((keys, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={index} className="bg-white rounded-2xl shadow-sm border border-brand-beige/50 overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-light/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-brand-dark text-base pr-4">
                    {t(keys.q)}
                  </span>
                  <span className="flex-shrink-0 ml-auto text-brand-green">
                    {isOpen ? (
                      <ChevronUp size={20} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={20} aria-hidden="true" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-brand-beige/40 pt-4">
                    {t(keys.a)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Location Section ─────────────────────────────────────────────────────────
function LocationSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useI18n();

  return (
    <section
      id="ubicacion"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="ubicacion-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-green font-semibold tracking-widest uppercase text-sm mb-3">
            {t('location.subtitle')}
          </p>
          <h2
            id="ubicacion-titulo"
            className="font-serif text-3xl sm:text-4xl text-brand-dark"
          >
            {t('location.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-video md:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.3!2d-74.3878!3d4.7547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDUnMTcuMCJOIDc0wrAyMycxNi4xIlc!5e0!3m2!1ses!2sco!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación La Palma & El Tucán"
            />
          </div>

          {/* Directions */}
          <div className="bg-brand-dark rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl">
                {t('location.howto')}
              </h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 leading-tight">🚗</span>
                <span className="text-white/85 leading-relaxed">{t('location.item.0')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 leading-tight">🛣️</span>
                <span className="text-white/85 leading-relaxed">{t('location.item.1')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 leading-tight">🌤️</span>
                <span className="text-white/85 leading-relaxed">{t('location.item.2')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 leading-tight">🌿</span>
                <span className="text-white/85 leading-relaxed">{t('location.item.3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────────────────────
function CtaFinal() {
  const { ref, isVisible } = useScrollReveal();
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();
  const { t } = useI18n();

  return (
    <section
      id="reservar"
      ref={ref}
      className={`relative py-28 overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="cta-titulo"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.SUNSET}
          alt="Atardecer en La Palma & El Tucán"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-green/25 border border-brand-green/50 text-brand-gold px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          {t('cta.badge')}
        </div>

        <h2
          id="cta-titulo"
          className="font-serif text-4xl sm:text-5xl text-white mb-5"
        >
          {t('cta.title')}
        </h2>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {t('cta.subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            {t('cta.button')}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => trackEmailClick('cta_final')}
            className="w-full sm:w-auto flex items-center justify-center border-2 border-white/40 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            {t('cta.email')}
          </a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('cta_final')}
          className="text-white/60 hover:text-white text-sm underline underline-offset-4 transition-colors duration-200"
        >
          {t('cta.whatsapp')}
        </a>

        {/* Trust note */}
        <p className="text-white/50 text-sm">
          {t('cta.trust')}
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo variant="light" size="lg" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.enlaces')}
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => {
                const NAV_KEY_MAP: Record<string, string> = {
                  '#experiencia': 'nav.experiencia',
                  '#especies': 'nav.especies',
                  '#conservacion': 'nav.conservacion',
                  '#faq': 'nav.preguntas',
                };
                return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {t(NAV_KEY_MAP[link.href] ?? link.href)}
                  </a>
                </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t('footer.contacto')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer')}
                  className="flex items-center gap-2 text-white/50 hover:text-brand-green text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => trackEmailClick('footer')}
                  className="text-white/50 hover:text-brand-green text-sm transition-colors duration-200 break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-white/50 text-sm">
                  {t('footer.location')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} La Palma &amp; El Tucán. {t('footer.derechos')}
          </p>
          <p className="text-white/20 text-xs">
            Avistamiento de aves cerca de Bogotá · Birdwatching Colombia · Bosque de niebla
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  useAnalytics(true);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhySection />
        <ExperienceSection />
        <SpeciesGallery />
        <ConservationSection />
        <MoreExperiencesSection />
        <ReviewsSection />
        <FaqSection />
        <LocationSection />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
