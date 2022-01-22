import React, { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import "./LanguagePopup.css";
export const LanguagePopup = ({
  setLang,
  lang,
}) => {
  
  return lang ? (
    <div>
      <div id="unblurred" className="popup-lang">
        <div className="popup-inner">
          <div>
            <div className="popup-title">
              <span style={{ marginLeft: "2%" }}>Select Language</span>
              <button className="close-btn">
                <img
                  src="https://www.kooapp.com/assets/15c66d2b.svg"
                  alt="close"
                  onClick={() => {
                    setLang(false);
                  }}
                />
              </button>
            </div>
            {/* <hr /> */}
            
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
