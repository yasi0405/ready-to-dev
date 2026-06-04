import {notFound} from 'next/navigation';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function BlogPage({params}: Props) {
  await params;
  notFound();
}
