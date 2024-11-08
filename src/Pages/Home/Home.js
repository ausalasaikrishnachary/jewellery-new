import React from "react";
import Hero from "./Hero/Hero";
import Introduction from "./Introduction/Introduction";
import Brand from "./Brand/Brand";
import Video from "./Video/Video";
 import ProductQuality from "./ProductQuality/ProductQuality";
import Testimonials from "./Testimonials/Testimonials";
import Stores from "./Stores/Stores";


function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Brand />
      <Video />
      <ProductQuality />
      <Testimonials />
      <Stores />
    </div>
  );
}

export default Home;
