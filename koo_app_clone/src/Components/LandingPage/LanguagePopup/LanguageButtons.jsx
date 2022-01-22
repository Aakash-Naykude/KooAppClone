import React from 'react'
import "./LanguagePopup.css";
const LanguageButtons = () => {
    return (
        <div>
            <div className="lang-button-wrap">
                <button disabled className="lang-btns" >
                    <div className="lang-btn-inner">
                        <span className="lang-btn-sp">
                            <span className="lang-t">English</span>
                            <span className="lang-n">(English)</span>
                            <div className="lang-add-btn">
                                <div className="lang-add-btn-sp">
                                    <img className="lang-img-btn" src="https://www.kooapp.com/img/checkedYellow.svg" alt="" />
                                </div>
                            </div>
                        </span>
                    </div>
                </button>
                <hr />
            </div>
           
        </div>
    )
}

export default LanguageButtons
