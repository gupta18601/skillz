import { client } from "@/lib/api";
import { gql } from "@apollo/client";

const GET_WORLD_OF_PLAY = gql`
  query GetWorldOfPlay {
    worldOfPlayCollection(limit: 10) {
      items {
        title
        imageCollection(limit: 10) {
          items {
            title
            description
            image {
              title
              url
            }
          }
        }
      }
    }
  }
`;

interface ImageItem {
  title: string;
  description: string;
  image: {
    title: string;
    url: string;
  };
}

interface WorldOfPlayData {
  worldOfPlayCollection: {
    items: {
      title: string;
      imageCollection: {
        items: ImageItem[];
      };
    }[];
  };
}

const WorldOfPlay: React.FC = async () => {
  const { data } = await client.query<WorldOfPlayData>({
    query: GET_WORLD_OF_PLAY,
  });
  const worldOfPlay = data.worldOfPlayCollection.items[0];

  return (
    <div className=" text-white py-16 px-6">
      {/* Title Centered */}
      <h2 className="text-2xl font-bold text-pink-500 text-center mb-10">
        {worldOfPlay.title}
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto">
        {worldOfPlay.imageCollection.items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={item.image.url}
              alt={item.image.title}
              width={80}
              height={80}
            />
            <h3 className="text-xl text-black font-semibold mt-4">
              {item.title}
            </h3>
            <p className="text-black mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldOfPlay;
