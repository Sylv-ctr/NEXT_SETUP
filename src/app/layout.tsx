'use client'
import Link from 'next/link';
import './global.scss';
import Header from './components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
          {children}
      </body>
    </html>
  );
}
