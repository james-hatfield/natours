export interface ICard {
  color: "Primary" | "Secondary" | "Tertiary";
  image: "Image1" | "Image2" | "Image3";
  heading: string;
  details: string[];
  price: number;
}

export interface IStory {
  title: string;
  author: string;
  description: string;
  img: string;
  alt: string;
}

interface Source {
  src: string;
  type: string;
}

export interface IBackgroundVideo {
  sources: Source[];
}
