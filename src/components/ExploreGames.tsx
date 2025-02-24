import { ExploreGamesData } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface ExploreGamesProps {
  data: ExploreGamesData;
}

const ExploreGames: React.FC<ExploreGamesProps> = ({ data }) => {
  const { backgroundVideo, image, ctaCollection } = data;
  return (
    <div className="relative w-full h-96 overflow-hidden bg-black mt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src={backgroundVideo.url} type="video/mp4" />
      </video>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="mb-8">
          <Image
            src={image.url}
            alt="Skillz Logo"
            width={80}
            height={80}
            className="w-20 h-20"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          {ctaCollection.items.map((cta, index) => (
            <a
              key={index}
              href={cta.url}
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-all"
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreGames;
