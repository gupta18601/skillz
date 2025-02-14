export interface HeroBannerData {
  title: string;
  description: string;
  alignment: string;
  headingTop: string;
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

export interface ImageItem {
  title: string;
  description: string;
  image: {
    title: string;
    url: string;
  };
}

export interface WorldOfPlayData {
  title: string;
  imageCollection: {
    items: ImageItem[];
  };
}
