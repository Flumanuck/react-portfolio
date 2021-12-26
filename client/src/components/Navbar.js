import React from "react";

function Navbar() {
  return (
    <div class="header header-footer">
      <h1>
        <a href="./index.html" class="name">
          Jacob Machlis
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me">ABOUT ME</a>
          </li>
          <li>
            <a href="#work">WORK</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="#resume">RESUME</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
