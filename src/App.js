import { useState } from 'react';
import './App.css';
import Basket from './components/Basket/Basket';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from './products/products.json';
function App() {
  //Products list
  let products = data;

  const [cartItems, setCartItems] = useState([]);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [sidebar, setSidebar] = useState(true);

  //Add product on basket or add one more for the product
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    setCheckoutDone(false);
  };

  //Remove product from the basket
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //Check if the sidebar was clicked to open
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  //Check if the checkout button was clicked, if so clean the cart items
  const handleCheckout = () => {
    setCartItems([]);
    setCheckoutDone(true);
  };
  return (
    <div className="App">
      <div className="fixedBar">
        <Header
          countCartItems={cartItems.length}
          handleSidebar={handleSidebar}
        />
      </div>
      <div className="mainContent">
        <Main showAndHide={sidebar} onAdd={onAdd} products={products} />
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
          showAndHide={sidebar}
          onCheckout={handleCheckout}
          checkoutDone={checkoutDone}
        />
      </div>
    </div>
  );
}

export default App;
