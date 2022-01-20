import React from 'react'
import './LoginPopup.css';

const LoginPopUp = (props) => {
    return (props.trigger) ? (
        <div className="popup-login">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>{props.settrigger(false)}} > X </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default LoginPopUp
