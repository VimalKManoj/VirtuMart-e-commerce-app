import React ,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const Home = () => {
  const [loading ,setLoading ] =useState(false)
  const navigate =useNavigate("")

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }, [])

  const handleClick = (e) =>{
    navigate("/products")
    e.stopPropagation()
  } 

  return (
   <div className="home">
    {loading?(<>
      <PropagateLoader color="#f3e5b8" style={{zIndex:'999' ,display:'flex', justifyContent:"center" ,alignItems:'center'}}/>
      <div style={{position:'absolute',height:'100vh' , width:'100vw', backgroundColor:"white" ,zIndex:'998'}}>
</div></>):(<div><div className="home-banner">
        <div className="scroll-text">
          <p class="marquee">
            <span>
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40%
              -&nbsp;
            </span>
          </p>
          <p class="marquee marquee2">
            <span>
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40% -
              LIMITED TIME DISCOUNT UPTO 40% - LIMITED TIME DISCOUNT UPTO 40%
              -&nbsp;
            </span>
          </p>
        </div>
        <div className="image-wrapper">
          <img src="/backimg.png" />
          {/* <div className="circle"></div> */}
        </div>
        <div className="text-wrapper">
          <p>
            Shop Our<span className="discover">Discover the Latest Trends</span>
            <span className="trending"> Trending</span> Products
          </p>
          <button className="shop-now" onClick={handleClick}>Shop Now</button>
        </div>
      </div>
      <div className="motto">
        <p className="motto-text">
          "Shop smart, shop VirtuMart. Explore a world of products, unbeatable
          deals, and hassle-free shopping experiences today."
        </p>
      </div>
      <div className="shop-by-category">
          <p className="shop-by-category-text">Trending Categories</p>
        <div className="trending-category-wrapper">

        </div>
      </div></div>)}
      
    </div>
    
  );
};

export default Home;
