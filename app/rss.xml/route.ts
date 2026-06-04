import {NextResponse} from 'next/server';
import {siteUrl} from '@/lib/seo';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Ready to Dev</title>
        <description>Ready to Dev</description>
        <link>${siteUrl}</link>
      </channel>
    </rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
