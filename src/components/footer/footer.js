import LinkTab from "components/linktab";
import { ReactComponent as Logo } from "shared/svg/logo.svg";
import { ReactComponent as FaceBook } from "shared/svg/icon-facebook.svg";
import { ReactComponent as Instagram } from "shared/svg/icon-instagram.svg";
import { ReactComponent as Twitter } from "shared/svg/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu-logo">
        <Logo />
        <LinkTab />
      </div>

      <div className="footer-text-conainer">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>

      <div className="footer-copyright-section">
        <p>Copyright 2021. All Rights Reserved</p>
        <div className="footer-copyright-section__socials">
          <FaceBook />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
