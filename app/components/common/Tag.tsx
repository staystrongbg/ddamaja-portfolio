'use client';

import { getAllPosts } from '@/app/lib/getPostsss';
import { usePostContext } from '../../context/postContext';

type TagProps = {
  tag: string;
  children?: React.ReactNode;
};

export default function Tag({ tag }: TagProps) {
  const { setSearchResults } = usePostContext();

  const filterByTag = async (tag: string) => {
    try {
      const results =
        await getAllPosts(`*[_type == "post" && tags[]->tag match "${tag}*"]{
        "id": slug.current,
        "image": image.asset->url,
        "title": title,
        "text": text,
        "createdAt": _createdAt,
        "tags": tags[]->tag
        }`);

      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
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
