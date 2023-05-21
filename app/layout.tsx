import Link from 'next/link';
import './globals.css';
import Header from '@/app/components/Header';
import Script from 'next/script';

{
  /* <meta
name='description'
content='地震地圖。結合地震API和Leaflet、OpenStreet Map，圖像化全世界的地震，調整日期與震度客製化你想要的地震資料。'
/>
<meta name='theme-color' content='#4d4d4d' />
<meta name='keywords' content='地震、地圖、圖像化' /> */
}

export const metadata = {
  title: 'MapQuake 地震地圖 | 圖像化世界的地震',
  description:
    '地震地圖。結合地震API和Leaflet、OpenStreet Map，圖像化全世界的地震，調整日期與震度客製化你想要的地震資料。',
  keywords: '地震、地圖、圖像化',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh-TW'>
      <head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
          crossOrigin=''
        />
        <Script
          src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
          integrity='sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
          crossOrigin=''
        ></Script>
      </head>
      <body className='flex min-h-[100svh] flex-col'>
        <Header />
        {children}
      </body>
    </html>
  );
}
