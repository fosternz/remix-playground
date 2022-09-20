import { json, LinksFunction, LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import stylesUrl from '../styles/jokes.css';

import { db } from "~/utils/db.server";
import { Joke } from "@prisma/client";


export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet', href: stylesUrl
    }
  ]
}

export default function BlogRoute() {

    return (
        <div className="jokes-layout">
          <header className="jokes-header">
            <div className="container">
              <h1 className="home-link">
                <Link
                  to="/"
                  title="Remix Jokes"
                  aria-label="Remix Jokes"
                >
                  <span className="logo">🤪</span>
                  <span className="logo-medium">J🤪KES</span>
                </Link>
              </h1>
            </div>
          </header>
          <main className="jokes-main">
            <div className="container">
              <div className="jokes-list">
                <h1>Blog</h1>
                <p>Here are a few more jokes to check out:</p>
                <ul>
                  {/* {data.jokes.map((joke) => (
                    <li key={joke.id}>
                      <Link to={joke.id}>{joke.name}</Link>
                    </li>
                  ))} */}
                </ul>
                <Link to="new" className="button">
                  Add your own
                </Link>
              </div>
              <div className="jokes-outlet">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      );
}

