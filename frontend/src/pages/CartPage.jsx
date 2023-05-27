import { useContext, useEffect, useRef, useState } from 'react'
import './styles/CartPage.css'
import CartItem from '../components/CartItem/CartItem';
import { LocalStorageService, LS_KEYS } from "../servises/localStorage";
import { CartContext } from "../hoc/CartProvider";
import Button from '../components/UI/Button/Button';

function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext || []);

  const [totalPrice, setTotalPrice] = useState([...cartItems].reduce((acc, cur) => {
    return acc + +cur.price * cur.amount
  }, 0).toFixed(2) || 0);
  
  useEffect(() => {
    setTotalPrice([...cartItems].reduce((acc, cur) => {
      return acc + +cur.price * cur.amount
    }, 0).toFixed(2) || 0);
  }, [cartItems, totalPrice]);

  const handlePurchase = (e) => {
    e.preventDefault();
    setCartItems(() => []);
    LocalStorageService.remove(LS_KEYS.CART);
    LocalStorageService.set(LS_KEYS.CART, []);
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handlePurchase}>
        <div className='flex-wrapper'>
          <div className='order-user'>
            <p>form component here</p>
          </div>

          <div className='order-products'>

            <div className="cart-container">{
              cartItems && cartItems.length >= 1 &&
              cartItems.sort((a, b) => a.id - b.id)
                .map(item => (                  
                    <CartItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                    />                  
                ))
            }
            </div>
          </div>
        </div>

        <div className='order-wrapper'>
          <Button >Submit Order</Button>
          <p className='total-price'>Total Price: <b>${totalPrice || 0}</b></p>
        </div>
      </form>
    </div>
  )
}

export default CartPage