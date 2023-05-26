import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import { Card } from "../components/UI/Card/Card";

const SingleShopPage = () => {
  const [products, setProducts] = useState(null)
  const shop = useParams().shop;
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products/${shop}/`)
      const json = await response.json()

      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className='wrapper flex-wrapper'>
      <ul className='shops-list'>
        <li className='selected'>{shop}</li>        
      </ul>
      
      <div className='products-list'>
        {products && products.length > 0 && products.map(product => (
          <Link key={product._id} to={`/${product.shop}`} >
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SingleShopPage