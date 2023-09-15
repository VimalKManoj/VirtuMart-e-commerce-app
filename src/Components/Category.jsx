import React ,{useState ,useContext ,useEffect} from 'react'
import { useParams ,useSearchParams } from 'react-router-dom'
import { ApiProducts } from "../Contexts/AllProductContext";
import Card from "../Components/Card";

const Category = () => {
  const { id } = useParams();
  // const [allProducts, setAllProducts] = useState(null);
  const [searchParams] = useSearchParams();
  const {allProducts, categoryClicked } = useContext(ApiProducts);

  const categoryFromURL = searchParams.get('category');
  console.log(categoryFromURL)
  return (
    <div className="product-wrapper">
     <div>{id}</div>
      {categoryClicked &&
      allProducts
        .filter((product) => product.category === categoryClicked)
        .map((product) => <Card key={product.id} product={product} id={id} value={id}/>)
    }
    </div>
  )}
export default Category