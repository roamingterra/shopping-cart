import React from "react";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import Product from "./Product";
import shoppingCss from "./../styles/shopping.module.css";

function Shopping() {
  const productInfo = {
    imagePaths: {
      english: "/images/united-states-flag.png",
      french: "/images/france-flag.png",
      mandarin: "/images/china-flag.png",
      spanish: "/images/spain-flag.png",
      german: "/images/germany-flag.png",
      japanese: "/images/japan-flag.png",
      italian: "/images/italy-flag.png",
      portuguese: "images/brazil-flag.png",
      hindi: "images/india-flag.png",
      arabic: "images/egypt-flag.png",
    },
    descriptions: {
      english: [
        "Widely spoken worldwide, mastering English opens doors to global opportunities.",
        "Discover a language that empowers effective communication in business, travel, and academia.",
        "Immerse yourself in English literature and entertainment, unlocking a world of captivating stories.",
      ],
      french: [
        "Dive into the language of love and sophistication, exploring the rich cultural heritage of France.",
        "Experience the elegance of French cuisine, fashion, and arts while conversing en français.",
        "Enhance your résumé and expand your career prospects with fluency in the language of diplomacy.",
      ],
      mandarin: [
        "Embrace the future by mastering the most spoken language in the world, connecting over a billion people.",
        "Unlock access to China's vibrant culture, profound history, and booming business opportunities.",
        "Challenge yourself with fascinating characters and tones, and gain an edge in an increasingly interconnected world.",
      ],
      spanish: [
        "Immerse yourself in the passion and vibrancy of the Spanish-speaking world, from flamenco to fiestas.",
        "Explore diverse cultures across Spain and Latin America, savoring the flavors of their cuisine.",
        "Expand your horizons and connect with millions of Spanish speakers, both personally and professionally.",
      ],
      german: [
        "Discover the language of precision, engineering, and innovation, spoken in the heart of Europe.",
        "Immerse yourself in Germany's rich cultural heritage, from classical music to cutting-edge technology.",
        "Open doors to career opportunities in industries such as automotive, technology, and renewable energy.",
      ],
      japanese: [
        "Embark on a journey through the fascinating world of Japan, blending tradition with technological prowess.",
        "Dive into the captivating realm of anime, manga, and video games, experiencing Japanese pop culture.",
        "Gain a competitive edge in business and forge strong connections with one of Asia's economic powerhouses.",
      ],
      italian: [
        "Indulge in the beauty of the Italian language, the language of art, music, and exquisite cuisine.",
        "Discover the timeless charm of Italy's historic cities, breathtaking landscapes, and world-renowned fashion.",
        "Learn Italian to truly immerse yourself in la dolce vita, unlocking the treasures of Italy's rich cultural heritage.",
      ],
      portuguese: [
        "Immerse yourself in the vibrant rhythms of Portuguese, the language of Brazil and Portugal.",
        "Explore the stunning beaches, diverse ecosystems, and vibrant festivals of Portuguese-speaking countries.",
        "Enhance your global perspective and connect with millions of Portuguese speakers across continents.",
      ],
      hindi: [
        "Dive into the colorful world of Bollywood, music, and spirituality through the Hindi language.",
        "Explore the diverse cultures and traditions of India, the world's largest democracy.",
        "Connect with a billion Hindi speakers worldwide and unlock opportunities in business, travel, and cultural exchange.",
      ],
      arabic: [
        "Embark on a journey to the cradle of civilization, unlocking the beauty and rich history of the Arabic language.",
        "Discover the poetic nature of Arabic script, and delve into the wisdom of ancient philosophical texts.",
        "Gain a competitive edge in diplomacy, business, and international relations in the Middle East and North Africa.",
      ],
    },
    pricing: {
      english: 99,
      french: 79,
      mandarin: 109,
      spanish: 89,
      german: 79,
      japanese: 99,
      italian: 79,
      portuguese: 79,
      hindi: 89,
      arabic: 99,
    },
  };

  function whitePageBackground() {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const root = document.querySelector("#root");
    html.style.backgroundColor = "white";
    body.style.backgroundColor = "white";
    root.style.backgroundColor = "white";
  }

  whitePageBackground();

  return (
    <div className={shoppingCss["shopping-component"]}>
      <div className={shoppingCss["content-wrapper"]}>
        <div className={shoppingCss["header"]}>
          <div className={shoppingCss["logo-large"]}>
            <div>roamingterra</div>
          </div>
          <Icon
            className={shoppingCss["shopping-cart"]}
            path={mdiCartOutline}
            title="Shopping Cart"
            size={2}
          />
        </div>
        <div className={shoppingCss["main-content-1"]}>
          Choose your language learning software
        </div>
        <div className={shoppingCss["main-content-2"]}>
          <Product
            image={productInfo.imagePaths.english}
            description={productInfo.descriptions.english}
            price={productInfo.pricing.english}
          ></Product>
          <Product
            image={productInfo.imagePaths.french}
            description={productInfo.descriptions.french}
            price={productInfo.pricing.french}
          ></Product>
          <Product
            image={productInfo.imagePaths.mandarin}
            description={productInfo.descriptions.mandarin}
            price={productInfo.pricing.mandarin}
          ></Product>
          <Product
            image={productInfo.imagePaths.spanish}
            description={productInfo.descriptions.spanish}
            price={productInfo.pricing.spanish}
          ></Product>
          <Product
            image={productInfo.imagePaths.german}
            description={productInfo.descriptions.german}
            price={productInfo.pricing.german}
          ></Product>
          <Product
            image={productInfo.imagePaths.japanese}
            description={productInfo.descriptions.japanese}
            price={productInfo.pricing.japanese}
          ></Product>
          <Product
            image={productInfo.imagePaths.italian}
            description={productInfo.descriptions.italian}
            price={productInfo.pricing.italian}
          ></Product>
          <Product
            image={productInfo.imagePaths.portuguese}
            description={productInfo.descriptions.portuguese}
            price={productInfo.pricing.portuguese}
          ></Product>
          <Product
            image={productInfo.imagePaths.hindi}
            description={productInfo.descriptions.hindi}
            price={productInfo.pricing.hindi}
          ></Product>
          <Product
            image={productInfo.imagePaths.arabic}
            description={productInfo.descriptions.arabic}
            price={productInfo.pricing.arabic}
          ></Product>
        </div>
        <div className={shoppingCss["main-content-3"]}>
          <div className={shoppingCss["main-content-3-title"]}>FAQs</div>
          <div className={shoppingCss["frequently-asked-questions"]}>
            <div className={shoppingCss["faq"]}>
              <div>
                <div>What are the cancellation terms?</div>
              </div>
              <img src="/images/arrow-icon.svg" alt="arrow icon"></img>
            </div>
            <div className={shoppingCss["faq"]}>
              <div>
                <div>
                  How long does it take to become fluent in a new language using
                  this software?
                </div>
              </div>
              <img src="/images/arrow-icon.svg" alt="arrow icon"></img>
            </div>
            <div className={shoppingCss["faq"]}>
              <div>
                <div>Can I access the language learning materials offline?</div>
              </div>
              <img src="/images/arrow-icon.svg" alt="arrow icon"></img>
            </div>
          </div>
        </div>
        <div className={shoppingCss["main-content-4"]}>
          <div>Let's talk</div>
          <div>Do you have any questions? Contact us and let's discuss it.</div>
          <button>Contact us</button>
        </div>
      </div>
      <div className={shoppingCss["footer"]}>
        <div className={shoppingCss["logo-small"]}>roamingterra</div>
        <div className={shoppingCss["legal-information"]}>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
          <div>EULA</div>
          <div>Copyright</div>
        </div>
        <div className={shoppingCss["credits"]}>
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

export default Shopping;
