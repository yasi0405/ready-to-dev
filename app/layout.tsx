import type {Metadata} from 'next';
import '@fontsource/plus-jakarta-sans/300.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://readytodev.be'),
  title: 'Ready to Dev',
  description: 'Premium engineering for banking, fintech and ambitious digital products.'
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
