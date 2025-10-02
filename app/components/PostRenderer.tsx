"use client";

import { Post } from "../@types";
import { usePostContext } from "../context/postContext";
import BlogPostCard from "./common/BlogPostCard";
export default function PostRenderer({
  initialPosts,
}: {
  initialPosts: Post[];
}) {
  const { searchResults } = usePostContext();
  console.log(searchResults);
  return (
    <>
      {searchResults
        ? searchResults.map((searchPost, idx) => (
            <BlogPostCard key={idx} post={searchPost} />
          ))
        : initialPosts.map((initialPost, idx) => (
            <BlogPostCard key={idx} post={initialPost} />
          ))}
    </>
  );
}
