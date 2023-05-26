import React from 'react'
import './styles/Cart.css'

function CartPage() {
  return (
    <div className='wrapper flex-wrapper'>
      <div className='order-user'>
        <p>form component here</p>
      </div>

      <div className='order-products'>
       <p>product 1</p>
       <p>product 2</p>
       <p>product 3</p>
      </div>
    </div>
  )
}

export default CartPage