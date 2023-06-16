import React from "react";
import { Link } from "react-router-dom";
import homeCss from "./../styles/home.module.css";

function Home() {
  function blackPageBackground() {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    html.style.backgroundColor = "black";
    body.style.backgroundColor = "black";
  }

  blackPageBackground();

  return (
    <div className={homeCss["home-component"]} key={"home"}>
      <div className={homeCss["content-wrapper"]}>
        <div className={homeCss["main-content-1"]}>
          <div className={homeCss["header"]}>
            <div className={homeCss["logo-large"]}>roamingterra</div>
            <div className={homeCss["sign-in"]}>sign in</div>
          </div>
          <div className={homeCss["container-1"]}>
            <div className={homeCss["slogan"]}>
              <div>Make the most out of this world</div>
            </div>
            <div className={homeCss["slogan-elaboration"]}>
              Learn some of the world's most spoken languages at home, and on
              the go
            </div>
            <Link to="/shopping">
              <button className={homeCss["shop-1"]}>
                <span>Shop</span>
              </button>
            </Link>
          </div>
        </div>
        <div className={homeCss["main-content-2"]}>
          <div className={homeCss["description-container-2"]}>
            <div className={homeCss["key-word-2"]}>VOCABULARY BUILDING</div>
            <div className={homeCss["title-2"]}>
              Expand your language skills
            </div>
            <div className={homeCss["description-2"]}>
              Build a robust vocabulary with an extensive library of words and
              phrases, and practice vocabulary through interactive exercises and
              immersive activities. <br></br>
              <br></br>Master essential words and idiomatic expressions for
              real-world conversations with context-based examples and usage
              tips.
            </div>
          </div>
          <img
            className={homeCss["london"]}
            src="./images/london-night.jpeg"
            alt="london at night"
          ></img>
        </div>
        <div className={homeCss["main-content-3"]}>
          <img
            className={homeCss["paris"]}
            src="./images/paris-night.jpeg"
            alt="paris at night"
          ></img>
          <div className={homeCss["description-container-3"]}>
            <div className={homeCss["key-word-3"]}>INTERACTIVE LESSONS</div>
            <div className={homeCss["title-3"]}>Engage in dynamic learning</div>
            <div className={homeCss["description-3"]}>
              Experience interactive lessons that keep you engaged and
              motivated. Immerse yourself in multimedia content, including
              audio, video, and interactive exercises. <br></br>
              <br></br>Practice speaking and listening skills with speech
              recognition technology. Receive instant feedback and personalized
              recommendations for improvement.
            </div>
          </div>
        </div>
        <div className={homeCss["main-content-4"]}>
          <div className={homeCss["description-container-4"]}>
            <div className={homeCss["key-word-4"]}>CULTURAL IMMERSION</div>
            <div className={homeCss["title-4"]}>
              Explore language and culture
            </div>
            <div className={homeCss["description-4"]}>
              Immerse yourself in the richness of different cultures through
              authentic content. Discover customs, traditions, and cultural
              nuances while learning the language.<br></br>
              <br></br> Engage in dialogues and scenarios that reflect real-life
              cultural situations and gain a deeper understanding of the
              language's cultural context.
            </div>
          </div>

          <img
            className={homeCss["japan"]}
            src="./images/japan-night.jpeg"
            alt="japan at night"
          ></img>
        </div>
        <div className={homeCss["main-content-5"]}>
          <div className={homeCss["description-container-5"]}>
            <div className={homeCss["key-word-5"]}>Choose your language</div>
            <div className={homeCss["description-5"]}>
              Unlock the world, discover your language journey
            </div>
            <Link to="/shopping">
              <button className={homeCss["shop-2"]}>
                <span>Shop</span>
              </button>
            </Link>
          </div>
        </div>
        <div className={homeCss["main-content-6"]}>
          <div>Have a question?</div>
          <div className={homeCss["cards-container"]}>
            <div className={homeCss["help-center"]}>
              <div className={homeCss["help-center-text"]}>
                <div className={homeCss["help-center-text-title"]}>
                  Go to Help Center
                </div>
                <div className={homeCss["help-center-text-description"]}>
                  Find answers and suggestions to most common questions
                </div>
              </div>
              <img src="./images/help-center.png" alt="help center icon"></img>
            </div>
            <div className={homeCss["community"]}>
              <div className={homeCss["community-text"]}>
                <div className={homeCss["community-text-title"]}>
                  Ask the community
                </div>
                <div className={homeCss["community-text-description"]}>
                  Create connections with music creators like you
                </div>
              </div>
              <img src="./images/community.png" alt="community icon"></img>
            </div>
          </div>
        </div>
        <div className={homeCss["info"]}>
          <div className={homeCss["logo"]}>
            <div className={homeCss["logo-wrapper"]}>
              <img src="./images/earth-logo.png" alt="earth logo" />
              <span>roamingterra</span>
            </div>
          </div>
          <div className={homeCss["company-info-container"]}>
            <div>Company</div>
            <div>About us</div>
            <div>People</div>
            <div>Brand Resources</div>
            <div>Press</div>
            <div>Contact</div>
            <div>Blog</div>
            <div>Podcast</div>
          </div>
          <div className={homeCss["products-info-container"]}>
            <div>Products</div>
            <div>For Teachers</div>
            <div>For Schools</div>
            <div>For Partners</div>
            <div>For Developers</div>
            <div>For the Community</div>
          </div>
          <div className={homeCss["community-info-container"]}>
            <div>Community</div>
            <div>Overview</div>
            <div>Guidelines</div>
            <div>Become a Curator</div>
            <div>Help Center</div>
            <div>Ask the Community</div>
            <div>Community Blog</div>
          </div>
        </div>
      </div>
      <div className={homeCss["footer"]}>
        <div className={homeCss["logo-small"]}>roamingterra</div>
        <div className={homeCss["legal-information"]}>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
          <div>EULA</div>
          <div>Copyright</div>
        </div>
        <div className={homeCss["credits"]}>
          <div>Website created by Daniel Ballerini</div>
          <div>
            with help from{" "}
            <a href="https://www.theodinproject.com/"> © Odin Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
