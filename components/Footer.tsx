import {ArrowRight, ArrowUpRight, FolderGit2, Mail} from 'lucide-react';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export async function Footer({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'footer'});

  const columns = [
    {title: t('expertise'), items: t.raw('expertiseItems') as string[]},
    {title: t('services'), items: t.raw('servicesItems') as string[]},
    {title: t('about'), items: t.raw('aboutItems') as string[]},
    {title: t('resources'), items: [t('blog'), t('articles'), t('contact')]}
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/logo.png" alt="Ready to Dev" width={360} height={104} />
          <p>{t('tagline')}</p>
          <a className="footer-email" href="mailto:yannick.simon@readytodev.be">
            yannick.simon@readytodev.be
            <ArrowRight aria-hidden="true" size={14} />
          </a>
          <small>{t('copyright')}</small>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3>{t('follow')}</h3>
          <div className="socials" aria-label="social links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FolderGit2 size={18} strokeWidth={1.8} />
            </a>
            <a href="mailto:yannick.simon@readytodev.be" aria-label="Email">
              <Mail size={18} strokeWidth={1.8} />
            </a>
          </div>
          <div className="footer-legal">
            <Link href="/blog" locale={locale}>
              {t('blog')}
            </Link>
            <Link href="/" locale={locale}>
              {t('legal')}
            </Link>
            <Link href="/" locale={locale}>
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
