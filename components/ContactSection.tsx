import Image from 'next/image';
import {ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export async function ContactSection({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'home.contact'});

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="section-label">{t('label')}</p>
            <h2>{t('headline')}</h2>
            <p>{t('body')}</p>
            <a className="button button-accent" href="mailto:yannick.simon@readytodev.be">
              {t('cta')}
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="contact-dots" aria-hidden="true" />
          <div className="contact-visual" aria-hidden="true">
            <Image
              src="/lx_3n1gm4-modern-9246082.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className="contact-image"
            />
            <div className="contact-image-tint" />
          </div>
        </div>
      </div>
    </section>
  );
}
