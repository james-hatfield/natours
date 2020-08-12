import { ICard, IStory, IBackgroundVideo } from "./App.types";

const lorem20 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Quisquam minima ab quas voluptatibus rem maiores sunt nobis, magni vero
 voluptatum in tenetur commodi et quibusdam dicta quos labore consequuntur? 
 Pariatur assumenda consequatur perferendis vitae corrupti, maxime corporis 
 nostrum laborum.`;

export const stories: IStory[] = [
  {
    title: "We make people genuinely happy",
    description: lorem20,
    img: require("./assets/nat-8.jpg"),
    alt: "Nature 8",
    author: "Mary Smith",
  },
  {
    title: "Wow! Life is so completely different now",
    description: lorem20,
    img: require("./assets/nat-9.jpg"),
    alt: "Nature 9",
    author: "David Jaconson",
  },
];

export const cards: ICard[] = [
  {
    color: "Primary",
    image: "Image1",
    details: [
      "3 day tour",
      "up to 30 people",
      "2 tour guides",
      "sleep in cozy hotels",
      "Difficulty: Easy",
    ],
    heading: "The Sea Explorer",
    price: 297,
  },
  {
    color: "Secondary",
    image: "Image2",
    details: [
      "7 day tour",
      "up to 40 people",
      "6 tour guides",
      "sleep in provided tents",
      "Difficulty: medium",
    ],
    heading: "The Forest Hiker",
    price: 497,
  },
  {
    color: "Tertiary",
    image: "Image3",
    details: [
      "5 day tour",
      "up to 15 people",
      "3 tour guides",
      "sleep in provided tens",
      "Difficulty: hard",
    ],
    heading: "The Snow Adventurer",
    price: 897,
  },
];

export const video: IBackgroundVideo = {
  sources: [
    { src: require("./assets/video.mp4"), type: "video/mp4" },
    { src: require("./assets/video.webm"), type: "video/webm" },
  ],
};
