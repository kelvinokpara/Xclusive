import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { GlobalContext } from "../../context";

function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const { cartLength, wishlistLength } = useContext(GlobalContext);
  // const mobileNavHandler = () => {};
  return (
    <div>
      <div className={styles.topAd}>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>ShopNow</span>
        </p>
        <select name="" className={styles.select}>
          <option value="">English</option>
          <option value="">French</option>
          <option value="">Japanese</option>
        </select>
      </div>

      {/* navbar start */}
      <nav className="relative z-10">
        <NavLink to="/">
          <img
            src="../Assets/lodo black.png"
            alt=""
            className={styles.navlogo}
          />
        </NavLink>
        <AiOutlineMenu
          className={styles.hamburger_icon}
          id="hamburger_icon"
          onClick={() => setDropDown((prev) => !prev)}
        />

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/accountscreen">Sign Up</NavLink>
          </li>
        </ul>
        <div>
          <div className={styles.searchDiv}>
            <input type="search" placeholder="What are you looking for?" />
            <BsSearch className={`${styles.nav_search_icon} icon-size`} />
          </div>

          <NavLink to="/wishlist">
            <div className={styles.icon_container}>
              <BsHeart className="icon-size" id="navCartId" />
              <span className={styles.count}>{wishlistLength}</span>
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div className={styles.icon_container}>
              <BsCart3 className="icon-size" id="navCartId" />
              <span className={styles.count}>{cartLength}</span>
            </div>
          </NavLink>

          <NavLink to="/dashboard">
            <FiUser
              className={` ${styles.userIcon} icon-size`}
              id="user_icon"
            />
          </NavLink>
        </div>
      </nav>
      {/* navbar end */}

      {/* mobile nav */}

      <div
        className={`${
          styles.mobilenav
        } gap-10 transition-transform ease-out duration-200 absolute top-[-110px] z-0  ${
          dropDown ? "translate-y-[210px]" : "translate-y-[0px]"
        }`}
        id="mobilenav"
      >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/accountscreen">Sign Up</NavLink>
          </li>
        </ul>

        <div className="">
          <div className={styles.searchDiv}>
            <input type="search" placeholder="What are you looking for?" />

            <BsSearch className={styles.nav_search_icon} />
          </div>

          <div className="flex gap-4 items-baseline justify-center">
            <BsHeart className="text-lg" />
            <BsCart3 className="text-lg" id="navCartIdMobile" />
            <FiUser className="text-xl" />
          </div>
        </div>
      </div>

      {/* mobile nav  */}
    </div>
  );
}

console.log(document.getElementById("mobilenav"));

export default Nav;
