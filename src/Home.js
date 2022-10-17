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
      alt=""/>

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
        <Product
        id='321333'
        title= "Xbox Core Wireless Controller – Shock Blue"
        price={41.44}
        rating={3}
        image= 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61beNMz9m2L._SX522_.jpg'
        />

      </div>  
      
      <div className="home_row">
        <Product
        id='313322'
        title= "Logitech G920 Driving Force Racing Wheel and Floor Pedals, Real Force Feedback, Stainless Steel Paddle Shifters, Leather Steering Wheel Cover for Xbox Series X|S, Xbox One, PC, Mac - Black"
        price={284.95}
        rating={5}
        image= 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61O7HHu181L._AC_SX679_.jpg'
        />
        <Product
        id='313322'
        title= "FANTASYLAB Big and Tall Gaming Chair with Footrest 400lb Gaming Chair Massage Gaming Chair Memory Foam Adjustable Tilt Back Angle and Arm High Back Leather Racing Computer Desk Office Chair"
        price={249.99}
        rating={5}
        image= 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/616ekZE3QEL._AC_SX679_.jpg'
        />
        </div>
        <div className="home_row">
        <Product
        id='313322'
        title= "Acer Nitro 5 AN517-54-79L1 Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050Ti Laptop GPU | 17.3 FHD 144Hz IPS Display | 16GB DDR4 | 1TB NVMe SSD | Killer Wi-Fi 6 | Backlit KB | Win 11"
        price={1022.92}
        rating={5}
        image= 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81Ivn5DIxhL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
        />
        </div>
    </div>
    </>
  );
}

export default Home;
