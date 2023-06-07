import React from "react";

function Home() {
  return (
    <div>
      <div className="content-wrapper">
        <div className="main-content-1">
          <div className="header">
            <div className="logo-large">roamingterra</div>
            <div className="sign-in">sign in</div>
          </div>
          <div className="container-1">
            <div className="slogan">Make the most out of this world</div>
            <div className="slogan-elaboration">
              Learn some of the world's most spoken languages at home, and on
              the go
            </div>
            <button className="shop-1">
              <span>Shop</span>
            </button>
          </div>
        </div>
        <div className="main-content-2">
          <div className="description-container-2">
            <div className="key-word-2">VOCABULARY BUILDING</div>
            <div className="title-2">Expand your language skills</div>
            <div className="description-2">
              Build a robust vocabulary with an extensive library of words and
              phrases, and practice vocabulary through interactive exercises and
              immersive activities. <br></br>
              <br></br>Master essential words and idiomatic expressions for
              real-world conversations with context-based examples and usage
              tips.
            </div>
          </div>
          <img
            className="london"
            src="/images/london-night.jpeg"
            alt="london at night"
          ></img>
        </div>
        <div className="main-content-3">
          <img
            className="paris"
            src="/images/paris-night.jpeg"
            alt="paris at night"
          ></img>
          <div className="description-container-3">
            <div className="key-word-3">INTERACTIVE LESSONS</div>
            <div className="title-3">Engage in dynamic learning</div>
            <div className="description-3">
              Experience interactive lessons that keep you engaged and
              motivated. Immerse yourself in multimedia content, including
              audio, video, and interactive exercises. <br></br>
              <br></br>Practice speaking and listening skills with speech
              recognition technology. Receive instant feedback and personalized
              recommendations for improvement.
            </div>
          </div>
        </div>
        <div className="main-content-4">
          <div className="description-container-4">
            <div className="key-word-4">CULTURAL IMMERSION</div>
            <div className="title-4">Explore language and culture</div>
            <div className="description-4">
              Immerse yourself in the richness of different cultures through
              authentic content. Discover customs, traditions, and cultural
              nuances while learning the language.<br></br>
              <br></br> Engage in dialogues and scenarios that reflect real-life
              cultural situations and gain a deeper understanding of the
              language's cultural context.
            </div>
          </div>

          <img
            className="japan"
            src="/images/japan-night.jpeg"
            alt="japan at night"
          ></img>
        </div>
        <div className="main-content-5">
          <div className="description-container-5">
            <div className="key-word-5">Choose your language</div>
            <div className="description-5">
              Unlock the world, discover your language journey
            </div>
            <button className="shop-2">
              <span>Shop</span>
            </button>
          </div>
        </div>
        <div className="main-content-6">
          <div>Have a question?</div>
          <div className="cards-container">
            <div className="help-center">
              <div className="help-center-text">
                <div className="help-center-text-title">Go to Help Center</div>
                <div className="help-center-text-description">
                  Find answers and suggestions to most common questions
                </div>
              </div>
              <img src="/images/help-center.png" alt="help center icon"></img>
            </div>
            <div className="community">
              <div className="community-text">
                <div className="community-text-title">Ask the community</div>
                <div className="community-text-description">
                  Create connections with music creators like you
                </div>
              </div>
              <img src="/images/community.png" alt="community icon"></img>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="logo">
            <div className="logo-wrapper">
              <img src="/images/earth-logo.png" alt="earth logo" />
              <span>roamingterra</span>
            </div>
          </div>
          <div className="company-info-container">
            <div>Company</div>
            <div>About us</div>
            <div>People</div>
            <div>Brand Resources</div>
            <div>Press</div>
            <div>Contact</div>
            <div>Blog</div>
            <div>Podcast</div>
          </div>
          <div className="products-info-container">
            <div>Products</div>
            <div>For Teachers</div>
            <div>For Schools</div>
            <div>For Partners</div>
            <div>For Developers</div>
            <div>For the Community</div>
          </div>
          <div className="community-info-container">
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
      <div className="footer">
        <div className="logo-small">roamingterra</div>
        <div className="legal-information">
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
          <div>EULA</div>
          <div>Copyright</div>
        </div>
        <div className="credits">
          Website created by Daniel Ballerini 🇨🇦 with help from{" "}
          <a href="https://www.theodinproject.com/"> © Odin Project</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
