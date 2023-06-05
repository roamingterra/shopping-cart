import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Out of the box test that will eventually be deleted
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test the rendering of the home page

// Test the routing behavior from the home page to the shopping page

// Test the rendering of the shopping page

// Test the functionality of the input fields for the user to manually type in the item quantities

// Test the functionality of the increment and decrement buttons for the item quantities

// Test the functionality of the add to cart buttons

// Test adding multiple items to the shopping cart and see if the cart correctly displays the total...
// quantity and the total price

// Perform accessibility tests to ensure the components are accessible and responsive across various devices
