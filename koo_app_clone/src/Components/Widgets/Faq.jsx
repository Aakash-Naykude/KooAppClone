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
                <div>Account Settings</div>
                <div>Queries</div>
                <div>Troubleshooting</div>
                <div>Reported Koos and Accounts</div>
                <div>Legal</div>
                <div>New User FAQ</div>
                <div>Following</div>
                <div>Different Tabs on Koo</div>
                <div>Contact Us</div>

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
                <div className="h2">Q. Why is the app slow?</div>
                <p>In our recent update we have released a faster and better UI. . Please check your internet speed, clear your cache files or restart the phone. If the problem still persists, kindly drop us an email at aakashnaykude123@gmail.com along with your handle and screen recording or screenshot .</p>
                <div className="h2">Q. My Followers are not increasing, what should I do?</div>
                <p>An increase/decrease in followers is a reflection of your activity on the platform and the community’s interest. This is a very democratic process and we do not have any direct role to play.

                    For an engaging experience at Koo we request you to post a minimum of two Koos everyday.

                    Kindly drop us a mail at redressal@kooapp.com along with your handle and screen recording or screenshot, for us to check for any technical issue.</p>
                <div className="h2">Q. I have applied for Eminence but there has been no response?</div>
                <p>Koo's Eminence criteria is transparently listed here. For any Eminence related queries kindly drop us an email at eminence.verification@kooapp.com along with your handle. Alternatively, For applying for verification you can go to ⚙ > 'apply for verified badge option'.</p>
                <div className="h2">Q. Why are my Koos not shown in trending hashtags?</div>
                <p>Trending Koos are the ones that the community loves and engages with. Koos in trending hashtags are shown on reaction basis and not on ‘how recent a Koo’ is. We will be releasing a filter in the feed where you can change your mode from “Most Engaging” post to ‘Latest’ post. For a better user experience we recommend you to post a minimum of 2 Koos daily.</p>
                <div className="h2">Q. I see a lot of abusive/hateful language. What can I do?</div>
                <p>Abusive and hateful language is something we do not encourage on Koo and require all content to comply with our Community Guidelines. Please use our in app reporting feature to report such Koo. A review will be made based on legal guidelines and community reporting. To report a Koo, please use the two dots on the top right corner of a Koo and from the index choose Report Koo. A Koo can be reported for any of the reasons listed in the index.</p>
                <div className="h2">Q. Someone is impersonating me, what can I do?</div>
                <p>If someone is impersonating you then please report such a profile. To report, please use the two dots on the top right corner of a Koo and from the index choose Report User. A User can be reported for any of the reasons listed in the index including “pretending to be me or someone else”.</p>
                <div className="h2">Q. When is the Dark Mode coming?</div>
                <p>Dark mode is available from version 0.92.0 or higher. We request you to update your app to the latest version. You can choose between the light and dark themes as your preference. The settings can be found in ⚙ > Themes.</p>
                <div className="h2">Q. I don’t ﬁnd the latest version after I receive a notiﬁcation of an update. Why?</div>
                <p>Updates are applied in a phased manner to ensure minimal impact of bugs. Please have patience and the new features will be visible soon</p>
                <div className="h2">Q. Why can’t I change my Number or email address?</div>
                <p>We don’t allow changes in contact details as a security measure. In case you are facing any issue while adding your contact details for the ﬁrst time feel free to reach us at redressal@kooapp.com along with your handle and screen recording or screenshot, we will ﬁx it.</p>
                <div className="h2">Q. Why am I not able to change professional details?</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of the issue and and you will soon be able to change details in the coming updates.</p>
                <div className="h2">Q. Why are Koos in my feed repeating?</div>
                <p>We sincerely regret any inconvenience due to this reason. This issue is related to phone build and not all users face this. We will soon resolve this issue and make it available to our users in the coming updates.</p>
                <div className="h2">Q. Why is my app getting logged out again and again?</div>
                <p>We sincerely regret any inconvenience due to this reason. This issue is resolved in our recent updates. We request you to uninstall and then reinstall the app. If the issue still persists, please reach out to us at redressal@kooapp.com with your handle and phone number</p>
                <div className="h2">Q. Notiﬁcations don't lead to the actual content?</div>
                <p>We sincerely regret any inconvenience due to this reason. Tapping on a notification will take you to the Koo feed which contains many Koos. The photo in the notification need not be necessarily be from from a Koo which is first. You will be able to find the relevant Koo by scrolling down.</p>
                <div className="h2">Q. The Search bar is not working properly!</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of this issue. and have improved it compared to the previous versions. We request you to check your internet connection and then use it. If it does not work then reach out to us at redressal@kooapp.com.</p>
                <div className="h2">Q. Unable to remove my proﬁle picture!</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of this request. release it in the coming updates. Please bear with us for some time</p>
                <div className="h2">Q. I have deleted the chat but still it is there, why?</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of this issue and We will soon resolve this issue and make it available in the coming updates.</p>
                <div className="h2">Q. New guest account was created, please remove them!</div>
                <p>We sincerely regret any inconvenience due to this reason. This issue can be resolved with an easy reinstall using the phone number which you used for the first time when you created your original account. These newly created accounts will disappear.</p>
                <div className="h2">Q. Long videos don’t run, the screen goes off, please help!</div>
                <p>We sincerely regret any inconvenience due to this reason. We are aware of this request. We are aware of the issue and will soon release it in the upcoming updates. We request you to bear with us for some time.</p>
                <div className="h2">Q. Accounts deleted are still visible by others even after 30 days!</div>
                <p>sincerely regret any inconvenience due to this reason. This issue is generally not seen. We request you to reach out to us at redressal@kooapp.com with your handle and phone number linked to it.</p>
                <div className="h2">Q. Having Typing issues in Hindi</div>
                <p>We sincerely regret any inconvenience due to this reason. Our team is already working on resolving it.</p>
                <div className="h1">TROUBLESHOOTING</div>
                <p>There is a constant traﬃc we receive and there might be a delay from our end due to this. We request you do the following, while awaiting our response.</p>
                <div className="h2">Q. Not getting any Notiﬁcations</div>
                <p>A common reason for not receiving notifications is that they may be turned off in the settings. We request you to go to app settings > Notifications and set your preferences. If all the notifications are turned on and you are not receiving notifications we request you to go to phone settings > Notifications > Manage Notifications > Koo and set it to on. If the issue persists, kindly mail us at redressal@kooapp.comalong with your handle and screen recording or screenshot, we will fix it., and we’ll ensure a quick resolution.</p>
                <div className="h2">Q. Receiving too many notiﬁcations</div>
                <p>We request you to go to app settings > Notifications > and set all your notifications off. If you want to totally stop receiving notifications, we request you to your phone settings > notifications> Koo and turn off notifications. If the issue persists, kindly mail us at redressal@kooapp.com along with your handle and screen recording or screenshot, we will fix it., and we’ll ensure a quick resolution redressal@kooapp.com.</p>
                <div className="h2">Q. Not getting OTP</div>
                <p>If any situation arises where you do not receive an OTP we request you to reinstall the app. Also check your mobile network. In most cases, this has resolved the issue. If the issue persists, kindly mail us at redressal@kooapp.com along with your handle and screen recording or screenshot, we will ﬁx it., and we’ll ensure a quick resolution.</p>
                <div className="h2">Q. App is not opening</div>
                <p>We regret the inconvenience caused. We request you to reinstall/ update the app. Also check your internet connection. If the issue persists feel free to drop us a mail along with the screenshot at redressal@kooapp.com as it helps our team understand the issue better.</p>
                <div className="h2">Q. My app hangs while creating a Koo.</div>
                <p>This is not the expected behaviour of the app. We request you to reinstall/ update the app. If the issue persists feel free to drop us a mail along with the screenshot at redressal@kooapp.com as it helps our team understand the issue better.</p>
                <div className="h1">REPORTED KOOS AND ACCOUNTS</div>
                <div className="h2">Q. How can I report a Koo?</div>
                <p>You may report a Koo by going to a particular Koo > : > Report Koo. Reported Koos are managed in accordance with legal requirements. If you would like to report a Koo for violation of the Information Technology Act, 2000 or its Rules or copyright violations, please see our Compliance page for further information</p>
                <div className="h2">Q.How do I report a proﬁle?</div>
                <p>You can report a particular profile Koo by going to a particular Koo> : > Report user.</p>
                <div className="h2">Q. I reported a Koo. Why has no action been taken on it?</div>
                <p>Koo is an intermediary that primarily enables online interaction between two or more users and allows them to create, upload, share, disseminate, modify or access information using Koo's services.</p>
                <br /><br />
                <p>Koo does not undertake any obligation to monitor user generated content, except where specifically mandated under applicable law. If a Koo violates Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 action may be taken. You can read more about the same on our Compliance page and the Community Guidelines page.</p>
                <div className="h2">Q. I have received notification that my Koo has been reported. What happens next?</div>
                <p>Koo is an intermediary that primarily enables online interaction between two or more users and allows them to create, upload, share, disseminate, modify or access information using Koo's services. Koo does not monitor user generated content, except where specifically mandated under applicable law.</p>
                <br />
                <p>You have received an auto generated Reported Koo notification because another user has reported your Koo.</p>
                <br />
                <p>If a Koo violates Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 action may be taken. You can read more about the same on our Compliance page and the Community Guidelines page.</p>
                <div className="h1">LEGAL</div>






            </div>
        </div>
    </div>
}

export default Faq