import { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";

import stylesUrl from './styles/global.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet', href: stylesUrl
    }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links/>
      </head>
      <body>
        Hello world
        <Outlet />
        <LiveReload />
        End
      </body>
    </html>
  );
}