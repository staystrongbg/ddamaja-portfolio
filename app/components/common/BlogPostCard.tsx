'use client';

import { Post } from '@/app/@types';
import Image from 'next/image';
import Link from 'next/link';
import Tag from './Tag';
import { usePostContext } from '@/app/context/postContext';
import format from 'date-fns/format';
export default function BlogPostCard({ post }: { post: Post }) {
  const { setSearchResults } = usePostContext();

  const inputReset = () => {
    setTimeout(() => setSearchResults(null), 100);
  };
  const formattedDate = format(new Date(post.createdAt), 'yyyy-MM-dd');
  return (
    <Link href="/blog/[post]" as={`/blog/${post.id}`} onClick={inputReset}>
      <article className="z-10 perspective-right rounded-lg overflow-hidden w-[380px] h-[600px] bg-white dark:bg-[#111] transition-all shadow-xl">
        <div className="relative post-image-container w-full h-[300px]">
          <Image src={post.image} alt={post.title} fill objectFit="contain" />
        </div>
        <div className="p-4">
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag, idx) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
          <div>Publisheda at {formattedDate}</div>
          <h3 className="text-4xl font-bold text-purple-700 dark:text-rose-200">
            {post.title}
          </h3>
          <div className="mt-4">
            {/* <PortableText value={post.text} /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, sint dolorem aliquam voluptatem maxime asperiores
            libero aut atque nam vitae cupiditate esse accusantium officia
            tempore quam adipisci repellat iusto eveniet!
          </div>
        </div>
      </article>
    </Link>
  );
}
