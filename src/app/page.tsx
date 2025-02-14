import CenterHeroBanner from "@/components/CenterHeroBanner";
import WorldOfPlay from "@/components/WorldOfPlay";
import { client } from "@/lib/api";
import { HeroBannerData, WorldOfPlayData } from "@/lib/types";
import { GET_HOME_PAGE } from "@/Queries/HomePage.query";

export default async function Home() {
  const { data } = await client.query({ query: GET_HOME_PAGE });

  interface HeroBanner extends HeroBannerData {
    __typename: "HeroBanner";
  }

  interface WorldOfPlay extends WorldOfPlayData {
    __typename: "WorldOfPlay";
  }

  type ModuleType = HeroBanner | WorldOfPlay;

  const renderModule = (module: ModuleType) => {
    switch (module.__typename) {
      case "HeroBanner":
        return <CenterHeroBanner data={module} />;

      case "WorldOfPlay":
        return <WorldOfPlay data={module} />;

      default:
        return null;
    }
  };
  return (
    <div className="max-w-2xl mx-auto">
      {data?.pageCollection?.items[0]?.modulesCollection?.items.map(
        (module: ModuleType, index: number) => (
          <div key={index}>{renderModule(module)}</div>
        )
      )}
    </div>
  );
}
