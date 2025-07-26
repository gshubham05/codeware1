"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailPage() {
  const { id: currentBlogId } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const blogRes = await fetch(`/api/blogs/${currentBlogId}`);
      if (blogRes.ok) setBlog(await blogRes.json());
    };
    if (currentBlogId) fetchData();
  }, [currentBlogId]);

  if (!blog) return <p className="p-8 text-center">Loading blog...</p>;

  return (
    <div className="w-full mx-auto p-4 mt-[75px]">
      <article className="w-full bg-white p-6">
        {blog.image && (
          <div className="mb-4">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={600}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        )}
        <h1 className="text-xl font-bold mb-2 sm:text-3xl">{blog.title}</h1>
        <div className="text-sm text-gray-600 mb-4">
          {blog.author && <span>By {blog.author}</span>}
          {blog.category && (
            <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
              {blog.category}
            </span>
          )}
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
        <div
          className="prose max-w-none prose-pre:whitespace-pre-wrap prose-pre:break-words prose-pre:overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <Link
          href="/blog"
          className="inline-block mb-4 text-sm text-blue-600 hover:text-blue-800 hover:underline transition mt-6"
        >
          ← Back to Blogs
        </Link>
      </article>
    </div>
  );
}
