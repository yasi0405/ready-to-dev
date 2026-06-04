import {ArrowRight} from 'lucide-react';
import {getLocale, getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export default async function NotFoundPage() {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: 'notFound'});

  return (
    <section className="not-found-page">
      <div className="container not-found-card">
        <p className="section-label">{t('label')}</p>
        <h1>{t('title')}</h1>
        <p>{t('body')}</p>
        <div className="not-found-actions">
          <Link className="button button-accent" href="/" locale={locale}>
            {t('home')}
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
