import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

function Contact() {
    return <div>

        <div id="back-to-feed" >
            <Link to="/" >
                <img className="icon" src="https://www.kooapp.com/assets/2d634360.svg" alt="3" />
            </Link>

            <Link to="/feed" >
                <button className="btn"> 🢀 Back To Feed</button>
            </Link>
        </div>
        <div className="about-us" >Contact Us</div>
        <div className="query" >
            <div className="heading">Have a General Enquiry?</div>
            <div  >Reach Us on :   <a href="mailto:aakashnaykude123@gmail.com" className="mail">  aakashnaykude123@gmail.com  </a> </div>
            <div className="hr"></div>
            <div className="heading">Want to work with us?</div>
            <div  >Reach Us on :   <a href="mailto:vani630145@gmail.com" className="mail"> vani630145@gmail.com </a> </div>
            <div className="hr"></div>
            <div className="heading">Any Complaints?</div>
            <div>Reach Us on :  <a href="mailto:arnavi.gode96@gmail.com" className="mail" >arnavi.gode96@gmail.com</a></div>


        </div>
        <div className="all-queries" >
            <Link to="/about"><span> About </span></Link>  <Link to="/contact"><span>Contact Us</span></Link>
        </div>
        <div className="copy">Copyright Koo 2022 ©</div>
    </div >
}


export default Contact;
