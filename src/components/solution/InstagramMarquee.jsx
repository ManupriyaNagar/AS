'use client';

import { Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const posts = Array(4).fill([
  {
    src: "/insta1.png",
    text: "Harmonic Filters: Essential Tools for Power Quality Enhancement in Indian Industries ✨",
    likes: "21 likes",
  },
  {
    src: "/insta2.png",
    text: "Transform your energy game with ActiveSine! Maximize your power efficiency and reduce operational losses with our cutting-edge Active Harmonic Filter. Achieve an optimized system with boosted power factor and up to 20% energy savings—because your business deserves smart energy management that works",
    likes: "892 likes",
  },
  {
    src: "/insta3.png",
    text: "This little guy found the perfect sunny spot ☀️🐱",
    likes: "2,156 likes",
  },
    {
    src: "/insta4.png",
    text: "TIs your power system silently losing efficiency?Invisible electrical harmonics might be the culprit—and they cost more than you think.",
    likes: "2,156 likes",
  },
     {
    src: "/image5.png",
    text: "This little guy found the perfect sunny spot ☀️🐱",
    likes: "2,156 likes",
  },
     {
    src: "/insta6.png",
    text: "This little guy found the perfect sunny spot ☀️🐱",
    likes: "2,156 likes",
  },
     {
    src: "/insta7.png",
    text: "This little guy found the perfect sunny spot ☀️🐱",
    likes: "2,156 likes",
  },
  
]).flat().slice(0, 12);

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
            <Link href="https://www.instagram.com/activesine_/" key={index} className="group block min-w-[300px]" target='blank'>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-[300px] h-[400px]">
                <img
                  src={post.src}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5" />
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    {/* <span className="text-sm">{post.likes}</span> */}
                  </div>
                  {/* <p className="text-sm font-medium object-cover">{post.text}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramMarquee;
