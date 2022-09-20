import { Joke } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

type LoaderData = { joke: Joke };

export const loader: LoaderFunction = async ({params}) => {
    const count = await db.joke.count();
    const randomRowNumber = Math.floor(Math.random() * count);

    const [randomJoke] = await db.joke.findMany({
      take: 1,
      skip: randomRowNumber,
    });

    const data: LoaderData = {joke: randomJoke}
    return json(data ?? null);

    
  };


export default function JokesRoute () {
    const data = useLoaderData<LoaderData>();

    return <div>
    <p>Here's a random joke:</p>
    <h2>
     {data.joke?.name}
    </h2>

    <p>
     {data.joke?.content}
    </p>
  </div>
}