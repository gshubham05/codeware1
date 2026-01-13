"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const token = localStorage.getItem("token"); // JWT from login

        if (!token) {
          alert("Please login to view blogs");
          return;
        }

        const { data } = await axios.get("/api/blogs", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setBlogPosts(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
        alert("Session expired. Please login again.");
      }
    }

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Latest Course Updates & Articles
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">
                    <Link href={`/blog/${post._id}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {post.description?.slice(0, 100)}...
                  </p>

                  <Link
                    href={`/blog/${post._id}`}
                    className="text-blue-600 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No blog posts found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
