import {NextResponse} from 'next/server';
import {getBlogPosts} from '@/lib/blog';
import {siteUrl} from '@/lib/seo';

export async function GET() {
  const locales = ['fr', 'en'] as const;
  const posts = (await Promise.all(locales.map((locale) => getBlogPosts(locale)))).flat();

  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <description><![CDATA[${post.excerpt}]]></description>
          <link>${siteUrl}/${post.locale}/blog/${post.slug}</link>
          <guid>${siteUrl}/${post.locale}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Ready to Dev</title>
        <description>Editorial notes on banking, fintech and critical product engineering.</description>
        <link>${siteUrl}</link>
        ${items}
      </channel>
    </rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
