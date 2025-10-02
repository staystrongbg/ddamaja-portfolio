//ISR
// export const revalidate = 60;

import Tag from "@/app/components/common/Tag";
import type { Post } from "@/app/@types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Metadata } from "next";
import { postsApi } from "@/app/lib/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ post: string }>;
}): Promise<Metadata> {
  const post = await postsApi.getPostBySlug((await params).post);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.shortText || post.title,
    openGraph: {
      title: post.title,
      description: post.shortText || post.title,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.createdAt,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const post = await postsApi.getPostBySlug((await params).post);

  if (!post) {
    return <div>Post not found</div>;
  }

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
      <div className="relative w-full md:h-[600px] h-[400px] text-gray-800">
        <Image src={post.image} alt={post.title} fill style={{ objectFit: "contain" }} />
      </div>
      <div className="text-left px-4">
        <PortableText value={post.text} />
      </div>
    </div>
  );
}
