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
  return (
    <>
      {searchResults
        ? searchResults.map((post, idx) => (
            <BlogPostCard key={idx} post={post} />
          ))
        : initialPosts.map((initPost, idx) => (
            <BlogPostCard key={idx} post={initPost} />
          ))}
    </>
  );
}
