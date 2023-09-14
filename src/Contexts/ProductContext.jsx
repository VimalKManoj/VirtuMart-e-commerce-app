import React, { createContext, useState } from 'react'

export const ProdContext = createContext([]);
 const ProductContext = ({children}) => {
    const [cartProduct , setCartProduct] = useState({})
    
  return (
    <ProdContext.Provider value={{cartProduct,setCartProduct} }>
        {children}
    </ProdContext.Provider>
  )
}

export default ProductContext