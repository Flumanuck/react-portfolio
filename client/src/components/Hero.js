import React from "react";

function Hero() {
  return (
    <div>
      <section class="hero">
        <img
          src={require("../images/Headshot.jpg")}
          alt="headshot of Jacob"
          class="headshot"
        />
        <p>What a cool Portfolio!</p>
      </section>
    </div>
  );
}

export default Hero;
