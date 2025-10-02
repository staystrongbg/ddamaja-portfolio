import { client } from "@/sanity/lib/client";
import { Post } from "../@types";

export const postsApi = {
  getAllPosts: async () => {
    try {
      const posts = await client.fetch<Post[]>(`*[_type == "post"]{
              "id": slug.current,
              "image": image.asset->url,
              "title": title,
              "text": text,
              "shortText": shortDescription,
              "createdAt": _createdAt,
              "tags": tags[]->tag
            }`);

      return posts;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getPostBySlug: async (slug: string) => {
    try {
      const [post] = await client.fetch<Post[]>(
        `*[_type == "post" && slug.current == "${slug}"]{
                "id": slug,
                "image": image.asset->url,
                "title": title,
                "createdAt": _createdAt,
                "text": text,
                "tags": tags[]->tag,
                "shortText": shortText
              }`
      );
      return post;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getPostByTag: async (tag: string) => {
    try {
      const results = await client.fetch<
        Post[]
      >(`*[_type == "post" && tags[]->tag match "${tag}*"]{
              "id": slug.current,
              "image": image.asset->url,
              "title": title,
              "text": text,
              "createdAt": _createdAt,
              "tags": tags[]->tag
              }`);

      return results;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getPostBySearch: async (term: string) => {
    try {
      const results = await client.fetch<
        Post[]
      >(`*[_type == "post" && title match "${term}*" || tags[]->tag match "${term}*"]{
            "id": slug.current,
            "image": image.asset->url,
            "title": title,
            "text": text,
            "createdAt": _createdAt,
            "tags": tags[]->tag
            }`);

      return results;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};
