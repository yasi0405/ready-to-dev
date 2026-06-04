import {ArrowRight} from 'lucide-react';
import Link from 'next/link';

export default function RootNotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="container not-found-card">
        <p className="section-label">404</p>
        <h1>Page not found.</h1>
        <p>The page you requested does not exist.</p>
        <Link className="button button-accent" href="/en">
          Back to home
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}
