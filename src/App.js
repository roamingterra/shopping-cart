import Home from "./components/Home";
import Shopping from "./components/Shopping.js";

function App() {
  // STRUCTURE OF THE APP

  // Router (component): 1. Home page 2. Shopping page

  // Home page (component): Contains only styling, information, assets, and a shopping button that
  // to the shopping page. The shopping button will be the only functional button navigates the user

  // Shopping page (component): Contains styling, various products (components), and a sticky bar
  // that contains the shopping cart. Each product component will be effectively the same component,
  // but with different props being sent back and forth for the different product images, titles,
  // descriptions, and quantities selected. Each product component will render a unique image, a product
  // title, a product description, a quantity field, quantity buttons, and an add to cart button.
  // The state of each product shall be managed by the shopping cart component, the product information
  // and the necessary functions to handle the product logic will be passed down as props.

  // The look of the app will take inspiration from the following websites:

  // musixmatch for the home page and the shopping page
  // https://about.musixmatch.com/pro?utm_source=musixmatch_website&utm_campaign=pro_announcement&utm_content=header_nav

  // allbirds for the sticky bar and shopping cart
  // https://www.allbirds.com/collections/best-for-traveling-mens

  return (
    <div className="App">
      <Home></Home>
      {/* <Shopping></Shopping> */}
    </div>
  );
}

export default App;
