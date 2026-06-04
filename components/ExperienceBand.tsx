import {getTranslations} from 'next-intl/server';

export async function ExperienceBand({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'home.experience'});
  const tags = t.raw('tags') as string[];

  return (
    <section className="experience-band" id="experience">
      <div className="container experience-grid">
        <div>
          <p className="section-label">{t('label')}</p>
          <h2>
            15+<br />{t('years')}
          </h2>
        </div>
        <div className="experience-statement">
          <h3>{t('headline').replace('.', '')}</h3>
        </div>
        <div className="experience-copy">
          <p>{t('body')}</p>
        </div>
        <div className="experience-side">
          <div className="experience-tags">
            {tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
