import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

// Only include token if it's available
const clientConfig: any = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
  stega: {
    studioUrl: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") + "/studio",
  },
};

// Only add token if it exists
if (process.env.SANITY_API_READ_TOKEN) {
  clientConfig.token = process.env.SANITY_API_READ_TOKEN;
}

export const client = createClient(clientConfig);
