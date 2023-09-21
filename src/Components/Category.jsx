import React ,{useState ,useContext ,useEffect} from 'react'
import { ApiProducts } from "../Contexts/AllProductContext";
import Card from "../Components/Card";

const Category = () => {
  // const filteredCategory =[]
  // const [allProducts, setAllProducts] = useState(null);

  const {allProducts, categoryClicked } = useContext(ApiProducts);
  
  const categoryFilter = () => {
    return categoryClicked &&allProducts.filter((product) => product.category === categoryClicked)
    
  }

  useEffect(() =>{
    categoryFilter()
  } ,[categoryClicked])
  const filteredCategory= categoryFilter()
  console.log(filteredCategory)

  return (
    <div className="product-wrapper">
      {categoryClicked && filteredCategory
      // allProducts
      //   .filter((product) => product.category === categoryClicked)
        .map((product) => <Card key={product.id} product={product}  />)
    }
    </div>
  )}
export default Category