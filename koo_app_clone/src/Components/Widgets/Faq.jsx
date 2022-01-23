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

        <div className="questions1">
            <div className="head-box">
                <button>Account Settings</button>
                <button>Queries</button>
                <button>Troubleshooting</button>
                <button>Reported Koos and Accounts</button>
                <button>Legal</button>
                <button>New User FAQ</button>
                <button>Following</button>
                <button>Different Tabs on Koo</button>
                <button>Contact Us</button>

            </div>
            <div className="scrolling-box">
                <div>HAVE MORE QUESTIONS? CHAT WITH US ON WHATSAPP: +91-6301452077</div>
                <div className="h1">ACCOUNT SETTINGS</div>
                <div className="h2">Q. Edit Proﬁle Picture</div>
                <p>You can edit your profile picture by going to ⚙ > Edit Profile > . You can either take a photo or upload from your gallery. In addition to this you can add frames by going to app settings > Edit Profile >⊕, you can select from #Vaccinated, #Plasmadonor or #Readytodonate.</p>
                <div className="h2">Q. Set your Gender and Marital status to Private or Public</div>
                <p>You have full control over the information that you disclose about yourself. After filling the details a Koo user can choose to disclose the gender and marital status to other Koo users by setting it to “On” or “Off”. You can find the settings in App settings > Edit Profile > Gender/ Marital Status. Please choose a Privacy Setting most appropriate to you. Make sure you read the Koo Privacy Policy at kooapp.com/privacy.</p>
                <div className="h2" >Q. Adding a second Account</div>
                <p>On Koo you can add a second account to your app. You can do so by going to ⚙ > and input your number/email to get an OTP for your second account.</p>
                <div className="h2">Q. Language preferences</div>
                <p>Koo is one of the very few apps that allows you to express your opinions in your mother tongue. So far we support 8 languages in India and 1 5 of Nigeria with more coming soon. We are already testing for other languages and will soon make them available once the issues are resolved. You can change your language by going to ⚙ > 🌐 Languages</p>
                <div className="h2">Q. Account Deletion</div>
                <p>We are sorry that you want to leave Koo. You can delete your Account by going to ⚙ > Delete. Once requested the account goes in suspension for the next 30 days. This period is given so that if the user wants to use Koo again he can do so. During the suspension if the user logs in the request to delete gets cancelled. After 30 days the account along with all the details are erased from our servers.</p>
                <div className="h1">QUERIES</div>
                <div className="h2">Q. Why am I not getting notiﬁcation for DMs?</div>
                <p>This issue may occur with certain devices. Please reach out to redressal@kooapp.com for more information.</p>
                <div className="h2">Q. My feed is not updating. What should I do?</div>
                <p>Feed might not be updating because of the following reasons:</p>
                <p>(a) Feed will take a little time to load if you've logged in after many days, as in, a minimum of 3-4 days. Please refresh once and wait for sometime and it will be good to go.</p>
                <p>(b) Feed is also dependent on the activity of the proﬁles one follows. In case you are following less proﬁles we request you to follow more interesting proﬁles. Also, if you follow someone who doesn't post regularly then also your feed will not be updated. We would request you to follow who posts actively on Koo.</p>
                <p>If the issue persists for more than a day, this is not the expected behavior. Kindly drop us an email at redressal@kooapp.com along with your handle and screen recording or screenshot, we will ﬁx it.</p>
                <div className="h2">Q. How can I download images from Koo?</div>
                <p>You can download images by clicking on the particular image and ⤓.</p>
                <div className="h2">Q. How can I download videos from Koo?</div>
                <p>At the moment we do not have this feature. Please be assured that we are working on making this ava</p>
                <div className="h2">Q. My scrolling is not smooth. Can you help?</div>
                <p>This issue may occur with certain devices. Please reach out to aakashnaykude123@gmail.com for more information. We are also constantly working to improve user experience</p>

            </div>
        </div>
    </div>
}

export default Faq