//ISR
// export const revalidate = 60;

import { getAllPosts } from "../lib/getPostsss";
import Search from "../components/Search";
import PostRenderer from "../components/PostRenderer";
import Tag from "../components/common/Tag";

export default async function Blog() {
  const posts = await getAllPosts(`*[_type == "post"]{
    "id": slug.current,
    "image": image.asset->url,
    "title": title,
    "text": text,
    "shortText": shortDescription,
    "createdAt": _createdAt,
    "tags": tags[]->tag
  }`);

  if (!posts) {
    throw new Error("No posts");
  }

  const flatenedArray = posts.flatMap((post) => post.tags); //posts objects with tags[]
  const uniqueTags = [...new Set(flatenedArray)];
  return (
    <div className="my-20 flex lg:flex-row flex-col gap-4 w-[90%] m-auto">
      <div className="lg:w-[20%] w-full justify-center flex flex-wrap h-fit gap-2 pt-20 relative">
        <h3 className="text-3xl font-bold absolute top-2 left-2 w-full">
          TOPICS
        </h3>

        {posts && uniqueTags.map((tag, idx) => <Tag key={idx} tag={tag} />)}
      </div>
      <div className=" grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-8 relative pt-20 place-items-center">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-fit z-50">
          <Search />
        </div>
        <PostRenderer posts={posts} />
      </div>
    </div>
  );
}
