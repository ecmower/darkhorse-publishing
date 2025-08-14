import "server-only";

export const token = process.env.SANITY_API_READ_TOKEN;

// Only throw error in production if token is missing
if (!token && process.env.NODE_ENV === "production") {
  console.warn("Missing SANITY_API_READ_TOKEN - some features may not work properly");
}
