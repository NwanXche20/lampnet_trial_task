import React from "react";
import IMAGES from "../../assets";
import cpStyles from "../../css/cp.module.css";

const CustomizableProducts = () => {
  return (
    <div className={cpStyles.box}>
      <div className={cpStyles.boxTop}>
        <div className={cpStyles.boxText}>
          <h1 className={cpStyles.boxTitle}>Customizable products</h1>
          <span className={cpStyles.boxDesc}>
            Provided by 60,000+ experienced manufacturers with design and
            production capabilities and on-...
          </span>
        </div>
        {/* <img src="" alt="" /> */}
      </div>
      <div className={cpStyles.boxBottom}>
        <div className={cpStyles.boxCard}>
          <h4 className={cpStyles.boxCardTilte}>Source from factories</h4>
          <div className={cpStyles.boxImages}>
            <img src={IMAGES.Custom1} alt="#" />
            <img src={IMAGES.Custom2} alt="#" />
            <img src={IMAGES.Custom3} alt="#" />
          </div>
        </div>
        <div className={cpStyles.boxCard}>
          <h4 className={cpStyles.boxCardTitle}>Top-ranking suppliers</h4>
          <div className={cpStyles.boxImages}>
            <img src={IMAGES.Custom4} alt="#" />
            <img src={IMAGES.Custom5} alt="#" />
            <img src={IMAGES.Custom6} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableProducts;
