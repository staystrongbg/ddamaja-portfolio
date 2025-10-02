"use client";

import { usePostContext } from "../../context/postContext";
import { postsApi } from "@/app/lib/api";

type TagProps = {
  tag: string;
  children?: React.ReactNode;
};

export default function Tag({ tag }: TagProps) {
  const { setSearchResults } = usePostContext();
  console.log("tag", tag);
  const filterByTag = async (tag: string) => {
    if (tag === "all") {
      const results = await postsApi.getAllPosts();
      setSearchResults(results);
      return;
    }
    const results = await postsApi.getPostByTag(tag);
    setSearchResults(results);
  };

  return (
    <div
      className="text-gray-600 bg-white dark:bg-gray-900 border w-fit px-2 mb-4 border-purple-800 rounded-sm cursor-pointer"
      onClick={() => filterByTag(tag)}
    >
      {tag}
    </div>
  );
}
