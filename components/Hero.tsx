import {ArrowDown, ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export async function Hero({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'home.hero'});

  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-title-block">
          <p className="hero-kicker">{t('kicker')}</p>
          <h1>
            {t('lineOne')}
            <br />
            {t('lineTwo')}
            <br />
            {t('lineThree').replace('.', '')}
          </h1>
        </div>

        <div className="hero-copy">
          <div className="hero-copy-inner">
            <h2>{t('headline')}</h2>
            <p>{t('body')}</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#contact">
                {t('primary')}
                <ArrowRight aria-hidden="true" size={16} />
              </a>
              <a className="button button-minimal" href="#expertise">
                {t('secondary')}
                <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container hero-scroll">
        <a className="scroll-indicator" href="#expertise">
          <span>{t('scroll')}</span>
          <ArrowDown aria-hidden="true" size={16} />
        </a>
      </div>
    </section>
  );
}
