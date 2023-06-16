import React from "react";
import shoppingCartProductsCss from "./../styles/shopping-cart-products.module.css";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { mdiMinus } from "@mdi/js";
import { mdiPlus } from "@mdi/js";

function Product(props) {
  const {
    productName,
    image,
    price,
    removeProduct,
    quantity,
    incrementProductQuantity,
    decrementProductQuantity,
  } = props;

  function handleXClick() {
    const product = productName.toLowerCase();
    removeProduct(product);
  }

  function handlePlusClick() {
    const product = productName.toLowerCase();
    incrementProductQuantity(product);
  }

  function handleMinusClick() {
    const product = productName.toLowerCase();
    decrementProductQuantity(product);
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
            onClick={handleMinusClick}
          />
          <div className={shoppingCartProductsCss["quantity"]}>{quantity}</div>
          <Icon
            data-testid={`${productName}-increment`}
            className={shoppingCartProductsCss["increment"]}
            path={mdiPlus}
            size={1}
            onClick={handlePlusClick}
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
