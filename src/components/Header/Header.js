import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Header(props) {
  const { countCartItems, handleSidebar } = props;
  return (
    <header>
      <div>
        <h1 className="header-title">Supera</h1>
      </div>
      {/* <div>
        <input className="search-bar" type="text" placeholder="Search..." />
      </div> */}
      <div>
        <div className="cart" onClick={() => handleSidebar()}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {countCartItems ? (
            <button className="cartitems">{countCartItems}</button>
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
