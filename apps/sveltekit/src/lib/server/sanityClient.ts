import { createClient } from "@sanity/client";

import {
  PUBLIC_SANITY_API_DATASET,
  PUBLIC_SANITY_API_PROJECT_ID,
  PUBLIC_SANITY_API_TOKEN,
  PUBLIC_SANITY_API_VERSION,
} from "$env/static/public";

export const client = createClient({
  projectId: PUBLIC_SANITY_API_PROJECT_ID,
  token: PUBLIC_SANITY_API_TOKEN,
  dataset: PUBLIC_SANITY_API_DATASET,
  apiVersion: PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});
