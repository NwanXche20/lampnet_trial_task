import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.png";
import Camera from "../assets/camera.png";
import Search from "../assets/search.png";
import Profile from "../assets/profile.png";
import Cart from "../assets/cart.png";
import Messages from "../assets/messages.png";
import Orders from "../assets/orders.png";
import MiniHamburger from "../assets/mini-hamburger.png";
import headerStyles from "../css/header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.top}>
        <Link>
          <h2>Products</h2>
        </Link>
        <Link>
          <h2>Manufacturers</h2>
        </Link>
      </div>

      <div className={headerStyles.mid}>
        <img src={Logo} alt="logo" className={headerStyles.logo} />
        <form action="#" method="get" className={headerStyles.searchBar}>
          <div className={headerStyles.searchInput}>
            <input type="text" id="searchBar" className={headerStyles.input} />
            <img
              src={Camera}
              alt="Search by image"
              className={headerStyles.icon}
            />
          </div>

          <div className={headerStyles.searchSubmit}>
            <img src={Search} alt="Search icon" className={headerStyles.icon} />
            <input
              type="submit"
              value="Search"
              className={headerStyles.submit}
            />
          </div>
        </form>

        <div className={headerStyles.actions}>
          <div className={headerStyles.action}>
            <img src={Profile} alt="login" className={headerStyles.icon} />
            <p>Sign in</p>
          </div>
          <div className={headerStyles.action}>
            <img src={Messages} alt="messages" className={headerStyles.icon} />
            <p>Messages</p>
          </div>
          <div className={headerStyles.action}>
            <img src={Orders} alt="orders" className={headerStyles.icon} />
            <p>Orders</p>
          </div>
          <div className={headerStyles.action}>
            <img src={Cart} alt="cart" className={headerStyles.icon} />
            <p>Cart</p>
          </div>
        </div>
      </div>

      <div className={headerStyles.bottom}>
        <div className={headerStyles.bottomLeft}>
          <select name="categories" id="categories">
            <option value="">Categories</option>
            <option value="Machinery / Vehicles & Accessories">
              Machinery / Vehicles & Accessories
            </option>
            <option value="Consumer Electronics / Home Appliances">
              Consumer Electronics / Home Appliances
            </option>
            <option value="Apparel / Fashion Accessories / Timepieces,Jewelry,Eyewear">
              Apparel / Fashion Accessories / Timepieces,Jewelry,Eyewear
            </option>
            <option value="Lights & Lighting / Construction & Real Estate">
              Lights & Lighting / Construction & Real Estate
            </option>
            <option value="Home & Garden / Furniture">
              Home & Garden / Furniture
            </option>
            <option value="Fabric & Textiles Raw Material / Home Textiles">
              Fabric & Textiles Raw Material / Home Textiles
            </option>
            <option value="Beauty & Personal Care / Health & Medical">
              Beauty & Personal Care / Health & Medical
            </option>
          </select>
          |<Link>Ready to Ship</Link>
          <Link>Personal Protective E...</Link>
          <Link>Trade Shows</Link>
          <select name="buyer-central" id="buyer-central">
            <option value="">Buyer Central</option>
            <option value="blog">Blog</option>
            <option value="trade assurance">Trade Assurance</option>
            <option value="pmis">PMIS</option>
            <option value="ls">LS</option>
            <option value="loc">LOC</option>
          </select>
          <select name="sell-on-alibaba" id="sell-on-alibaba">
            <option value="">Sell on Alibaba.com</option>
            <option value="For global suppliers">For global suppliers</option>
            <option value="For Chinese suppliers">For Chinese suppliers</option>
            <option value="Partner Program">Partner Program</option>
          </select>
          <select name="help" id="help">
            <option value="">Help</option>
            <option value="For buyers">For buyers</option>
            <option value="For suppliers">For suppliers</option>
            <option value="Open a case">Open a case</option>
          </select>
        </div>
        <div className={headerStyles.bottomRight}></div>
      </div>
    </div>
  );
};

export default Header;
