import {ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export async function ContactSection({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'home.contact'});

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="section-label">{t('label')}</p>
          <h2>{t('headline')}</h2>
          <p>{t('body')}</p>
          <a className="button button-accent" href="mailto:yannick.simon@readytodev.be">
            {t('cta')}
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
        <div className="contact-visual" aria-hidden="true">
          <div className="contact-dots" />
          <div className="contact-glow" />
          <div className="contact-panel">
            <div className="contact-panel-roof" />
            <div className="contact-panel-facade">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
