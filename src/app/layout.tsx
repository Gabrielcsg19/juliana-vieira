import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import { fonts } from './fonts';

export const metadata: Metadata = {
  title: 'Juliana Vieira',
  description: 'Perita Judicial Trabalhista',
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={fonts.roboto.variable}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
