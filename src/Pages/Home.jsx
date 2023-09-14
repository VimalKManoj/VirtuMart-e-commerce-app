import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
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
          <button className="shop-now">Shop Now</button>
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
      </div>
    </div>
  );
};

export default Home;
