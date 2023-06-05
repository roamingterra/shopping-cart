import logo from "./logo.svg";
import "./App.css";

function App() {
  // STRUCTURE OF THE APP

  // Router: 1. Home page 2. Shopping page

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
