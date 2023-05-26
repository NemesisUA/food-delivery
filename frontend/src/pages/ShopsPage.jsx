import { useState, useEffect } from "react";
import { Card } from "../components/UI/Card/Card";

const ShopsPage = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const json = await response.json()
      console.log('json:', json);
      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className='wrapper flex-wrapper'>
      <ul className='shops-list'>
        <li>KFC</li>
        <li>McDonny</li>
        <li>BurgerKing</li>
      </ul>

      <ul className='products-list'>
        { products && products.length > 0 && products.map( product => (
          <li key={product._id}>
            <Card 
              title={product.name} 
              src={product.image} 
              price={product.price} 
            />
          </li>
        ))}        
      </ul>
    </div>
  )
}

export default ShopsPage