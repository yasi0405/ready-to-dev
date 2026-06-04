import {notFound} from 'next/navigation';

type Props = {
  params: Promise<{locale: string; slug: string}>;
};

export async function generateStaticParams() {
  return [];
}

export default async function BlogArticlePage({params}: Props) {
  await params;
  notFound();
}
