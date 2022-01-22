import React from 'react';
import './Faq.css';
import { Link } from 'react-router-dom'
function Faq() {
    return <div>
        <div id="back-to-feed" >
            <Link to="/" >
                <img className="icon" src="https://www.kooapp.com/assets/2d634360.svg" alt="3" />
            </Link>

            <Link to="/feed" >
                <button className="btn"> 🢀 Back To Feed</button>
            </Link>
        </div>
        <div className="about-us" >Frequently Asked Questions</div>

        <div className="questions">
            <div className="head-box"></div>
            <div className="scrolling-box"></div>
        </div>
    </div>
}

export default Faq