import React, { useContext, useState } from "react";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import CartInfo from "./CartInfo";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useCart();
  return (
    <header>
      <nav className=" w-4/5 flex border-b-[1px] m-auto items-center h-24 gap-[5rem]">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Sneakers logo " />
        </Link>
        <ul className="flex gap-[2rem] items-center  ">
          <NavItem name="Collections" />
          <NavItem name="Men" />
          <NavItem name="Women" />
          <NavItem name="About" />
          <NavItem name="Contract" />
        </ul>
        <div className="flex items-center ml-auto gap-[2.8rem] relative shrink-0">
          <button href="" onClick={() => setShowCart((prev) => !prev)}>
            {cart.cartProductQuantity > 0 && (
              <span className="text-[0.6rem] leading-none text-white px-2 py-[0.1rem] rounded-xl absolute bg-primary left-3 top-[0.65rem]">
                {cart.cartProductQuantity}
              </span>
            )}
            <img src={cartIcon} alt="cart " className="w-6 " />
          </button>
          {showCart && <CartInfo />}
          <img
            src={avatar}
            alt="avatar"
            className="w-12 border-2 border-transparent hover:border-primary hover:border-2 rounded-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
