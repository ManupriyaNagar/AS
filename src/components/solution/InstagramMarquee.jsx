'use client';

import { Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    src: "/image-copy.png",
    likes: "2 likes",
  },
  {
    src: "/insta1.png",
    likes: "21 likes",
  },
  {
    src: "/insta2.png",
    likes: "892 likes",
  },
  {
    src: "/insta3.png",
    likes: "2,156 likes",
  },
  {
    src: "/insta4.png",
    likes: "2,156 likes",
  },
  {
    src: "/image5.png",
    likes: "2,156 likes",
  },
  {
    src: "/insta6.png",
    likes: "2,156 likes",
  },
  {
    src: "/insta7.png",
    likes: "2,156 likes",
  },
];

const InstagramMarquee = () => {
  return (
    <div className="mb-16 mx-auto px-4 max-w-screen-xl">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center py-10">
        Latest Instagram Posts
      </h2>

      <div
        className="overflow-hidden"
        onMouseEnter={(e) => {
          const marquee = e.currentTarget.querySelector('.marquee-track');
          if (marquee) marquee.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          const marquee = e.currentTarget.querySelector('.marquee-track');
          if (marquee) marquee.style.animationPlayState = 'running';
        }}
      >
        <div className="flex whitespace-nowrap marquee-track gap-x-6">
          {[...posts, ...posts].map((post, index) => (
            <Link
              href="https://www.instagram.com/activesine_/"
              key={index}
              className="group block min-w-[300px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-[300px] h-[400px]">
                <img
                  src={post.src}
                  alt={post.text}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5" />
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{post.likes}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Custom marquee animation styles */}
      <style jsx global>{`
        .marquee-track {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default InstagramMarquee;