import { ReactComponent as BurgerMenu } from "shared/svg/hamburger.svg";
import { ReactComponent as CartIcon } from "shared/svg/icon-cart.svg";
import { ReactComponent as Logo } from "shared/svg/logo.svg";

import { CartContext } from "containers/store/context/cartContext";
import { Outlet } from "react-router-dom";

import LinkTab from "components/linktab";
import CartDropDown from "components/cartdropdown";
import { useContext } from "react";


const NavBar = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toogle = () => {
    setIsCartOpen(!isCartOpen);
  }


  return (
    <div className="navbar">
      {isCartOpen && <CartDropDown />}
      
      <div className="navbar-container">
        <BurgerMenu />
        <Logo />
        <LinkTab />
        <CartIcon onClick={toogle}/>
        
      </div>
      <div className="navbar-underline"></div>
      <Outlet />
    </div>
  );
};

export default NavBar;
