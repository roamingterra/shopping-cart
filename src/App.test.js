import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Home from "./components/Home";
import Shopping from "./components/Shopping";

// ROUTE TESTING
describe("Test Routing Works", () => {
  // Test the web app starting at the home page
  test("Initial navigation to the home page", () => {
    const { asFragment } = render(
      // asFragment returns a serializable representation of the rendered component's output.
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  // Test the routing behavior from the home page to the shopping page
  test("Navigate to the shopping page", () => {
    render(
      // Memory Router simulates routing behavior
      <MemoryRouter initialEntries={["/"]}>
        <Home />
        <Shopping />
      </MemoryRouter>
    );

    // Get all the buttons with the text "shopping"
    const shoppingButtons = screen.getAllByText("Shop");

    // Assert that there are multiple buttons
    expect(shoppingButtons).toHaveLength(2);

    // Iterate over the buttons and simulate a click event
    shoppingButtons.forEach((button) => {
      fireEvent.click(button);

      // Assert that the navigation occurred
      const shoppingPage = screen.getByTestId("shopping-page");
      expect(shoppingPage).toBeInTheDocument();
    });
  });
});

// LOGIC TESTING
describe("Add to shopping cart", () => {
  // Test the functionality of the add to cart buttons. Fire a mock "add to cart" button, and test if that item appears in the shopping cart in the dom
  test("functionality of add to cart buttons", () => {
    // Arrange
    render(
      <MemoryRouter>
        <Shopping />
      </MemoryRouter>
    );

    // Act
    const addToCartButton = screen.getByTestId("English-add-to-cart");
    fireEvent.click(addToCartButton);

    //Assert
    const product = screen.getByTestId("English-shopping-cart");
    expect(product).toBeInTheDocument();
  });
});

describe("Change product quantity logic", () => {
  // Test the functionality of the increment and decrement buttons for the item quantities.
  // Fire a mock increment button, and test for the correct total
  test.skip("functionality of incrementing the product quantity", () => {
    // Arrange
    render(
      <MemoryRouter>
        <Shopping />
      </MemoryRouter>
    );

    // Act
    const addToCartButton = screen.getByTestId("English-add-to-cart");
    fireEvent.click(addToCartButton);
    const incrementButton = screen.getByTestId("English-increment");

    //Assert
    fireEvent.click(incrementButton);
    const total = screen.getByTestId("total");
    expect(total).toHaveTextContent("$200");
  });

  test.skip("functionality of decrementing the product quantity", () => {
    // Arrange
    render(
      <MemoryRouter>
        <Shopping />
      </MemoryRouter>
    );

    // Act
    const addToCartButton = screen.getByTestId("English-add-to-cart");
    fireEvent.click(addToCartButton);
    const incrementButton = screen.getByTestId("English-increment");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    //Assert
    const decrementButton = screen.getByTestId("English-decrement");
    fireEvent.click(decrementButton);
    const total = screen.getByTestId("total");
    expect(total).toHaveTextContent("$200");
  });

  test.skip("remove product from shopping cart after decrementing from 1", () => {
    // Arrange
    render(
      <MemoryRouter>
        <Shopping />
      </MemoryRouter>
    );

    // Act
    const addToCartButton = screen.getByTestId("English-add-to-cart");
    fireEvent.click(addToCartButton);

    //Assert
    const product = screen.getByTestId("English-shopping-cart");
    const decrementButton = screen.getByTestId("English-decrement");
    fireEvent.click(decrementButton);
    expect(product).not.toBeInTheDocument();
  });

  test("remove product from shopping cart after pressing the cancel button", () => {
    // Arrange
    render(
      <MemoryRouter>
        <Shopping />
      </MemoryRouter>
    );

    // Act
    const addToCartButton = screen.getByTestId("English-add-to-cart");
    fireEvent.click(addToCartButton);

    //Assert
    const product = screen.getByTestId("English-shopping-cart");
    const cancel = screen.getByTestId("English-cancel");
    fireEvent.click(cancel);
    expect(product).not.toBeInTheDocument();
  });
});
