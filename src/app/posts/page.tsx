import WorldOfPlay from "@/components/WorldOfPlay";
import { client } from "@/lib/api";
import { gql } from "@apollo/client";

const GET_HERO_BANNER = gql`
  query GetHeroBanner {
    heroBannerCollection {
      items {
        title
        description
        image {
          url
        }
        ctAsCollection {
          items {
            _id
            label
            url
          }
        }
      }
    }
  }
`;

interface HeroBanner {
  title: string;
  description: string;
  image: {
    url: string;
  };
  ctAsCollection: {
    items: {
      _id: string;
      label: string;
      url: string;
    }[];
  };
}

const HeroBanner: React.FC = async () => {
  const { data } = await client.query({ query: GET_HERO_BANNER });
  const banner: HeroBanner = data.heroBannerCollection.items[0];

  return (
    <>
      <section className="relative flex items-center justify-center h-screen bg-black text-white">
        {/* Background Video */}
        {banner.image?.url ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={banner.image.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image.url})` }}
          ></div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center p-6">
          <h1 className="text-5xl font-bold mb-4">{banner.title}</h1>
          <p className="text-lg mb-6">{banner.description}</p>
          <div className="flex justify-center gap-4">
            {banner.ctAsCollection.items.map((cta) => (
              <a
                key={cta._id}
                href={cta.url}
                className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300"
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <WorldOfPlay />
    </>
  );
};

export default HeroBanner;
