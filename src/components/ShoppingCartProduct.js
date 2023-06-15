import React from "react";
import shoppingCartProductsCss from "./../styles/shopping-cart-products.module.css";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { mdiMinus } from "@mdi/js";
import { mdiPlus } from "@mdi/js";

function Product(props) {
  const { productName, image, price, removeProduct } = props;

  function handleXClick() {
    const product = productName.toLowerCase();
    removeProduct(product);
  }

  return (
    <div
      data-testid={`${productName}-shopping-cart`}
      className={shoppingCartProductsCss["product"]}
    >
      <img
        className={shoppingCartProductsCss["product-image"]}
        src={image}
        alt={productName}
      ></img>
      <div className={shoppingCartProductsCss["section-2"]}>
        <div className={shoppingCartProductsCss["product-name"]}>
          {productName}
        </div>
        <div className={shoppingCartProductsCss["stepper"]}>
          <Icon
            data-testid={`${productName}-decrement`}
            className={shoppingCartProductsCss["decrement"]}
            path={mdiMinus}
            size={1}
          />
          <div className={shoppingCartProductsCss["quantity"]}></div>
          <Icon
            data-testid={`${productName}-increment`}
            className={shoppingCartProductsCss["increment"]}
            path={mdiPlus}
            size={1}
          />
        </div>
      </div>
      <div className={shoppingCartProductsCss["section-3"]}>
        <Icon
          data-testid={`${productName}-cancel`}
          className={`${
            shoppingCartProductsCss[`remove-product`]
          } ${productName}`}
          path={mdiWindowClose}
          size={1}
          onClick={handleXClick}
        />
        <div>{`$${price}`}</div>
      </div>
    </div>
  );
}

export default Product;
