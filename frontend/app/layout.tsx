import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Golf Commerce | Storefront Foundation',
  description: 'Golf commerce platform — engineering foundation preview.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
