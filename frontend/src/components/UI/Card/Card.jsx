import React, { useContext } from 'react'
import './Card.css'
import { ThemeContext } from '../../../hoc/ThemeProvider'

const Card = (props) => {
  const { title, src, price } = props;
  const { theme } = useContext(ThemeContext);  

  return (
    <div className='card'>
      <h3 className='card__title' >{title}</h3>
      <img className='card__image' src={src} alt="food photo" />
      <h4 className='card__price'>{`price - $${price}`}</h4>
    </div>
  )
}

export { Card }