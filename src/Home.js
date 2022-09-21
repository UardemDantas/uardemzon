import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {

  return (
    <>
    <Header />
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />

      {/* Product id, title, price, rating , image*/}
      <div className="home_row">
        <Product
        id='132323'
        title= "Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers"
        price={109.85}
        rating={5}
        image= 'https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SL1257_.jpg'
        />

        <Product
        id='555331'
        title= "AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor"
        price={257.00}
        rating={4}
        image= 'https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SL1384_.jpg'
        />
      
      <Product
        id='666542'
        title= "ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6” 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD, Thunderbolt 4"
        price={1177.00}
        rating={5}
        image= 'https://m.media-amazon.com/images/I/71AGOX9MORL._AC_SL1500_.jpg'
        />
      </div>

      <div className="home_row">
      <Product
        id='355389'
        title= "HUANUO Dual Monitor Stand, Adjustable Spring Monitor Desk Mount Swivel Vesa Bracket"
        price={59.99}
        rating={3}
        image= 'https://m.media-amazon.com/images/I/71oPdIcALXL._AC_SL1500_.jpg'
        />
        
        <Product
        id='776582'
        title= "SAMSUNG Galaxy Tab A7 Lite 8.7 32GB Android Tablet w/Compact, Slim Design, Sturdy Metal Frame, Long Lasting Battery, Gray"
        price={130.00}
        rating={2}
        image= 'https://m.media-amazon.com/images/I/819hAP4xoGS._AC_SL1500_.jpg'
        />

      </div>
      
    </div>
    </>
  );
}

export default Home;
