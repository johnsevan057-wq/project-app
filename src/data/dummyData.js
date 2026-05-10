// dummyData.js
import cokeImg from "../assets/images/coke.jpg"; // Chota naam use karein
import chaiImg from "../assets/images/chai.jpg";
import biryaniImg from "../assets/images/biryani.jpg";
import gulabImg from "../assets/images/images.jpg";
import summerImg from '../assets/images/summer-beverages.jpg';
import coffeeImg from '../assets/images/cold-coffee.jpg';
import karahiImg from '../assets/images/karahi.jpg';
import mangoImg from '../assets/images/mango-shake.jpg';
import sprintImg from '../assets/images/sprint.jpg';
import alloImg from '../assets/images/allo-ghosht.jpg';
import channaImg from '../assets/images/channa-platter.jpg';
import kuormaImg from '../assets/images/kuorma.jpg';
import muttonImg from '../assets/images/mutton.jpg';
import stawberryImg from '../assets/images/stawberry-brownie.jpg';
import cakeImg from '../assets/images/cake.jpg';
import vanillaImg from '../assets/images/vanilla.jpg';
import ballImg from '../assets/images/balls.jpg';
import croqueImg from '../assets/images/croque.jpg'

export const menu = {
  starters: [
    {
      id: 1,
      name: "Balls",
      description: "Kofta-Balls",
      price: 120,
      image: cokeImg,
    },
  ],
  Mains: [
{
      id: 1,
      name: "Croque Madame Pierogy Casserole",
      description: "Croque dishes",
      price: 120,
      image: croqueImg,
    },
  ],
  beverages: [
    {
      id: 1,
      name: "Coke",
      description: "Cold drink",
      price: 120,
      image: cokeImg,
    },
    {
      id: 2,
      name: "Tea",
      description: "Hot tea",
      price: 80,
      image: chaiImg,
    },
    {
      id: 3,
      name: "Cold-Coffee",
      description: "Coffee",
      price: 150,
      image: coffeeImg,
    },
    {
      id: 4,
      name: "Summer-Beverages",
      description: "Summer",
      price: 160,
      image: summerImg,

    },
    {
      id: 5,
      name: "Mango",
      description: "Mango-Shake",
      price: 280,
      image: mangoImg,

    },
    {
      id: 9,
      name: "Sprint",
      description: "Sprint-Shake",
      price: 550,
      image: sprintImg,
    }
  ],

  desi: [
    {
      id: 6,
      name: "Biryani",
      description: "Chicken biryani",
      price: 250,
      image: biryaniImg,
    },
    {
      id: 7,
      name: "Karahi",
      description: "Chicken karahi",
      price: 400,
      image: karahiImg,
    },
    {
      id: 10,
      name: "Alloo-Ghosht",
      description: "Alloo-Ghosht",
      price: 780,
      image: alloImg,
    },
    {
      id: 11,
      name: "Channa-Platter",
      description: "Channa",
      price: 1000,
      image: channaImg,
    },
    {
      id: 12,
      name: "Kuorma-Platter",
      description: "Kuorma",
      price: 2000,
      image: kuormaImg,
    },
    {
      
      id: 13,
      name: "Mutton-Pulao",
      description: "Mutton Dish",
      price: 4000,
      image: muttonImg,
    }
  ],

  desserts: [
    {
      id: 8,
      name: "Gulab Jamun",
      description: "Sweet dessert",
      price: 150,
      image: gulabImg,
    },
{
      
      id: 14,
      name: "Stawberry-Brownie",
      description: "Brownie Dish",
      price: 670,
      image: stawberryImg,
    },
    {
       id: 15,
      name: "Chocolate-Mouse-Cake",
      description: "Cake Dish",
      price: 900,
      image: cakeImg,
    },
    {
      id: 16,
      name: "Chocolate-Dip-Cokee",
      price: 780,
      image: vanillaImg,
    }

  ],
};
