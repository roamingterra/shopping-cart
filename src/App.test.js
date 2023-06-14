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
// Test the functionality of the input fields for the user to manually type in the item quantities

// Test the functionality of the increment and decrement buttons for the item quantities

// Test the functionality of the add to cart buttons

// Test adding multiple items to the shopping cart and see if the cart correctly displays the total...
// quantity and the total price

// ACCESSIBILITY TESTING ???
// Perform accessibility tests to ensure the components are accessible and responsive across various devices
