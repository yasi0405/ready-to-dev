import type {Metadata} from 'next';

export const siteUrl = 'https://readytodev.be';

export function buildAlternates(locale: string, path: string) {
  const normalizedPath = path ? `/${locale}${path}` : `/${locale}`;

  return {
    canonical: normalizedPath,
    languages: {
      fr: `/fr${path}`,
      en: `/en${path}`
    }
  };
}

export function getBaseMetadata(locale: string): Metadata {
  const title =
    locale === 'fr'
      ? 'Ready to Dev | Produits digitaux et plateformes critiques'
      : 'Ready to Dev | Digital products and critical platforms';
  const description =
    locale === 'fr'
      ? 'Engineering premium pour la banque, la fintech et les produits digitaux ambitieux.'
      : 'Premium engineering for banking, fintech and ambitious digital products.';

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [
      'banking engineering',
      'fintech engineering',
      'critical platforms',
      'product studio',
      'software architecture',
      'AI integration'
    ],
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: 'Ready to Dev',
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
