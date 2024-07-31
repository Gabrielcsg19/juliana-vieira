import type { Metadata } from 'next';
import { Providers } from './providers';
import { fonts } from './fonts';

export const metadata: Metadata = {
  title: 'Juliana Vieira',
  description: 'Perita Judicial Trabalhista',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={fonts.roboto.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
