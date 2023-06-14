import React from "react";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { mdiWindowClose } from "@mdi/js";
import Product from "./Product";
import ShoppingCartProduct from "./ShoppingCartProduct";
import shoppingCss from "./../styles/shopping.module.css";
import { Link } from "react-router-dom";

function Shopping() {
  const productInfo = {
    productNames: {
      english: "English",
      french: "French",
      mandarin: "Mandarin",
      spanish: "Spanish",
      german: "German",
      japanese: "Japanese",
      italian: "Italian",
      portuguese: "Portuguese",
      hindi: "Hindi",
      arabic: "Arabic",
    },
    imagePaths: {
      english: "/images/united-states-flag.png",
      french: "/images/france-flag.png",
      mandarin: "/images/china-flag.png",
      spanish: "/images/spain-flag.png",
      german: "/images/germany-flag.png",
      japanese: "/images/japan-flag.png",
      italian: "/images/italy-flag.png",
      portuguese: "/images/brazil-flag.webp",
      hindi: "/images/india-flag.png",
      arabic: "/images/lebanon-flag.png",
    },
    descriptions: {
      english: [
        "Widely spoken worldwide",
        "Language of business, travel, and academia",
        "Immerse yourself in English literature and entertainment",
      ],
      french: [
        "Dive into the language of love and sophistication",
        "Experience the elegance of French cuisine, fashion, and arts",
        "Expand your career prospects with fluency in the language of diplomacy",
      ],
      mandarin: [
        "Spoken by over a billion people",
        "Vibrant culture, profound history, and booming business opportunities",
        "Gain an edge in an increasingly interconnected world",
      ],
      spanish: [
        "Immerse yourself in the passion and vibrancy of the Spanish-speaking world",
        "Explore diverse cultures across Spain and Latin America",
        "Expand your horizons and connect with millions of Spanish speakers",
      ],
      german: [
        "Discover the language of precision, engineering, and innovation",
        "Immerse yourself in Germany's rich cultural heritage",
        "Career opportunities in industries such as automotive and technology",
      ],
      japanese: [
        "Japan Blends tradition with technological prowess",
        "Dive into Japanese pop culture",
        "One of Asia's economic powerhouses",
      ],
      italian: [
        "Indulge in the language of art, music, and exquisite cuisine",
        "Discover Italy's historic cities, breathtaking landscapes, and renowned fashion",
        "Unlock the treasures of Italy's rich cultural heritage",
      ],
      portuguese: [
        "The language of Brazil and Portugal",
        "Explore diverse ecosystems and vibrant festivals of Portuguese-speaking countries",
        "Connect with millions of Portuguese speakers across continents",
      ],
      hindi: [
        "Dive into the colorful world of Bollywood, music, and spirituality",
        "Explore the diverse cultures and traditions of India",
        "Connect with a billion Hindi speakers worldwide",
      ],
      arabic: [
        "Embark on a journey to the cradle of civilization",
        "Discover the poetic nature of Arabic script",
        "Gain a competitive edge in diplomacy and business in the Middle East and North Africa",
      ],
    },
    pricing: {
      english: 99.99,
      french: 79.99,
      mandarin: 109.99,
      spanish: 89.99,
      german: 79.99,
      japanese: 99.99,
      italian: 79.99,
      portuguese: 79.99,
      hindi: 89.99,
      arabic: 99.99,
    },
  };

  function whitePageBackground() {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    html.style.backgroundColor = "white";
    body.style.backgroundColor = "white";
  }

  whitePageBackground();

  return (
    <div
      data-testid="shopping-page"
      className={shoppingCss["shopping-component"]}
    >
      <div className={shoppingCss["side-bar"]}>
        <div className={shoppingCss["side-bar-header"]}>
          <Icon
            className={shoppingCss["side-bar-close"]}
            path={mdiWindowClose}
            size={2}
          />
          <Icon
            className={shoppingCss["side-bar-shopping-cart"]}
            path={mdiCartOutline}
            title="Shopping Cart"
            size={2}
          />
        </div>
        <div className={shoppingCss["shopping-cart-empty-message"]}>
          Your cart is empty
        </div>
        <div className={shoppingCss["side-bar-main-content"]}>
          <div className={shoppingCss["side-bar-products"]}>
            {/* <ShoppingCartProduct
              productName={productInfo.productNames.english}
              image={productInfo.imagePaths.english}
              price={productInfo.pricing.english}
            ></ShoppingCartProduct> */}
            {/* <ShoppingCartProduct
              productName={productInfo.productNames.french}
              image={productInfo.imagePaths.french}
              price={productInfo.pricing.french}
            ></ShoppingCartProduct> */}
            {/* <ShoppingCartProduct
              productName={productInfo.productNames.arabic}
              image={productInfo.imagePaths.arabic}
              price={productInfo.pricing.arabic}
            ></ShoppingCartProduct> */}
            {/* <ShoppingCartProduct
              productName={productInfo.productNames.spanish}
              image={productInfo.imagePaths.spanish}
              price={productInfo.pricing.spanish}
            ></ShoppingCartProduct> */}
            {/* <ShoppingCartProduct
              productName={productInfo.productNames.mandarin}
              image={productInfo.imagePaths.mandarin}
              price={productInfo.pricing.mandarin}
            ></ShoppingCartProduct> */}
          </div>
          <div className={shoppingCss["side-bar-sub-total"]}>
            <div>Subtotal</div>
            <div className={shoppingCss["total"]}>$100</div>
          </div>
          <button className={shoppingCss["side-bar-checkout"]}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
      <div className={shoppingCss["overlay"]}></div>
      <div className={shoppingCss["content-and-footer-wrapper"]}>
        <div className={shoppingCss["content-wrapper"]}>
          <div className={shoppingCss["header"]}>
            <Link to="/">
              <div className={shoppingCss["logo-large"]}>
                <div>roamingterra</div>
              </div>
            </Link>
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
              productName={productInfo.productNames.english}
              image={productInfo.imagePaths.english}
              description={productInfo.descriptions.english}
              price={productInfo.pricing.english}
            ></Product>
            <Product
              productName={productInfo.productNames.french}
              image={productInfo.imagePaths.french}
              description={productInfo.descriptions.french}
              price={productInfo.pricing.french}
            ></Product>
            <Product
              productName={productInfo.productNames.mandarin}
              image={productInfo.imagePaths.mandarin}
              description={productInfo.descriptions.mandarin}
              price={productInfo.pricing.mandarin}
            ></Product>
            <Product
              productName={productInfo.productNames.spanish}
              image={productInfo.imagePaths.spanish}
              description={productInfo.descriptions.spanish}
              price={productInfo.pricing.spanish}
            ></Product>
            <Product
              productName={productInfo.productNames.german}
              image={productInfo.imagePaths.german}
              description={productInfo.descriptions.german}
              price={productInfo.pricing.german}
            ></Product>
            <Product
              productName={productInfo.productNames.japanese}
              image={productInfo.imagePaths.japanese}
              description={productInfo.descriptions.japanese}
              price={productInfo.pricing.japanese}
            ></Product>
            <Product
              productName={productInfo.productNames.italian}
              image={productInfo.imagePaths.italian}
              description={productInfo.descriptions.italian}
              price={productInfo.pricing.italian}
            ></Product>
            <Product
              productName={productInfo.productNames.portuguese}
              image={productInfo.imagePaths.portuguese}
              description={productInfo.descriptions.portuguese}
              price={productInfo.pricing.portuguese}
            ></Product>
            <Product
              productName={productInfo.productNames.hindi}
              image={productInfo.imagePaths.hindi}
              description={productInfo.descriptions.hindi}
              price={productInfo.pricing.hindi}
            ></Product>
            <Product
              productName={productInfo.productNames.arabic}
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
                    How long does it take to become fluent in a new language
                    using this software?
                  </div>
                </div>
                <img src="/images/arrow-icon.svg" alt="arrow icon"></img>
              </div>
              <div className={shoppingCss["faq"]}>
                <div>
                  <div>
                    Can I access the language learning materials offline?
                  </div>
                </div>
                <img src="/images/arrow-icon.svg" alt="arrow icon"></img>
              </div>
            </div>
          </div>
          <div className={shoppingCss["main-content-4"]}>
            <div>Let's talk</div>
            <div>
              Do you have any questions? Contact us and let's discuss it.
            </div>
            <button>Contact us</button>
          </div>
        </div>
        <div className={shoppingCss["footer"]}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className={shoppingCss["logo-small"]}>roamingterra</div>
          </Link>
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
    </div>
  );
}

export default Shopping;
