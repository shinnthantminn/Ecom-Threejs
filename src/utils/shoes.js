import { Canva } from "../components/Canva";
import { RedNike } from "../components/Rednike";
import { ShopNike } from "../components/Shop-nike";
import { WhiteNike } from "../components/White-nike";
import {
  poster1,
  poster1_2,
  poster2,
  poster2_1,
  poster3,
  poster3_2,
  poster4,
  poster4_2,
} from "./images";

export const shoesArr = [
  {
    id: 1,
    img1: poster1,
    img2: poster1_2,
    name: "StellarStrides",
    price: "100",
    des: "Elevate your fashion game with these sleek and sophisticated shoes. Crafted for comfort and style, StellarStrides feature a modern design that effortlessly combines versatility and elegance. Walk confidently through any occasion, as these shoes are a perfect blend of fashion-forward aesthetics and all-day comfort.",
    model: ShopNike,
    scale: 4,
    rotation: [0, Math.PI / 0.9, 0],
  },
  {
    id: 2,
    img1: poster2,
    img2: poster2_1,
    name: "EmberElegance",
    price: "340",
    des: "Elevate your fashion game with these sleek and sophisticated shoes. Crafted for comfort and style, StellarStrides feature a modern design that effortlessly combines versatility and elegance. Walk confidently through any occasion, as these shoes are a perfect blend of fashion-forward aesthetics and all-day comfort.",
    model: Canva,
    scale: 0.008,
    rotation: [0, Math.PI / 0.9, 0],
  },
  {
    id: 3,
    img1: poster3,
    img2: poster3_2,
    name: "MidnightMoxie",
    price: "215",
    des: "Elevate your fashion game with these sleek and sophisticated shoes. Crafted for comfort and style, StellarStrides feature a modern design that effortlessly combines versatility and elegance. Walk confidently through any occasion, as these shoes are a perfect blend of fashion-forward aesthetics and all-day comfort.",
    model: WhiteNike,
    scale: 1.5,
    rotation: [0, Math.PI / 0.53, 0],
  },
  {
    id: 4,
    img1: poster4,
    img2: poster4_2,
    name: "VelvetVoyager",
    price: "125",
    des: "Elevate your fashion game with these sleek and sophisticated shoes. Crafted for comfort and style, StellarStrides feature a modern design that effortlessly combines versatility and elegance. Walk confidently through any occasion, as these shoes are a perfect blend of fashion-forward aesthetics and all-day comfort.",
    model: RedNike,
    scale: 1,
    rotation: [0, Math.PI / 1.7, 0],
  },
];


export const colors = [
  {
    color: "#ff99c8",
    bg: "#fad2e1",
  },
  {
    color: "#fcf6bd",
    bg: "#f0efeb",
  },
  {
    color: "#fec89a",
    bg: "#f8edeb",
  },
  {
    color: "#9bf6ff",
    bg: "#d0f4de",
  },
  {
    color: "#e4c1f9",
    bg: "#dfe7fd",
  },
];
