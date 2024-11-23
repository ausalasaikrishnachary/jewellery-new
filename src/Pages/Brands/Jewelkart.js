import React from 'react'
import './Jewels.css'
import { FaGem, FaStore, FaLaptop } from 'react-icons/fa';  // Importing icons from react-icons
import engring from './Images/eng-ring.jpeg'
import Necklace from './Images/necklaceimg.webp'
import CustomPiece from './Images/custompiece.jpg'
import Specialcolimg from './Images/specialcollectionimg.jpg'
import storeimg from "./Images/storeimage.webp"
import achimg from "./Images/achieveimage.jpg"
import custimg from "./Images/custestimg.webp"




function Jewels() {


  const categories = [
    { title: "Bridal Jewelry", image: engring, link: "#" },
    { title: "Casual Wear", image: Necklace, link: "#" },
    { title: "Fine Jewelry", image: CustomPiece, link: "#" },
    { title: "Customizable Pieces", image: Specialcolimg, link: "#" },

  ];
  return (
    <div style={{ paddingTop: "60px" }}>

      <h3 className="br-brand-title" >Sadashri Jewelkart</h3>
      <p className="br-brand-description">
      Sadashri Jewelkart is your go-to <strong className='strongoffline' >online</strong>  jewelry marketplace, offering a wide variety of jewelry for all occasions, from bridal to casual wear.
      </p>

      <div className='div-icon'>

        <FaGem className="br-detail-icon" />
        <h2>Key Offerings</h2>
      </div>

      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />
            <h3>{category.title}</h3>
            <a href={category.link}>Explore &#8250;</a>
          </div>
        ))}
      </div>

      <section className="storebro-experience-section">
        <div className="bro-detail-box">
          <FaStore className="bro-detail-icon" />
          <h4>User Experience</h4>
          <p>
          Enjoy a seamless shopping experience with features like virtual try-ons and online customization tools.
          </p>
        </div>
        <div className="bro-detail-image">
          <img src={storeimg} alt="Store Experience" />
        </div>
      </section>

      <section className="storebro-experience-section">
      <div className="bro-detail-image">
          <img src={achimg} alt="Store Experience" />
        </div>
        <div className="bro-detail-box">
          <FaStore className="bro-detail-icon" />
          <h4>Innovations & Product Launches</h4>
          <p>Discover our newest collections and online-exclusive designs. Always pushing the boundaries of jewelry design.</p>

        </div>
      
      </section>
      <section className="storebro-experience-section">
        <div className="bro-detail-box">
          <FaStore className="bro-detail-icon" />
          <h4>Success Stories</h4>
          <p>"I found my dream bridal set on Sadashri Jewelkart. The convenience and variety were unmatched!" - Priya S.</p>

        </div>
        <div className="bro-detail-image">
          <img src={custimg} alt="Store Experience" />
        </div>
      </section>


    </div>
  )
}

export default Jewels
