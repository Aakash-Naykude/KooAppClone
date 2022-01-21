import React, { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import "./LoginPopup.css";
export const EmailOtp = ({ settrigger, trigger, email, setEmail }) => {
  const { otp, setOtp } = useContext(UserContext);
  const [userOtp, setUserOtp] = useState("");
  const handleCheck = () => {
    console.log(otp, userOtp);
    if (otp == userOtp) {
      alert("hii");
      //fetch
      //navigate
    } else {
      alert("byyy");
    }
    setOtp(null);
  };
  return trigger ? (
    <div>
      <div id="unblurred" className="popup-login">
        <div className="popup-inner">
          <div>
            <div className="popup-title">
              <span style={{ marginLeft: "2%" }}>Enter otp sent to Email</span>
              <button className="close-btn">
                <img
                  src="https://www.kooapp.com/assets/15c66d2b.svg"
                  alt="close"
                  onClick={() => {
                    settrigger(false);
                    setEmail(!email);
                  }}
                />
              </button>
            </div>
            <hr />
            <div className="input-cont-popup">
              <div className="inpt-cont-inner">
                {/* <div className="cont-code">
                          🇮🇳
                          <span>+91</span>
                        </div> */}
              </div>
              <input
                class="phn-inpt"
                id="phone"
                type="integer"
                name="otp"
                // limit="10"
                placeholder="Enter otp"
                onChange={(e) => setUserOtp(e.target.value)}
                style={{ marginRight: "24%" }}
              ></input>
            </div>
            <div className="captcha-cont">
              <div class="cnfrm-inp-div">
                <span>OTP usually arrives within 1 minute</span>
              </div>
            </div>
            <br />
            <div class="cnfrm-inp-div">
              <span>confirm otp</span>
            </div>
            <div className="btn-cont">
              <button onClick={handleCheck} className="otp-btn" type="submit">
                Submit
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
