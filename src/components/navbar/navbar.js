import { ReactComponent as BurgerMenu } from "shared/svg/hamburger.svg";
import { ReactComponent as CartIcon } from "shared/svg/icon-cart.svg";
import { ReactComponent as Logo } from "shared/svg/logo.svg";

import LinkTab from "components/linktab";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <BurgerMenu />
        <Logo />
        <LinkTab />
        <CartIcon />
      </div>
      <div className="navbar-underline"></div>
      <Outlet />
    </div>
  );
};

export default NavBar;