import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

const categoryLabels = {
  fr: {
    architecture: 'Architecture',
    fintech: 'Fintech',
    engineering: 'Engineering',
    product: 'Produit',
    security: 'Securite'
  },
  en: {
    architecture: 'Architecture',
    fintech: 'Fintech',
    engineering: 'Engineering',
    product: 'Product',
    security: 'Security'
  }
} as const;

export type BlogCategory = keyof (typeof categoryLabels)['fr'];

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  category: BlogCategory;
  excerpt: string;
  cover: string;
  locale: 'fr' | 'en';
  readingTime?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  formattedDate: string;
  categoryLabel: string;
  content: string;
};

function getLocaleDir(locale: string) {
  return path.join(BLOG_DIR, locale);
}

function formatDate(locale: string, date: string) {
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(date));
}

function parsePost(filePath: string, locale: string): BlogPostMeta {
  const source = fs.readFileSync(filePath, 'utf8');
  const {data, content} = matter(source);
  const frontmatter = data as BlogFrontmatter;
  const stats = readingTime(content);

  return {
    ...frontmatter,
    content,
    locale: locale as 'fr' | 'en',
    readingTime: frontmatter.readingTime ?? stats.text,
    formattedDate: formatDate(locale, frontmatter.date),
    categoryLabel: categoryLabels[locale as 'fr' | 'en'][frontmatter.category]
  };
}

export async function getBlogPosts(locale: string) {
  const dir = getLocaleDir(locale);
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));

  return files
    .map((file) => parsePost(path.join(dir, file), locale))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getBlogPostBySlug(locale: string, slug: string) {
  const posts = await getBlogPosts(locale);
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getBlogPostBySlugSync(locale: string, slug: string) {
  const dir = getLocaleDir(locale);
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
  const match = files.find((file) => file.includes(slug));

  return match ? parsePost(path.join(dir, match), locale) : null;
}

export function getAllBlogSlugs() {
  return ['fr', 'en'].flatMap((locale) => {
    const dir = getLocaleDir(locale);
    const files = fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));

    return files.map((file) => {
      const post = parsePost(path.join(dir, file), locale);
      return {locale, slug: post.slug};
    });
  });
}
