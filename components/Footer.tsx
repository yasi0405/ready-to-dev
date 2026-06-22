'use client';

import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {useState} from 'react';
import {LegalDialog, type LegalDialogKind} from '@/components/LegalDialog';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [openDialog, setOpenDialog] = useState<LegalDialogKind | null>(null);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/logo.png" alt="Ready to Dev" width={838} height={214} />
          <p>{t('tagline')}</p>
          <a className="footer-email" href="mailto:yannick.simon@readytodev.be">
            yannick.simon@readytodev.be
          </a>
          <div>
            <a href="tel:+32477971161" className="footer-email">
              +32 477 97 11 61
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>{t('copyright')}</small>
        <div>
          <button type="button" className="footer-link-button" onClick={() => setOpenDialog('legal')}>
            {t('legal')}
          </button>
          <button type="button" className="footer-link-button" onClick={() => setOpenDialog('privacy')}>
            {t('privacy')}
          </button>
        </div>
      </div>
      <LegalDialog kind={openDialog} locale={locale} onClose={() => setOpenDialog(null)} />
    </footer>
  );
}
