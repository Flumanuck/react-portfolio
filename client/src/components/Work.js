import React from "react";

function Work() {
  return (
    <article class="projects">
      <aside id="work" class="section-title">
        WORK
      </aside>
      <div class="flexbox">
        <section>
          <div class="project-links image biggest">
            <a href="https://gthov2.herokuapp.com/">
              <img
                class="run-buddy"
                alt="gtho screenshot"
                src={require("../images/Gtho2.0 screenshot.png")}
              />
            </a>
          </div>
        </section>
      </div>
      <div class="flexbox">
        <section class="sub-box">
          <div class="image project-links">
            <a href="https://flumanuck.github.io/Horiseon/">
              <img
                class="smaller-links"
                alt="horiseon screenshot"
                src={require("../images/Horiseon-screenshot.png")}
              />
            </a>
          </div>
          <div class="image project-links">
            <a href="https://flumanuck.github.io/password-generator/">
              <img
                class="smaller-links"
                alt="Password Generator Screenshot"
                src={require("../images/Password-screenshot.PNG")}
              />
            </a>
          </div>
          <div class="image project-links">
            <a href="https://flumanuck.github.io/coding-quiz/">
              <img
                class="smaller-links"
                alt="coding quiz screensot"
                src={require("../images/Screenshot.PNG")}
              />
            </a>
          </div>
          <div class="image project-links">
            <a href="https://flumanuck.github.io/run-buddy/">
              <img
                class="smaller-links"
                alt="Run Buddy Screenshot"
                src={require("../images/Run-buddy.PNG")}
              />
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Work;
