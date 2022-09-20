import { Joke } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";


export default function BlogRoute () {
    // const data = useLoaderData<LoaderData>();

    return <div>
    <p>Here's the blog</p>
    <h2>
    </h2>

    <p>
    </p>
  </div>
}