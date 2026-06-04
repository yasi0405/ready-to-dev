import {Link} from '@/i18n/navigation';
import type {BlogPostMeta} from '@/lib/blog';

export function BlogCard({post, readLabel}: {post: BlogPostMeta; readLabel: string}) {
  return (
    <article className="blog-card">
      <div
        className="blog-card-cover"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5,11,18,0.3), rgba(5,11,18,0.7)), url(${post.cover})`
        }}
      />
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span>{post.formattedDate}</span>
          <span>{post.categoryLabel}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link className="eyebrow-link" href={`/blog/${post.slug}`} locale={post.locale}>
          {readLabel}
        </Link>
      </div>
    </article>
  );
}
