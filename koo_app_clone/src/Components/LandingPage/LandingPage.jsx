
import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./LandingPage.css";
import LoginPopUp from "./LoginPopUp";

const LandingPage = () => {

    const [popup, setPopup] = useState(false);

  return (
    <div>
      <div className="navContainer">
        <div className="navWrap">
          <div className="koologo-name">
            <a href="/">
              <img
                className="logoKoo-home"
                src="https://www.kooapp.com/img/logoKuSolidOutline.svg"
                alt="Koo"
              />
              <p>
                {" "}
                <b>
                  {" "}
                  <b> Koo</b>{" "}
                </b>
              </p>
            </a>
          </div>

          <div className="koosearch">
            <input className="koo-srch-inp" type="text" placeholder="Search" />
          </div>

          <div className="kooicons">
            <img src="https://www.kooapp.com/assets/bce0173d.svg" alt="feeed" />
            <img
              src="https://www.kooapp.com/assets/8a272ace.svg"
              alt="explore"
            />
            <img
              src="https://www.kooapp.com/assets/d6c4a8f9.svg"
              alt="language"
            />
            <img
              src="https://www.kooapp.com/assets/15ce681a.svg"
              alt="notification"
            />
            <img
              src="https://img.icons8.com/small/96/000000/user-male-circle.png"
              alt="profile"
              onClick={()=>{
                  setPopup(true)
              }}
            />
          </div>
        </div>
        <LoginPopUp trigger={popup} settrigger={setPopup} ><h3>Login popup</h3></LoginPopUp>
      </div>

      <div className="pg-container">
        <div className="wrap-pg">
          <div className="center-container">
            <div className="cent-box">
              <div className="cent-box-in">
                <img
                  className="cent-box-img"
                  src="https://www.kooapp.com/img/logoSolidOutline.png"
                  alt="logo"
                />
              </div>
            </div>
            <br />

            <Link to="/feed">
              <button className="cent-box-btn">Go to Feed </button>
            </Link>

            <a href="/">
              <img
                className="store-btn"
                src="https://www.kooapp.com/img/googlePlayBadge.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="store-btn"
                src="https://www.kooapp.com/img/appStoreBadge.png"
                alt=""
              />
            </a>
          </div>
          <div style={{ height: "200px" }}></div>
          <div></div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-wrap">
          <div className="footer-list">
            <a href="/">About</a>
            <a href="/">In the Press</a>
            <a href="/">Resource Center</a>
            <a href="/">Contact Us</a>
            <a href="/">FAQs</a>
            <a href="/">Sitemap</a>
          </div>
          <div className="footer-cp-rt">Copyright Koo 2021 ©</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
