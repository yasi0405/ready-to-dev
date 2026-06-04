import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {BlogList} from '@/components/BlogList';
import {getBlogPosts} from '@/lib/blog';
import {buildAlternates, getBaseMetadata} from '@/lib/seo';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'blogPage'});

  return {
    ...getBaseMetadata(locale),
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, '/blog')
  };
}

export default async function BlogPage({params}: Props) {
  const {locale} = await params;
  const posts = await getBlogPosts(locale);

  return <BlogList locale={locale} posts={posts} />;
}
