import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product">
      <img src={`/shopping-cart/images/${product.image}`} alt={product.name} />
      <div className="card-top">
        <span className="score">
          Score: <strong>{product.score}</strong>
        </span>
        <button className="add-to-cart" onClick={() => onAdd(product)}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
      <div className="bottom-part">
        <h1 className="item-name">{product.name}</h1>
        <div className="price">R${product.price}</div>
      </div>
    </div>
  );
}

export default Product;
