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

export interface HiringData {
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

interface ContentItem {
  image: {
    url: string;
  };
  date: string;
  description: string;
}

export interface NewsData {
  title: string;
  contentCollection: {
    items: ContentItem[];
  };
}

export interface FaqData {
  title: string;
  questionCollection: {
    items: QuestionItem[];
  };
}

interface QuestionItem {
  question: string;
  answer: string;
}

export interface ExploreGamesData {
  backgroundVideo: {
    url: string;
  };
  image: {
    url: string;
  };
  ctaCollection: {
    items: CtaItem[];
  };
}

interface CtaItem {
  _id: number;
  label: string;
  url: string;
}

export interface Header {
  logo: {
    url: string;
  };
  navBarLinkCollection: {
    items: NavBarLink[];
  };
}

export interface NavBarLink {
  label: string;
  url: string;
}

export interface GetHeaderResponse {
  headerCollection: {
    items: Header[];
  };
}
