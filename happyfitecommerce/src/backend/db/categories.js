import { v4 as uuid } from "uuid";
// import menShoes from "../../assets/Mens.png";
// import womenShoes from "../../assets/Womens.png";
// import girlShoes from "../../assets/Girls.png";
// import boyShoes from "../../assets/Boys.png";

const categories = [
  {
    _id: uuid(),
    imgUrl:"https://www.rosierfoods.com/cdn/shop/collections/DSC4615.jpg?v=1712577403",
    alt: "category-img",
    category: "Ghee"
  },
  {
    _id: uuid(),
    imgUrl: "https://www.rosierfoods.com/cdn/shop/collections/Ajwain-2.jpg?v=1712577436",
    alt: "category-img",
    category: "Honey"
  },
  {
    _id: uuid(),
    imgUrl:"https://www.rosierfoods.com/cdn/shop/collections/DSC4597.jpg?v=1712577463",
    alt: "category-img",
    category: "oils"
  },
  {
    _id: uuid(),
    imgUrl: "https://www.rosierfoods.com/cdn/shop/collections/image.jpg?v=1712577525",
    alt: "category-img",
    category: "Butter"
  },
  // {
  //   _id: uuid(),
  //   imgUrl: "https://flavorsome.vercel.app/images/bestsell1.jpg",
  //   alt: "category-img",
  //   category: "vegetables"
  // }
];

export { categories };

