'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsPage = () => {
  const [news] = useState([
    {
      id: 1,
      title: "ActiveSign Launches New Advanced Sign Language Course",
      date: "March 15, 2024",
      category: "Education",
      image: "/images/news/course-launch.jpg",
      excerpt: "We're excited to announce the launch of our new advanced sign language course, designed for professionals and organizations.",
      readMore: true
    },
    {
      id: 2,
      title: "Breaking Barriers: ActiveSign Partners with Major Corporations",
      date: "March 10, 2024",
      category: "Partnerships",
      image: "/images/news/partnership.jpg",
      excerpt: "ActiveSign has partnered with leading corporations to provide comprehensive sign language training programs.",
      readMore: true
    },
    {
      id: 3,
      title: "New Research Shows Impact of Sign Language in Workplace",
      date: "March 5, 2024",
      category: "Research",
      image: "/images/news/research.jpg",
      excerpt: "Recent studies demonstrate the positive impact of sign language training in workplace communication.",
      readMore: true
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Latest News & Updates
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Stay informed about the latest developments in sign language education and accessibility
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                {item.readMore && (
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news and updates about sign language education and accessibility.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
