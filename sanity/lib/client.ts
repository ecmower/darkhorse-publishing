import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
  stega: {
    studioUrl: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") + "/studio",
  },
  // Enable real-time updates
  token: process.env.SANITY_API_READ_TOKEN,
});
