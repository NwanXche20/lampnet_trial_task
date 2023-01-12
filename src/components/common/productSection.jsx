import React from "react";
import IMAGES from "../../assets";
import productStyles from "../../css/ps.module.css";

const ProductSection = ({ product }) => {
  // console.log(product.title);
  return (
    <>
      <div className={productStyles.productHeading}>
        <h1 className={productStyles.productTitle}>{product.title}</h1>
        <div className={productStyles.line}></div>
      </div>

      <div className={productStyles.productMain}>
        <div className={productStyles.mainLeft}>
          <h2 className={productStyles.mainDesc}>{product.mainDesc}</h2>
          <input
            type="button"
            value="Source now"
            className={productStyles.mainButton}
          />
        </div>

        <div className={productStyles.mainRight}>
          <div className={productStyles.mainCategory}>
            <div className={productStyles.categoryHeading}>
              <img
                src={IMAGES.TopRanking}
                alt="#"
                className={productStyles.categoryIcon}
              />
              <h3 className={productStyles.categoryTitle}>
                {product.categoryTitle[0]}
              </h3>
            </div>
            <div className={productStyles.categoryDesc}>
              <span className={productStyles.categoryDescText}>
                {product.categoryDesc[0]}
              </span>
            </div>
            <div className={productStyles.categoryProduct}>
              <div className={productStyles.categoryVerified}></div>
              <div className={productStyles.categoryImage}>
                <img src={product.categoryImage.Product1} alt="#" />
              </div>
            </div>
          </div>

          <div className={productStyles.mainCategory}>
            <div className={productStyles.categoryHeading}>
              <h3 className={productStyles.categoryTitle}>
                {product.categoryTitle[1]}
              </h3>
            </div>
            <div className={productStyles.categoryDesc}>
              <img
                src={IMAGES.TopSales}
                alt="#"
                className={productStyles.categoryDescIcon}
              />
              <span className={productStyles.categoryDescText}>
                {product.categoryDesc[1]}
              </span>
            </div>
            <div className={productStyles.categoryProduct}>
              <div className={productStyles.categoryVerified}></div>
              <div className={productStyles.categoryImage}>
                <img src={product.categoryImage.Product2} alt="#" />
              </div>
            </div>
          </div>

          <div className={productStyles.mainCategory}>
            <div className={productStyles.categoryHeading}>
              <h3 className={productStyles.categoryTitle}>
                {product.categoryTitle[2]}
              </h3>
            </div>
            <div className={productStyles.categoryDesc}></div>
            <div className={productStyles.categoryProduct}>
              <div className={productStyles.categoryVerified}></div>
              <div className={productStyles.categoryImage}>
                <img src={product.categoryImage.Product3} alt="#" />
              </div>
            </div>
          </div>

          <div className={productStyles.mainCategory}>
            <div className={productStyles.categoryHeading}>
              <h3 className={productStyles.categoryTitle}>
                {product.categoryTitle[3]}
              </h3>
            </div>
            <div className={productStyles.categoryDesc}></div>
            <div className={productStyles.categoryProduct}>
              <div className={productStyles.categoryVerified}></div>
              <div className={productStyles.categoryImage}>
                <img src={product.categoryImage.Product4} alt="#" />
              </div>
            </div>
          </div>

          <div className={productStyles.mainCategory}>
            <div className={productStyles.categoryHeading}>
              <h3 className={productStyles.categoryTitle}>
                {product.categoryTitle[4]}
              </h3>
            </div>
            <div className={productStyles.categoryDesc}>
              <img
                src={IMAGES.Ddp}
                alt="#"
                className={productStyles.categoryDescIcon}
              />
              <span className={productStyles.categoryDescText}>
                {product.categoryDesc[2]}
              </span>
            </div>
            <div className={productStyles.categoryProduct}>
              <div className={productStyles.categoryVerified}></div>
              <div className={productStyles.categoryImage}>
                <img src={product.categoryImage.Product5} alt="#" />
              </div>
            </div>
          </div>

          <div className={productStyles.mainCategory}>
            <div className={productStyles.categoryHeading}>
              <h3 className={productStyles.categoryTitle}>
                {product.categoryTitle[5]}
              </h3>
            </div>
            <div className={productStyles.categoryDesc}></div>
            <div className={productStyles.categoryProduct}>
              <div className={productStyles.categoryVerified}></div>
              <div className={productStyles.categoryImage}>
                <img src={product.categoryImage.Product6} alt="#" />
              </div>
            </div>
          </div>

          <div className={productStyles.mainCategory}>
            <div className={productStyles.categoryHeading}>
              <h3 className={productStyles.categoryTitle}>
                {product.categoryTitle[6]}
              </h3>
            </div>
            <div className={productStyles.categoryDesc}></div>
            <div className={productStyles.categoryProduct}>
              <div className={productStyles.categoryVerified}></div>
              <div className={productStyles.categoryImage}>
                <img src={product.categoryImage.Product7} alt="#" />
              </div>
            </div>
          </div>

          <div className={productStyles.mainCategory}>
            <div className={productStyles.categoryHeading}>
              <h3 className={productStyles.categoryTitle}>
                {product.categoryTitle[7]}
              </h3>
            </div>
            <div className={productStyles.categoryDesc}></div>
            <div className={productStyles.categoryProduct}>
              <div className={productStyles.categoryVerified}></div>
              <div className={productStyles.categoryImage}>
                <img src={product.categoryImage.Product8} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
