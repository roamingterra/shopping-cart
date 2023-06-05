import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import Product from "./components/Product";

// SNAPSHOT TESTS
// Test the rendering of the home page
describe("Home component", () => {
  it("Renders correctly", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

// Test the rendering of the shopping page
describe("Shopping component", () => {
  it("Renders correctly", () => {
    const { container } = render(<Shopping />);
    expect(container).toMatchSnapshot();
  });
});

// ROUTE TESTING
// Test the routing behavior from the home page to the shopping page

// LOGIC TESTING
// Test the functionality of the input fields for the user to manually type in the item quantities

// Test the functionality of the increment and decrement buttons for the item quantities

// Test the functionality of the add to cart buttons

// Test adding multiple items to the shopping cart and see if the cart correctly displays the total...
// quantity and the total price

// ACCESSIBILITY TESTING ???
// Perform accessibility tests to ensure the components are accessible and responsive across various devices
