import {ArrowUpRight, FolderGit2, Mail} from 'lucide-react';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';

export async function Footer({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'footer'});
  const columns = [
  ];

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
          <a href="#">{t('legal')}</a>
          <a href="#">{t('privacy')}</a>
        </div>
      </div>
    </footer>
  );
}
