import {ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export async function ServicesSection({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'home.services'});
  const items = t.raw('items') as Array<{title: string; body: string}>;

  return (
    <section className="section section-services" id="services">
      <div className="container services-grid">
        <div className="section-intro">
          <p className="section-label">{t('label')}</p>
          <h2>{t('headline')}</h2>
          <p>{t('body')}</p>
        </div>

        <div className="service-list">
          {items.map((item, index) => (
            <article key={item.title} className="service-row">
              <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="service-copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">
                <ArrowRight size={18} strokeWidth={1.7} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
