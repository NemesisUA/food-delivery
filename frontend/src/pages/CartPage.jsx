import { useContext, useEffect } from 'react'
import './styles/Cart.css'
import { LocalStorageService, LS_KEYS } from "../servises/localStorage";
import { CartContext } from "../hoc/CartProvider";

function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const totalPrice = [...cartItems].reduce((acc, cur) => { return acc + +cur.price }, 0).toFixed(2);

  const handlePurchase = (e) => {
    e.preventDefault();
    setCartItems(() => []);
    LocalStorageService.remove(LS_KEYS.CART);
  }

  return (
    <>
      <div className='wrapper flex-wrapper'>
        <div className='order-user'>
          <p>form component here</p>
        </div>

        <div className='order-products'>
          <form onSubmit={handlePurchase}>
            <ul className="cart-container">{
              cartItems.map(item => (
                <li key={item.id}>
                  <p> name={item.name} price={item.price}</p>
                </li>
              ))
            }
            </ul>
          </form>
        </div>
      </div>
      <h2>Total Price: {totalPrice}</h2>
    </>
  )
}

export default CartPage