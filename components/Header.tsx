'use client';

import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {LanguageSwitcher} from '@/components/LanguageSwitcher';

const homeAnchors = ['expertise', 'experience', 'services', 'contact'] as const;

export function Header({locale}: {locale: string}) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const isBlog = pathname.includes('/blog');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link className="wordmark" href="/" locale={locale}>
          <Image src="/logo_dark.png" alt="Ready to Dev" width={843} height={194} />
        </Link>

        <nav className="header-nav" aria-label="Primary">
          {homeAnchors.map((anchor) => (
            <a key={anchor} href={isBlog ? `/${locale}/#${anchor}` : `#${anchor}`}>
              <span className="nav-index">{t(`${anchor}Index`)}</span>
              {t(anchor)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <a className="button button-accent" href={isBlog ? `/${locale}/#contact` : '#contact'}>
            {t('cta')}
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
