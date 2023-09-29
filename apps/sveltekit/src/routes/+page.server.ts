import type { PageServerLoad } from "./$types";
import groq from "groq";
import { client } from "$lib/server/sanityClient";

async function fetch() {
  const query =
    groq`*[_type == "kongsbergPoliceTrial" && !(_id in path('drafts.**'))]{
    ...,
  }`;

  const data = await client.fetch(query);

  return data;
}

const data = await fetch();
console.log(data);

export const load: PageServerLoad = async () => {
  return { people: data };
};
