import React from "react";
import Header from "./header";
import IMAGES from "../assets";
import homeStyles from "../css/home.module.css";
import Card from "./common/card";
import CustomizableProducts from "./common/customizableProducts";
import ProductSection from "./common/productSection";
import { APPAREL, CONSUMER_ELECTRONICS, VEHICLE_PARTS } from "./productsObject";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className={homeStyles.main}>
        <div className={homeStyles.container}>
          <section className={homeStyles.hero}>
            <div className={homeStyles.heroMain}>
              <div className={homeStyles.myMarkets}>
                <h3 className={homeStyles.myMarketsTitle}>My markets</h3>
                <ul className={homeStyles.myMarketsList}>
                  <li>
                    {" "}
                    <div className={homeStyles.listStyle}>
                      <img src={IMAGES.Apparel} alt="#" />
                    </div>{" "}
                    <span className={homeStyles.listText}>Apparel</span>{" "}
                  </li>
                  <li>
                    <div className={homeStyles.listStyle}>
                      <img src={IMAGES.Consumer} alt="#" />
                    </div>{" "}
                    <span className={homeStyles.listText}>
                      Consumer Electronics
                    </span>
                  </li>
                  <li>
                    <div className={homeStyles.listStyle}>
                      <img src={IMAGES.Vehicle} alt="#" />
                    </div>{" "}
                    <span className={homeStyles.listText}>
                      Vehicle Parts & Accessories
                    </span>
                  </li>
                  <li>
                    <div className={homeStyles.listStyle}>
                      <img src={IMAGES.Sports} alt="#" />
                    </div>{" "}
                    <span className={homeStyles.listText}>
                      Sports & Entertainment
                    </span>
                  </li>
                  <li>
                    <div className={homeStyles.listStyle}>
                      <img src={IMAGES.Industry} alt="#" />
                    </div>{" "}
                    <span className={homeStyles.listText}>
                      Industrial Machinery
                    </span>
                  </li>
                  <li>
                    <div className={homeStyles.listStyle}>
                      <img src={IMAGES.HomeGarden} alt="#" />
                    </div>{" "}
                    <span className={homeStyles.listText}>Home & Garden</span>
                  </li>
                  <li>
                    <div className={homeStyles.listStyle}>
                      <img src={IMAGES.Beauty} alt="#" />
                    </div>{" "}
                    <span className={homeStyles.listText}>Beauty</span>
                  </li>
                  <li>
                    <div className={homeStyles.listStyle}>
                      <img src={IMAGES.AllCategories} alt="#" />
                    </div>{" "}
                    <span className={homeStyles.listText}>All categories</span>
                  </li>
                </ul>
              </div>
              <div className={homeStyles.slider}>
                <img src={IMAGES.SliderImage} alt="#" />
              </div>
              <div className={homeStyles.others}>
                <p>Sign up to enjoy exciting Buyers Club benefits</p>
                <a href="#">
                  <input
                    type="button"
                    value="Join for free"
                    className={homeStyles.button}
                    id={homeStyles.mainColor}
                  />
                </a>
                <a href="#">
                  <input
                    type="button"
                    value="Sign in"
                    className={homeStyles.button}
                  />
                </a>

                <h2>Buyers Club ---{">"} </h2>

                <div>
                  <p>US $10 off with a new supplier</p>
                  <img src={IMAGES.BuyersClub1} alt="#" />
                </div>

                <div>
                  <p>RFQ: quotes with supplier preferences</p>
                  <img src={IMAGES.BuyersClub2} alt="#" />
                </div>
              </div>
            </div>

            <div className={homeStyles.dots}>
              <div className={homeStyles.dot}></div>
              <div className={homeStyles.dot}></div>
              <div className={homeStyles.dot}></div>
              <div className={homeStyles.dot}></div>
            </div>
          </section>
          <section className={homeStyles.firstSection}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
          <section className={homeStyles.secondSection}>
            <CustomizableProducts />
            <CustomizableProducts />
          </section>
          <section className={homeStyles.thirdSection}>
            <ProductSection product={APPAREL} />
          </section>
          <section className={homeStyles.fourthSection}>
            <ProductSection product={CONSUMER_ELECTRONICS} />
          </section>
          <section className={homeStyles.fifthSection}>
            <ProductSection product={VEHICLE_PARTS} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homepage;
