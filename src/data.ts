import Icecream from "./assets/image/Icecream.jpg";
import Oliveoil from "./assets/image/Oliveoil.jpg";
import Tangerine from "./assets/image/Tangerine.jpg";
import Tomato from "./assets/image/Tomato.jpg";
import Watermelon from "./assets/image/Watermelon.jpg";

export default [
  {
    id: 1,
    title: "바닐라 아이스크림",
    content: "dairy",
    price: 1400,
    image: `${Icecream}`,
    amount: 1,
  },

  {
    id: 2,
    title: "올리브오일",
    content: "oil",
    price: 12000,
    image: `${Oliveoil}`,
    amount: 0,
  },

  {
    id: 3,
    title: "제주 감귤 1kg",
    content: "fruit",
    price: 13200,
    image: `${Tangerine}`,
    amount: 0,
  },

  {
    id: 4,
    title: "무농약 토마토 1kg",
    content: "fruit",
    price: 6900,
    image: `${Tomato}`,
    amount: 0,
  },

  {
    id: 5,
    title: "당도선별 고당도 수박",
    content: "fruit",
    price: 16000,
    image: `${Watermelon}`,
    amount: 0,
  },
];
