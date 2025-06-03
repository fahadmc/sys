// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'SYS-pattambi',
//   description: 'Created with v0',
//   generator: 'v0.dev',
//    icons: {
//     icon: '/favicon.ico', 
//      apple: "/favicon.ico",
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }


import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SYS-pattambi',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.png", 
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
