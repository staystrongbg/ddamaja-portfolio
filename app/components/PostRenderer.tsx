'use client';

import { Post } from '../@types';
import { usePostContext } from '../context/postContext';
import BlogPostCard from './common/BlogPostCard';
export default function PostRenderer({ posts }: { posts: Post[] }) {
  const { searchResults } = usePostContext();

  return (
    <>
      {posts &&
        !searchResults &&
        posts.map((post, idx) => <BlogPostCard key={idx} post={post} />)}
      {searchResults &&
        searchResults.map((post, idx) => (
          <BlogPostCard key={idx} post={post} />
        ))}
    </>
  );
}
