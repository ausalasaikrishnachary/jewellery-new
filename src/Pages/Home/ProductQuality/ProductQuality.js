import React from 'react';
import './ProductQuality.css';

const ProductQuality = () => {
  return (
    <section className="product-quality-section">
      <div className="product-quality-container">
        <h1 className="product-quality-heading">Our Products: Quality & Timeless Design</h1>
        <p className="product-quality-para">
          At Sadashri Jewelkart, we produce hallmark-quality products, combining precision, premium materials, and lasting durability.
          Each piece undergoes rigorous quality checks, meeting high industry standards and ensuring exceptional performance.
        </p>
        <div className="product-quality-content">
          <div className="product-quality-card left">
            <h2 className="product-quality-heading-card">Unmatched Craftsmanship</h2>
            <p className="product-quality-para">
              Our skilled artisans and designers create products with a blend of modern trends and timeless style. Every design reflects innovation
              and handcrafted precision, making each piece unique and versatile.
            </p>
          </div>
          
          <div className="product-quality-card right">
            <h2 className="product-quality-heading-card">Personalized Creations</h2>
            <p className="product-quality-para">
              We offer customization options, allowing you to personalize select products. Discover our collections crafted with care to bring
              elegance and quality to any setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductQuality;
