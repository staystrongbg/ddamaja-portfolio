//ISR
// export const revalidate = 60;

import Search from "../components/Search";
import PostRenderer from "../components/PostRenderer";
import Tag from "../components/common/Tag";
import { Metadata } from "next";
import { postsApi } from "../lib/api";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await postsApi.getAllPosts();

  if (!posts) {
    return {
      title: "Blog",
      description: "Blog",
    };
  }

  return {
    title: "Blog",
    description: "Blog",
    openGraph: {
      title: "Blog",
      description: "Blog",
      images: [
        {
          url: posts[0].image,
          alt: posts[0].title,
        },
      ],
    },
  };
}

export default async function Blog() {
  const posts = await postsApi.getAllPosts();

  if (!posts) {
    return <div>No posts found</div>;
  }

  const flatenedArray = posts.flatMap((post) => post.tags);
  const uniqueTags = [...new Set(flatenedArray), "all"];
  return (
    <div className="my-20 w-[90%] m-auto">
      {/* Search at the top */}
      <div className="mb-8">
        <Search />
      </div>

      <div className="flex lg:flex-row flex-col gap-4">
        <div className="lg:w-[20%] w-full justify-center flex flex-wrap h-fit gap-2 pt-20 relative">
          <h3 className="text-3xl font-bold absolute top-2 left-2 w-full">
            TOPICS
          </h3>
          {posts && uniqueTags.map((tag, idx) => <Tag key={idx} tag={tag} />)}
        </div>

        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-8 relative pt-20 place-items-center">
          <PostRenderer initialPosts={posts} />
        </div>
      </div>
    </div>
  );
}
