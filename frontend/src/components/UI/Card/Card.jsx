import React, { useContext } from 'react'
import './Card.css'

const Card = ({ product}) => { 

  return (
    <div className='card'>
      <h2 className='card__title' >{product.name}</h2>
      <p className='card__shop'>{product.shop}</p>
      <img className='card__image' src={product.image} alt="food photo" />
      <h4 className='card__price'>{`price - $${product.price}`}</h4>
    </div>
  )
}

export { Card }