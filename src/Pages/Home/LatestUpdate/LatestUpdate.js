import React from "react";
import "./LatestUpdate.css";
import bgImage from "./Images/Brand.png"; // Adjust the path as needed

const LatestUpdate = () => {
  return (
    <div
      className="LatestUpdate-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2>Latest News & Updates</h2>
      <p>
        Stay up-to-date with our latest milestones, exciting partnerships, and
        new product launches. We’re always evolving, and there’s always
        something new to share.
      </p>
<div className="LatestUpdate-points">
  <p>
  <strong>1. New Brand Launch:</strong> Sadashri Jewelkart has just launched
  its new online collection! Explore our <spam className="Brand-aligment">exclusive designs today.</spam>
      </p>

      <p>
  <strong>2. Sustainability Commitment:</strong> We’ve implemented
    cutting-edge sustainable practices across all of <spam className="Brand-aligment">our brands. Learn how
    we’re reducing our environmental footprint.</spam>
      </p>
      </div>
    </div>
  );
};

export default LatestUpdate;
