'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {BlogCard} from '@/components/BlogCard';
import {Link} from '@/i18n/navigation';
import type {BlogPostMeta} from '@/lib/blog';

const categories = ['all', 'architecture', 'fintech', 'engineering', 'product', 'security'] as const;

export function BlogList({locale, posts}: {locale: string; posts: BlogPostMeta[]}) {
  const t = useTranslations('blogPage');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('all');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = category === 'all' || post.category === category;
    const haystack = `${post.title} ${post.excerpt}`.toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featured = filteredPosts[0] ?? posts[0];
  const remaining = filteredPosts.slice(featured ? 1 : 0);

  return (
    <section className="section blog-page">
      <div className="container blog-hero">
        <div>
          <p className="section-label">{t('label')}</p>
          <h1>{t('headline')}</h1>
        </div>
        <p className="blog-hero-copy">{t('body')}</p>
      </div>

      <div className="container blog-toolbar">
        <div className="category-tabs">
          {categories.map((item) => (
            <button
              key={item}
              className={item === category ? 'is-active' : ''}
              onClick={() => setCategory(item)}
              type="button"
            >
              {t(`categories.${item}`)}
            </button>
          ))}
        </div>
        <label className="search-field">
          <input
            aria-label={t('search')}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('search')}
            value={query}
          />
          <span>⌕</span>
        </label>
      </div>

      {featured ? (
        <div className="container featured-post">
          <div
            className="featured-media"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(5,11,18,0.1), rgba(5,11,18,0.85)), url(${featured.cover})`
            }}
          />
          <div className="featured-copy">
            <p className="section-label">{t('featured')}</p>
            <div className="blog-card-meta">
              <span>{featured.formattedDate}</span>
              <span>{featured.categoryLabel}</span>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <Link className="eyebrow-link" href={`/blog/${featured.slug}`} locale={locale}>
              {t('read')}
            </Link>
          </div>
        </div>
      ) : null}

      <div className="container blog-grid">
        {remaining.map((post) => (
          <BlogCard key={post.slug} post={post} readLabel={t('read')} />
        ))}
      </div>

      <div className="container newsletter-strip">
        <div>
          <p className="section-label">{t('newsletterLabel')}</p>
          <h2>{t('newsletterHeadline')}</h2>
        </div>
        <form className="newsletter-form">
          <input placeholder={t('newsletterPlaceholder')} type="email" />
          <button className="button button-accent" type="submit">
            {t('newsletterCta')}
          </button>
        </form>
      </div>
    </section>
  );
}
