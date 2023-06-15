import React from "react";
import shoppingCss from "./../styles/shopping.module.css";

function Product(props) {
  const { productName, image, description, price, addItemToCart } = props;

  function handleClick() {
    const product = productName.toLowerCase();
    addItemToCart(product);
  }

  return (
    <div className={shoppingCss["product"]}>
      <h1>{productName}</h1>
      <img
        className={shoppingCss["product-image"]}
        src={image}
        alt="product"
      ></img>
      <div className={shoppingCss["product-price"]}>
        <div>{`$${price}`}</div>
        <div>one time payment</div>
      </div>
      <button
        data-testid={`${productName}-add-to-cart`}
        className={shoppingCss["add-to-cart"]}
        onClick={handleClick}
      >
        ADD TO CART
      </button>
      <ul className={shoppingCss["product-descriptions"]}>
        <li className={shoppingCss["product-description"]}>{description[0]}</li>
        <li className={shoppingCss["product-description"]}>{description[1]}</li>
        <li className={shoppingCss["product-description"]}>{description[2]}</li>
      </ul>
    </div>
  );
}

export default Product;
