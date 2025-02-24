"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Getting Started with Python: A Beginner's Guide",
    excerpt:
      "Learn the basics of Python programming and start your coding journey with this comprehensive guide.",
    author: "Emma Watson",
    date: "June 1, 2023",
    slug: "getting-started-with-python",
    image: "/wide_GWC.jpg",
  },
  {
    title: "Web Development Trends in 2023",
    excerpt:
      "Explore the latest trends in web development and stay ahead of the curve in your projects.",
    author: "Sophia Lee",
    date: "May 15, 2023",
    slug: "web-development-trends-2023",
    image: "/wide_GWC.jpg",
  },
  {
    title: "The Power of Diversity in Tech",
    excerpt:
      "Discover why diversity is crucial in the tech industry and how it drives innovation and success.",
    author: "Jasmine Patel",
    date: "April 30, 2023",
    slug: "power-of-diversity-in-tech",
    image: "/wide_GWC.jpg",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-20 bg-gradient-to-bl from-indigo-100 via-violet-100 to-purple-100 dark:from-indigo-950 dark:via-violet-950 dark:to-purple-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
