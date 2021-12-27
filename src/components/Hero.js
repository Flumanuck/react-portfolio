import React from "react";

function Hero() {
  return (
    <div>
      <section className="hero">
        <img
          src={require("../images/Headshot.jpg")}
          alt="headshot of Jacob"
          className="headshot"
        />
        <p>What a cool Portfolio!</p>
      </section>
    </div>
  );
}

export default Hero;
