"use client";

import { NewsData } from "@/lib/types";
import { format } from "date-fns";
import Image from "next/image";
import { useRef } from "react";

interface NewsProps {
  data: NewsData;
}

const News: React.FC<NewsProps> = ({ data }) => {
  if (!data) return null;

  const { title, contentCollection } = data;
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      {/* News Cards Container */}
      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md"
          onClick={() => scroll(-350)}
        >
          ←
        </button>

        <div
          ref={scrollContainer}
          className="flex space-x-6 overflow-hidden no-scrollbar w-[1100px]"
        >
          {contentCollection.items.map((item, index) => (
            <div
              key={index}
              className="w-[330px] flex-shrink-0 bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <Image
                src={item.image.url}
                alt="News Image"
                width={330}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-500 text-sm">
                  {format(new Date(item.date), "MMM. d, yyyy")}
                </p>
                <p className="mt-2 text-pink-600 font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md"
          onClick={() => scroll(350)}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default News;
