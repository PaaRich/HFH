import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "5ca7eawu",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

export default client;
