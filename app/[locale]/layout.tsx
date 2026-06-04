import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';
import {routing} from '@/i18n/routing';
import {buildAlternates, getBaseMetadata} from '@/lib/seo';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  return {
    ...getBaseMetadata(locale),
    alternates: buildAlternates(locale, '')
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="site-shell">
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
