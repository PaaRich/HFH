import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
//import { client } from "../client"; // Ensure this path is correct

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
