'use client';

import { useRef, useState } from 'react';
import { getAllPosts } from '../lib/getPostsss';
import { usePostContext } from '../context/postContext';

export default function Search() {
  const { setSearchResults } = usePostContext();
  const [term, setTerm] = useState('');
  const handleSearch = async () => {
    try {
      const results =
        await getAllPosts(`*[_type == "post" && title match "${term}*" || tags[]->tag match "${term}*"]{
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

  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center relative flex-col">
      <div className="flex">
        <input
          ref={searchRef}
          type="text"
          id="search"
          placeholder="Search"
          className="px-4 py-2  border-b border-purple-200   focus:bg-purple-950/10 dark:border-purple-900 bg-transparent outline-none placeholder:text-gray-400 dark:placeholder:text-gray-700 dark:text-fuchsia-400 min-w-[180px]"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          className="bg-fuchsia-600 text-white px-4 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

// const filterRes = (arr: Post[]) => {
//   const resTitles = arr.filter((post) =>
//     post.title.toLowerCase().includes(ev.target.value.toLowerCase())
//   );

//   const resTags = arr.filter((post) =>
//     post.tags.some((tag) =>
//       tag.toLowerCase().includes(ev.target.value.toLowerCase())
//     )
//   );

//   if (resTitles.length > 0) {
//     return resTitles;
//   } else if (resTags.length > 0) {
//     return resTags;
//   } else {
//     return null;
//   }
// };

{
  /* {searchResults && searchRef.current?.value !== '' && (
        <div className="w-full bg-gray-100 text-black p-4 overflow-y-scroll ">
          {searchResults.map((post, idx) => (
            <div className="flex text-sm py-1" key={idx}>
              <p
                onClick={() => {
                  if (searchRef.current) searchRef.current.value = post.title;
                }}
              >
                {post.title}
              </p>
            </div>
          ))}
        </div>
      )} */
}
