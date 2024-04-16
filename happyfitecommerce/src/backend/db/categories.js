import { v4 as uuid } from "uuid";
import menShoes from "../../assets/Mens.png";
import womenShoes from "../../assets/Womens.png";
import girlShoes from "../../assets/Girls.png";
import boyShoes from "../../assets/Boys.png";

const categories = [
  {
    _id: uuid(),
    imgUrl: menShoes,
    alt: "category-img",
    category: "men"
  },
  {
    _id: uuid(),
    imgUrl: womenShoes,
    alt: "category-img",
    category: "women"
  },
  {
    _id: uuid(),
    imgUrl: boyShoes,
    alt: "category-img",
    category: "boys"
  },
  {
    _id: uuid(),
    imgUrl: girlShoes,
    alt: "category-img",
    category: "girls"
  }
];

export { categories };

