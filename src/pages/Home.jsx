import React, { useState } from 'react';
import './Home.css';

// Images
import biryaniImg from '../assets/images/biryani.jpg';
import cokeImg from '../assets/images/coke.jpg'; 
import chaiImg from '../assets/images/chai.jpg';
import gulabImg from '../assets/images/images.jpg';
import summerImg from '../assets/images/summer-beverages.jpg';
import coffeeImg from '../assets/images/cold-coffee.jpg';
import karahiImg from '../assets/images/karahi.jpg';
import allooImg from '../assets/images/allo-ghosht.jpg';
import mangoImg from '../assets/images/mango-shake.jpg';
import spriteImg from '../assets/images/sprint.jpg';
import channaImg from '../assets/images/channa-platter.jpg';
import kuormaImg from '../assets/images/kuorma.jpg';
import muttonImg from '../assets/images/mutton.jpg';
import strawberryImg from '../assets/images/stawberry-brownie.jpg';
import cakeImg from '../assets/images/cake.jpg';
import vanillaImg from '../assets/images/vanilla.jpg';

// Icons
import { FaStar, FaGoogle, FaClock, FaMoneyBillWave, FaLeaf, FaUtensils } from 'react-icons/fa';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Beverages');

  // Categories
  const categories = [
  { name: 'Starters', icon: '🍗' },
  { name: 'Beverages', icon: '🍹' },
  { name: 'Desis', icon: '🍛' },   // ✅ wapas add
  { name: 'Mains', icon: '🍽️' },
  { name: 'Desserts', icon: '🍰' }
];

  // All dishes
 const allDishes = {
  Starters: [
    { image: channaImg, name: 'Channa Chaat' },
    { image: allooImg, name: 'Aloo Tikki' }
  ],

  Beverages: [
    { image: cokeImg, name: 'Coke' },
    { image: chaiImg, name: 'Chai' },
    { image: summerImg, name: 'Summer-Beaverage'},
    { image: coffeeImg, name: 'Cold-Coffee'},
    { image: spriteImg, name: 'Sprint'},
    {
      image: mangoImg, name: 'Mango-Shake'
    },
  ],

  // ✅ DESIS (pure Pakistani dishes)
  Desis: [
    { image: biryaniImg, name: 'Biryani' },
    { image: karahiImg, name: 'Karahi' },
    { image: allooImg, name: 'Aloo Gosht' },
    { image: kuormaImg, name: 'Korma' }
  ],

  // ✅ MAINS (general main course / mix items)
  Mains: [
    { image: muttonImg, name: 'Mutton Pulao' },
    { image: channaImg, name: 'Channa Curry' }
  ],

  Desserts: [
    { image: gulabImg, name: 'Gulab Jamun' },
    { image: cakeImg, name: 'Chocolate Cake' },
    { image: vanillaImg, name: 'Chocolate-Chip-Cokee'},
    { image: strawberryImg, name: 'stawberry-brownie.jpg'}
  ]
};

  return (
    <div className='home-container'>

      {/* Hero Section */}
      <section className='hero-section'>
        <h1>Imaginative Creation</h1>
        <p>Hello, Welcome to our Website. What would you like to eat? Order Now</p>

        <div className='reserve-btn'>
          <button>Reserve Table</button>
        </div>

        {/* Categories */}
        <div className='featured-dishes-section'>
          <h2>Our Categories</h2>

          <div className='feature-row'>
            {categories.map((item, index) => (
              <div 
                key={index} 
                className={`feature-card ${selectedCategory === item.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(item.name)}
                style={{ cursor: 'pointer' }}
              >
                <span className='feature-icon'>{item.icon}</span>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Menu */}
      <div className='gallery-section'>
        <h2>{selectedCategory} Menu</h2>

        <div className='gallery-strip'>
          {allDishes[selectedCategory]?.map((dish, index) => (
            <div key={index} className="dish-card">
              <img src={dish.image} alt={dish.name} className="gallery-img" />
              <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {dish.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='container'>
        <div className='common-points'>
          <h1>Our Restaurant Will Offer You:</h1>
        </div>

        <div className='inline-section'>
          <div className='inline-item'>
            <FaLeaf className="point-icon" />
            <h1 className='inline-heading'>Quality Ingredients:</h1>
            <p className='inline-text'>Fresh and organic recipes</p>
          </div>

          <div className='inline-item'>
            <FaClock className="point-icon" />
            <h1 className='inline-heading'>Fast Service:</h1>
            <p className='inline-text'>Quick delivery based on your orders</p>
          </div>

          <div className='inline-item'>
            <FaMoneyBillWave className="point-icon" />
            <h1 className='inline-heading'>Affordable Price:</h1>
            <p className='inline-text'>Best value for money</p>
          </div>

          <div className='inline-item'>
            <FaUtensils className="point-icon" />
            <h1 className='inline-heading'>Atmosphere:</h1>
            <p className='inline-text'>Clean and comfortable environment</p>
          </div>
        </div>

        {/* Social Proof */}
        <div className='social-proof'>
          <div className='trust-badge'>
            <FaGoogle color="#4285F4" />
            <span> 4.9/5 Rating on Google Reviews</span>

            <div className='stars'>
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}