import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { mdiWindowClose } from "@mdi/js";
import Product from "./Product";
import ShoppingCartProduct from "./ShoppingCartProduct";
import shoppingCss from "./../styles/shopping.module.css";
import { Link } from "react-router-dom";

function Shopping() {
  // State objects and variables
  const [cartProductQuantities, setCartProductQuantities] = useState({
    english: 0,
    french: 0,
    mandarin: 0,
    spanish: 0,
    german: 0,
    japanese: 0,
    italian: 0,
    portuguese: 0,
    hindi: 0,
    arabic: 0,
  });

  const [productToBeAdded, setProductToBeAdded] = useState(""); // Used after add to cart button press to add to state cartProductQuantities and to determine whether to add to the UI shopping cart
  const [cartItems, setCartItems] = useState([]); // All user chosen items that are meant to exist in the UI shopping cart
  const [updateShoppingCart, setUpdateShoppingCart] = useState(false); // Used to trigger the useEffect hook
  const [productToBeRemoved, setProductToBeRemoved] = useState(""); // Used after item X button press to queue for removal from to state cartProductQuantities and UI shopping cart
  const [productToBeIncremented, setProductToBeIncremented] = useState(""); // Used after item + button press to queue for incrementing the quantity in cartProductQuantities and UI shopping cart
  const [productToBeDecremented, setProductToBeDecremented] = useState(""); // Used after item - button press to queue for decrementing the quantity in cartProductQuantities and UI shopping cart
  const [totalNumOfItems, setTotalNumOfItems] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  // Product info object
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

  // Style changing functions
  function retractSideBar() {
    const sidebar = document.querySelector(".shopping_side-bar__JgP6O");
    const overlay = document.querySelector(".shopping_overlay__lhS4s");
    sidebar.removeAttribute("id", `${shoppingCss["side-bar-extended"]}`);
    overlay.style.visibility = "hidden";
  }

  function extendSideBar() {
    const sidebar = document.querySelector(".shopping_side-bar__JgP6O");
    const overlay = document.querySelector(".shopping_overlay__lhS4s");
    sidebar.setAttribute("id", `${shoppingCss["side-bar-extended"]}`);
    overlay.style.visibility = "visible";
  }

  function whitePageBackground() {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    html.style.backgroundColor = "white";
    body.style.backgroundColor = "white";
  }

  function emptyCartToggle() {
    const emptyMessage = document.querySelector(
      ".shopping_shopping-cart-empty-message__KOway"
    );
    const cartItems = document.querySelector(
      ".shopping_side-bar-main-content__v3MWc"
    );
    emptyMessage.style.display = "flex";
    cartItems.style.display = "none";
  }

  function populatedCartToggle() {
    const emptyMessage = document.querySelector(
      ".shopping_shopping-cart-empty-message__KOway"
    );
    const cartItems = document.querySelector(
      ".shopping_side-bar-main-content__v3MWc"
    );
    emptyMessage.style.display = "none";
    cartItems.style.display = "flex";
  }

  function addProductsToPhysicalCart() {
    // Add item to physical, UI shopping cart if it's not already there
    let addThisToCartItems = true;
    cartItems.map((item) => {
      if (item === productToBeAdded) {
        addThisToCartItems = false;
        return 0;
      }
      return 0;
    });
    if (addThisToCartItems) {
      setCartItems((prevState) => {
        return [...prevState, productToBeAdded];
      });
    }
  }

  whitePageBackground();

  // Logic functions
  function addItemToCart(product) {
    setProductToBeAdded(product);
    setUpdateShoppingCart(true);
  }

  function removeProduct(product) {
    setProductToBeRemoved(product);
  }

  function incrementProductQuantity(product) {
    setProductToBeIncremented(product);
  }

  function decrementProductQuantity(product) {
    setProductToBeDecremented(product);
  }

  // useEffect Hook
  useEffect(() => {
    if (updateShoppingCart === true) {
      setCartProductQuantities((prevState) => {
        const updatedCartProductQuantities = Object.fromEntries(
          Object.entries(prevState).map(([key, value]) => {
            if (String(key) === productToBeAdded) {
              return [key, value + 1];
            } else {
              return [key, value];
            }
          })
        );

        return updatedCartProductQuantities;
      });
      setUpdateShoppingCart(false);
      extendSideBar();

      // Add item to physical, UI shopping cart if it's not already there
      addProductsToPhysicalCart();
      setProductToBeAdded("");
    }

    if (productToBeRemoved !== "") {
      //remove product from cartItems
      setCartItems((prevState) => {
        return prevState
          .map((item) => {
            if (item !== productToBeRemoved) return item;
            return null;
          })
          .filter((item) => item !== null);
      });
      setCartProductQuantities((prevState) => {
        const updatedCartProductQuantities = Object.fromEntries(
          Object.entries(prevState).map(([key, value]) => {
            if (String(key).toLowerCase() === productToBeRemoved) {
              return [key, 0];
            } else {
              return [key, value];
            }
          })
        );

        return updatedCartProductQuantities;
      });
      setProductToBeRemoved("");
    }

    if (productToBeIncremented !== "") {
      setCartProductQuantities((prevState) => {
        const updatedCartProductQuantities = Object.fromEntries(
          Object.entries(prevState).map(([key, value]) => {
            if (String(key).toLowerCase() === productToBeIncremented) {
              return [key, value + 1];
            } else {
              return [key, value];
            }
          })
        );

        return updatedCartProductQuantities;
      });
      setProductToBeIncremented("");
    }

    if (productToBeDecremented !== "") {
      setCartProductQuantities((prevState) => {
        const updatedCartProductQuantities = Object.fromEntries(
          Object.entries(prevState).map(([key, value]) => {
            if (String(key).toLowerCase() === productToBeDecremented) {
              if (value === 1) {
                setProductToBeRemoved(key);
                return [key, value];
              }
              return [key, value - 1];
            } else {
              return [key, value];
            }
          })
        );

        return updatedCartProductQuantities;
      });
      setProductToBeDecremented("");
    }

    // Calculate and set total number of items
    setTotalNumOfItems(() => {
      return Math.round(
        Object.values(cartProductQuantities).reduce((acc, value) => {
          return acc + value;
        }, 0)
      );
    });

    // Calculate and set to total price
    setCartTotalPrice(() => {
      return Math.round(
        Object.entries(cartProductQuantities).reduce((acc, [key, value]) => {
          const totalPrice = value * productInfo.pricing[key];
          return acc + totalPrice;
        }, 0)
      );
    });

    // Toggle empty/populated cart views
    console.log(cartItems);
    if (cartItems.length === 0) {
      emptyCartToggle();
    } else {
      populatedCartToggle();
    }
  }, [
    updateShoppingCart,
    productToBeRemoved,
    productToBeIncremented,
    productToBeDecremented,
  ]);

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
            onClick={retractSideBar}
          />
          <div className={shoppingCss["side-bar-shopping-cart"]}>
            <div>{totalNumOfItems}</div>
            <Icon path={mdiCartOutline} title="Shopping Cart" size={2} />
          </div>
        </div>
        <div className={shoppingCss["shopping-cart-empty-message"]}>
          Your cart is empty
        </div>
        <div className={shoppingCss["side-bar-main-content"]}>
          <div className={shoppingCss["side-bar-products"]}>
            {/* Render the product items */}
            {cartItems.map((item, index) => (
              <ShoppingCartProduct
                key={index}
                productName={productInfo.productNames[item]}
                image={productInfo.imagePaths[item]}
                price={productInfo.pricing[item]}
                removeProduct={removeProduct}
                quantity={cartProductQuantities[item]}
                incrementProductQuantity={incrementProductQuantity}
                decrementProductQuantity={decrementProductQuantity}
              />
            ))}
          </div>
          <div className={shoppingCss["side-bar-sub-total"]}>
            <div>Subtotal</div>
            <div
              data-testid="total"
              className={shoppingCss["total"]}
            >{`$${cartTotalPrice}`}</div>
          </div>
          <button className={shoppingCss["side-bar-checkout"]}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
      <div className={shoppingCss["overlay"]} onClick={retractSideBar}></div>
      <div className={shoppingCss["content-and-footer-wrapper"]}>
        <div className={shoppingCss["content-wrapper"]}>
          <div className={shoppingCss["header"]}>
            <Link to="/">
              <div className={shoppingCss["logo-large"]}>
                <div>roamingterra</div>
              </div>
            </Link>
            <div className={shoppingCss["shopping-cart"]}>
              <div>{totalNumOfItems}</div>
              <Icon
                path={mdiCartOutline}
                title="Shopping Cart"
                size={2}
                onClick={extendSideBar}
              />
            </div>
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
              addItemToCart={addItemToCart}
            ></Product>
            <Product
              productName={productInfo.productNames.french}
              image={productInfo.imagePaths.french}
              description={productInfo.descriptions.french}
              price={productInfo.pricing.french}
              addItemToCart={addItemToCart}
            ></Product>
            <Product
              productName={productInfo.productNames.mandarin}
              image={productInfo.imagePaths.mandarin}
              description={productInfo.descriptions.mandarin}
              price={productInfo.pricing.mandarin}
              addItemToCart={addItemToCart}
              extendSideBar={extendSideBar}
            ></Product>
            <Product
              productName={productInfo.productNames.spanish}
              image={productInfo.imagePaths.spanish}
              description={productInfo.descriptions.spanish}
              price={productInfo.pricing.spanish}
              addItemToCart={addItemToCart}
            ></Product>
            <Product
              productName={productInfo.productNames.german}
              image={productInfo.imagePaths.german}
              description={productInfo.descriptions.german}
              price={productInfo.pricing.german}
              addItemToCart={addItemToCart}
            ></Product>
            <Product
              productName={productInfo.productNames.japanese}
              image={productInfo.imagePaths.japanese}
              description={productInfo.descriptions.japanese}
              price={productInfo.pricing.japanese}
              addItemToCart={addItemToCart}
            ></Product>
            <Product
              productName={productInfo.productNames.italian}
              image={productInfo.imagePaths.italian}
              description={productInfo.descriptions.italian}
              price={productInfo.pricing.italian}
              addItemToCart={addItemToCart}
            ></Product>
            <Product
              productName={productInfo.productNames.portuguese}
              image={productInfo.imagePaths.portuguese}
              description={productInfo.descriptions.portuguese}
              price={productInfo.pricing.portuguese}
              addItemToCart={addItemToCart}
            ></Product>
            <Product
              productName={productInfo.productNames.hindi}
              image={productInfo.imagePaths.hindi}
              description={productInfo.descriptions.hindi}
              price={productInfo.pricing.hindi}
              addItemToCart={addItemToCart}
            ></Product>
            <Product
              productName={productInfo.productNames.arabic}
              image={productInfo.imagePaths.arabic}
              description={productInfo.descriptions.arabic}
              price={productInfo.pricing.arabic}
              addItemToCart={addItemToCart}
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
