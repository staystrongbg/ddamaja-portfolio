"use client";

import { useCallback } from "react";
import { usePostContext } from "../../context/postContext";
import { postsApi } from "@/app/lib/api";
import { Post } from "@/app/@types";

type TagProps = {
  tag: string;
  children?: React.ReactNode;
};

export default function Tag({ tag }: TagProps) {
  const { setSearchResults, searchResults } = usePostContext();

  const filterByTag = useCallback(
    async (tag: string) => {
      try {
        let results: Post[];
        if (tag === "all") {
          results = await postsApi.getAllPosts();
        } else {
          results = await postsApi.getPostByTag(tag);
        }
        setSearchResults(results);
      } catch (error) {
        console.error("Error filtering posts by tag:", error);
        setSearchResults([]);
      }
    },
    [searchResults]
  );

  return (
    <div
      className="text-gray-600 bg-white dark:bg-gray-900 border w-fit px-2 mb-4 border-purple-800 rounded-sm cursor-pointer"
      onClick={() => filterByTag(tag)}
    >
      {tag}
    </div>
  );
}
