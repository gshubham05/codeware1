import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// --- SEO: Next.js Metadata Head export (App Router) ---
export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.id);
  if (!post) {
    return {
      title: "Blog Not Found",
      description: "Blog post could not be loaded.",
    };
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image || "/default-og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      siteName: "Codeware Blog",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || "/default-og-image.png"],
    },
  };
}

// --- Blog fetch function ---
async function getBlogPost(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// --- Main BlogPost component ---
export default async function BlogPost({ params }) {
  const { id } = params;
  const post = await getBlogPost(id);

  if (!post) {
    return notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-[5.3rem]">
      {/* Image with overlay text */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-80 object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {post.title}
          </h1>
          <p className="text-gray-300 mt-2">{post.description}</p>
          <div className="flex items-center gap-4 mt-4 text-white text-sm">
            <span>
              {post.date} • {post.readTime || "2 min read"}
            </span>
          </div>
        </div>
      </div>

      {/* Blog Content (HTML!) */}
      <div
        className="mt-6 text-lg leading-8 text-gray-700 prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Author Info */}
      <div className="mt-12 p-6 border-t">
        <p className="text-gray-500 text-sm">
          Passionate about web development and teaching.
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
}
