import { Joke } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

// type LoaderData = { joke: { id: string; name: string } | null};

type LoaderData = { joke: Joke };

export const loader: LoaderFunction = async ({params}) => {
    console.log('Params', params, params.jokeId);
    const joke = await db.joke.findUnique({
        where: { id: params.jokesId },
      })
    
    if (!joke) throw new Error("Joke not found");
    const data: LoaderData = {joke: joke}
    return json(data ?? null);
  };




export default function JokeRoute() {
    const data = useLoaderData<LoaderData>();
    

    return (
      <div>
        <p>Here's your hilarious joke:</p>
        <h2>
         {data.joke?.name}
        </h2>

        <p>
         {data.joke?.content}
        </p>
      </div>
    );
  }