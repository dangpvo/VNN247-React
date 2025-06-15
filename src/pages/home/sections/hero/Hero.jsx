import React, { useState } from "react";
import "./Hero.css";
import { assets, hero } from "../../../../assets/assets";
import Card from "../../../../components/card/Card";

const Hero = () => {
  const [items, setItems] = useState(hero);

  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((item, index) => (
            <Card key={`card ${item.id} ${index}`} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
