import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint("ignewssn");

export function getPrismicClient() {
  const prismicClient = prismic.createClient(endpoint, {
    accessToken: process.env.PRIMISCIO_KEY,
  });
  prismicClient.enableAutoPreviews();
  return prismicClient;
}