import React from "react";
import "./Brand.css";
import bgImage from "./Images/Brand.jpg";

const Brand = () => {
  return (
    <div className="brand-card" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2>
      Sadashri Jewellery Brand & Design Guidelines</h2>
      <p style={{textAlign : "center" }}>
      Sadashri Jewellery is a brand that epitomizes elegance, craftsmanship, and timeless beauty. Specializing in exquisite gold and diamond jewelry, Sadashri combines traditional artistry with contemporary designs to create pieces that are both classic and modern. Each piece is meticulously crafted, reflecting the brand's commitment to quality and attention to detail.
      </p>
      <p style={{ marginTop: `30px` }}>
      Whether it's a wedding collection or everyday wear, Sadashri offers a diverse range of jewelry that caters to the sophisticated tastes of its clientele. With a reputation built on trust and excellence, Sadashri Jewellery continues to be a preferred choice for those seeking luxurious and meaningful adornments.
      </p>
    </div>
  );
};

export default Brand;
