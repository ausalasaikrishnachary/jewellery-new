import React from "react";
import Hero from "./Hero/Hero";
import Introduction from "./Introduction/Introduction";
import Brand from "./Brand/Brand";
import Video from "./Video/Video";
 import ProductQuality from "./ProductQuality/ProductQuality";
import Testimonials from "./Testimonials/Testimonials";


function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Brand />
      <Video />
      <ProductQuality />
      <Testimonials />
    </div>
  );
}

export default Home;
