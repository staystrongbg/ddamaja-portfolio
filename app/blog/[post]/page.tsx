export const revalidate = '60s';

import Tag from '@/app/components/common/Tag';
import { getPost } from '@/app/lib/getPost';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default async function Post({ params }: { params: { post: string } }) {
  console.log('params', params.post);

  const [post] = await getPost(
    `*[_type == "post" && slug.current == "${params.post}"]{
      "id": slug.current,
      "image": image.asset->url,
      "title": title,
      "createdAt": _createdAt,
      "text": text,
      "tags": tags[]->tag
    }`
  );

  return (
    <div className="my-20 text-gray-700 dark:text-white flex flex-col max-w-[1000px] m-auto">
      <h1 className="text-6xl text-gray-700 font-bold main-header">
        {post.title}
      </h1>
      <div className="flex gap-2 mt-4">
        {post.tags.map((t, idx) => (
          <Tag key={idx} tag={t}>
            {t}
          </Tag>
        ))}
      </div>
      <div className="relative w-[800px] h-[600px] text-gray-800">
        <Image src={post.image} alt={post.title} fill objectFit="contain" />
      </div>
      <div className="text-left">
        <PortableText value={post.text} />
      </div>
    </div>
  );
}
