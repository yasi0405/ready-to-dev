import {CheckCircle, Gauge, ShieldCheck, Users} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

const icons = [ShieldCheck, Gauge, CheckCircle, Users];

export async function ValueIcons({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'home.values'});
  const items = t.raw('items') as Array<{title: string; body: string}>;

  return (
    <section className="value-strip">
      <div className="container value-grid">
        {items.map((item, index) => (
          <article key={item.title} className="value-item">
            {(() => {
              const Icon = icons[index];
              return <Icon aria-hidden="true" size={30} strokeWidth={1.5} />;
            })()}
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
