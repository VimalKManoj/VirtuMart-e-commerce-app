import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {id} = useParams
  return (
    <div>ProductDetails</div>
  )
}

export default Product