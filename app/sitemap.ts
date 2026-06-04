import type {MetadataRoute} from 'next';
import {getAllBlogSlugs, getBlogPostBySlugSync} from '@/lib/blog';
import {routing} from '@/i18n/routing';
import {siteUrl} from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/blog'];
  const pages = routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date()
    }))
  );

  const articles = getAllBlogSlugs().map(({locale, slug}) => {
    const post = getBlogPostBySlugSync(locale, slug);
    return {
      url: `${siteUrl}/${locale}/blog/${slug}`,
      lastModified: post?.date ? new Date(post.date) : new Date()
    };
  });

  return [...pages, ...articles];
}
