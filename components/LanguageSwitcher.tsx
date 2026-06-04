'use client';

import {useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <div className="language-switcher" aria-label="Language switcher">
      {['fr', 'en'].map((nextLocale) => (
        <Link
          key={nextLocale}
          className={activeLocale === nextLocale ? 'is-active' : ''}
          href={pathname}
          locale={nextLocale}
        >
          {nextLocale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
