import React, { useState } from 'react';
import './Basket.css';
function Basket(props) {
  const { cartItems, onAdd, onRemove, showAndHide, onCheckout, checkoutDone } =
    props;
  const [checkout, setCheckout] = useState(false);
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 250 ? 0 : 10;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <div className={showAndHide === true ? 'sidenav hide' : 'sidenav'}>
      {checkout === false && (
        <>
          <h2>Cart Items</h2>
          <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
        </>
      )}

      {cartItems.map((item) => (
        <div className="basketItem" key={item.id}>
          <div className="image-and-title">
            <img src={`/shopping-cart/images/${item.image}`} alt="" />
            <div className="basketItemName">{item.name}</div>
          </div>
          <div className="btn-and-qty">
            <div>
              <div className="qtyBtn">
                <button onClick={() => onRemove(item)}>-</button>
              </div>
              <div className="qty">{item.qty}x</div>
              <div className="qtyBtn">
                <button onClick={() => onAdd(item)}>+</button>
              </div>
            </div>
          </div>
          <div className="item-price">R${item.price}</div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div className="purchase-details">
          <div>Subtotal: R${itemsPrice.toFixed(2)}</div>
          <div>
            {shippingPrice === 0
              ? 'Free Shipping'
              : `Shipping: R$${shippingPrice.toFixed(2)}`}
          </div>
          <div>Total: R${totalPrice.toFixed(2)}</div>
        </div>
      )}
      {cartItems.length !== 0 && (
        <div
          onClick={() => {
            onCheckout();
            setCheckout(true);
          }}
          className="checkout"
        >
          <span>Checkout</span>
        </div>
      )}
      {checkoutDone === true && (
        <div className="finalCheckout">
          <img src="/shopping-cart/images/checked.png" alt="" />
          <div>
            <h1>Thank you.</h1>
            <p>Your order was completed successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
