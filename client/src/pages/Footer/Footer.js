import React from "react";

import "./Footer.css";
import evangadiLogo from "../../CommonResources/evanLogo.jpeg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer d-lg-flex d-md-flex d-sm-block  ">
      <div className="footer__left mx-sm-5 ">
        <div className="footer__logo">
          <img src={evangadiLogo} alt="" />
        </div>
        <div className="footer__socialMedias col-sm-12">
          <div className="footer__facebook">
            <Link to="https://www.facebook.com/EthiopiansNetwork">
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
          </div>
          <div className="footer__instagram">
            <Link to="https://www.instagram.com/evangaditech/">
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <div className="footer__youtube">
            <Link to="https://www.youtube.com/c/weareethiopians">
              <i class="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__middle mx-sm-5 ">
        <div className="footer__info">Useful Link</div>
        <div className="footer__infoText">
          <div className="mb-2">How it works</div>
          <div className="mb-2">Terms of Service</div>
          <div className="mb-2">Privecy Policy</div>
        </div>
      </div>
      <div className="footer__right mx-sm-5">
        <div className="footer__info">Contact Info</div>
        <div className="footer__infoText">
          <div className="mb-2">Evangadi Network</div>
          <div className="mb-2">support@evangadi.com</div>
          <div className="mb-2">+!-202-386-2702</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
