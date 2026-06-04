import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {getAllBlogSlugs, getBlogPostBySlug} from '@/lib/blog';
import {renderMDX} from '@/lib/mdx';
import {buildAlternates, getBaseMetadata} from '@/lib/seo';

type Props = {
  params: Promise<{locale: string; slug: string}>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const post = await getBlogPostBySlug(locale, slug);

  if (!post) {
    return {};
  }

  return {
    ...getBaseMetadata(locale),
    title: post.title,
    description: post.excerpt,
    alternates: buildAlternates(locale, `/blog/${slug}`),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale,
      url: `/${locale}/blog/${slug}`,
      publishedTime: post.date,
      images: [{url: post.cover, alt: post.title}]
    }
  };
}

export default async function BlogArticlePage({params}: Props) {
  const {locale, slug} = await params;
  const t = await getTranslations({locale, namespace: 'blogArticle'});
  const post = await getBlogPostBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  const content = await renderMDX(post.content);

  return (
    <article className="article-page">
      <div className="container article-intro">
        <Link className="eyebrow-link" href="/blog" locale={locale}>
          {t('back')}
        </Link>
        <div className="article-meta">
          <span>{post.formattedDate}</span>
          <span>{post.categoryLabel}</span>
          <span>{post.readingTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p className="article-excerpt">{post.excerpt}</p>
      </div>
      <div
        className="article-cover"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5,11,18,0.92), rgba(0,183,232,0.2)), url(${post.cover})`
        }}
      />
      <div className="container article-body">{content}</div>
    </article>
  );
}
