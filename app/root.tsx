import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { LinksFunction, MetaFunction } from 'remix';
import tailwind from './tailwind.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const links: LinksFunction = () => [
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Code+Pro:400,700',
  },
  { rel: 'stylesheet', href: tailwind },
];

export const meta: MetaFunction = () => {
  return { title: 'Scott Schmalz - Full Stack Engineer' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col bg-white text-gray">
        <Header />
        <main className="flex-grow flex flex-col">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
