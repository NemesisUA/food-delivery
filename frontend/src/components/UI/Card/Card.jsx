import React, { useContext } from 'react'
import Button from '../Button/Button'
import './Card.css'

const Card = ({ product, button = false}) => { 

  return (
    <div className='card'>
      <h2 className='card__title' >{product.name}</h2>
      <p className='card__shop'>{product.shop}</p>
      <img className='card__image' src={product.image} alt="food photo" />
      <div className='card__buy'>
        <h4 className='card__price'>{`price - $${product.price}`}</h4>
        { button && <Button children={button} className='styled-btn transparent' />}
      </div>
      
    </div>
  )
}

export { Card }