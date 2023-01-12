import React from "react";
import IMAGES from "../../assets";
import cardStyles from "../../css/card.module.css";

const Card = () => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardTitle}>
        <img src={IMAGES.CardIcon} alt="icon" className={cardStyles.cardIcon} />
        <h3 className={cardStyles.cardName}>New arrivals</h3>
      </div>

      <div className={cardStyles.cardProducts}>
        <div className={cardStyles.cardProduct}>
          <div className={cardStyles.cardProductImage}>
            <img src={IMAGES.CardImage1} alt="#" />
          </div>

          <strong className={cardStyles.cardProductPrice}>₦4,895.72</strong>
          <p>Trending Now</p>
        </div>
        <div className={cardStyles.cardProduct}>
          <div className={cardStyles.cardProductImage}>
            <img src={IMAGES.CardImage2} alt="#" />
          </div>

          <strong className={cardStyles.cardProductPrice}>₦1,220.59</strong>
          <p>Trending Now</p>
        </div>
        <div className={cardStyles.cardProduct}>
          <div className={cardStyles.cardProductImage}>
            <img src={IMAGES.CardImage1} alt="#" />
          </div>

          <strong className={cardStyles.cardProductPrice}>₦1,002.31</strong>
          <p>Trending Now</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
