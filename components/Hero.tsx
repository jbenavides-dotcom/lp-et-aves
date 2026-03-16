import { ChevronDown } from 'lucide-react';
import { ASSETS, CLOUDBEDS_URL } from '../constants';
import { useI18n } from '../i18n';

const TRUST_CHIP_KEYS = [
  'hero.chip.bosque',
  'hero.chip.especies',
  'hero.chip.guias',
];

export default function Hero() {
  const { t } = useI18n();

  const handleScrollDown = () => {
    const next = document.querySelector('#por-que');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Inicio — Avistamiento de Aves La Palma & El Tucán"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.TUCANETA}
          alt="Tucaneta en el bosque de niebla"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 bg-brand-green/25 border border-brand-green/50 text-brand-gold px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          {t('hero.badge')}
        </div>

        {/* H1 */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
          {t('hero.title.pre')}{' '}
          <span className="text-brand-gold italic">{t('hero.title.highlight')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* Description */}
        <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TRUST_CHIP_KEYS.map((key) => (
            <span
              key={key}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium"
            >
              <svg
                className="w-3.5 h-3.5 text-brand-gold flex-shrink-0"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7L5.5 10.5L12 3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t(key)}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-pink text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 text-center"
          >
            {t('hero.cta.reservar')}
          </a>
          <a
            href="#especies"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#especies');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center border-2 border-white/40 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            {t('hero.cta.especies')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
