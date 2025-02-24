"use client";
import { useRef } from "react";
import Image from "next/image";
import { NewsData } from "@/lib/types";
import { format } from "date-fns";

interface NewsProps {
  data: NewsData;
}

const News: React.FC<NewsProps> = ({ data }) => {
  const { title, contentCollection } = data;
  const scrollContainer = useRef<HTMLDivElement>(null);
  const cardWidth = 350;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-8 bg-gray-100 relative mb-24px">
      <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
      <div className="relative flex items-center max-w-[1200px] mx-auto">
        <button
          className="absolute left-[-20px] z-10 bg-white p-3 rounded-full shadow-md border hover:bg-gray-200 transition flex items-center justify-center"
          onClick={() => scroll("left")}
        >
          ←
        </button>

        <div
          ref={scrollContainer}
          className="flex space-x-6 overflow-x-auto no-scrollbar w-[1100px] mx-auto snap-x scroll-smooth"
        >
          {contentCollection.items.map((item, index) => (
            <div
              key={index}
              className="w-[330px] flex-shrink-0 bg-white shadow-lg rounded-xl overflow-hidden snap-center"
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
        <button
          className="absolute right-[-20px] z-10 bg-white p-3 rounded-full shadow-md border hover:bg-gray-200 transition flex items-center justify-center"
          onClick={() => scroll("right")}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default News;
