import {ArrowRight, BrainCircuit, CandlestickChart, Cloud, CreditCard, Landmark, Smartphone} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

const expertiseIcons = {
  banking: Landmark,
  trading: CandlestickChart,
  fintech: CreditCard,
  mobile: Smartphone,
  cloud: Cloud,
  ai: BrainCircuit
};

export async function ExpertiseSection({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'home.expertise'});
  const items = t.raw('items') as Array<{key: keyof typeof expertiseIcons; title: string; body: string}>;

  return (
    <section className="section section-split" id="expertise">
      <div className="container split-grid">
        <div className="section-intro">
          <p className="section-label">{t('label')}</p>
          <h2>{t('headline')}</h2>
        </div>

        <div className="list-stack">
          {items.map((item) => {
            const Icon = expertiseIcons[item.key];

            return (
              <article key={item.title} className="list-row">
                <span className="list-icon">
                  <Icon aria-hidden="true" size={28} strokeWidth={1.5} />
                </span>
                <div className="list-main">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <span className="list-arrow" aria-hidden="true">
                  <ArrowRight size={18} strokeWidth={1.7} />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
