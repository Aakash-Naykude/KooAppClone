import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Profile.css";
export const Profile = () => {

  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div
          id="feedcont"
          className="flex-grow bg-[#F8F7F3] sm:ml-[50px] xl:ml-[300px]"
        >
          <div className="profilehead1">
            <div>
              <img
                src="https://www.kooapp.com/img/ic_back.svg"
                alt="backtofeed"
              />
              <h1>Fake name</h1>
            </div>
            <div>
              <img
                className="logo"
                src="https://www.kooapp.com/img/stats.svg"
                alt="fake"
              />
              <img
                className="logo"
                src="https://www.kooapp.com/img/kuhuShare.svg"
                alt="fake"
              />
              <img
                className="logo"
                src="https://www.kooapp.com/assets/5dc2bdc8.svg"
                alt="fake"
              />
            </div>
          </div>
          <div className="profilehead2">
            <div className="profilehead21">
              <img
                src="https://www.kooapp.com/img/profilePlaceholder.svg"
                alt="profile"
              />
              <button>Edit Profile</button>
            </div>
            <h1>name</h1>
            <h2>usename</h2>
            <p>Koo Your Opinion</p>
            <div className="profilehead22">
              <img
                src="https://www.kooapp.com/img/ic_calendar.svg"
                alt="calender"
              />
              <h1>Joined on Jan 2022</h1>
            </div>
            <div className="profilehead23">
              <div>2 Followers</div>
              <div>49 Following</div>
            </div>
          </div>
          <div className="profilehead3">
            <div>
              <img src="https://www.kooapp.com/assets/cb39e6e3.svg" alt="koo" />
              <h3>Koo</h3>
            </div>
            <div>
              <img src="https://www.kooapp.com/assets/650e377a.svg" alt="koo" />
              <h3>Liked</h3>
            </div>
            <div>
              <img src="https://www.kooapp.com/assets/4c618262.svg" alt="koo" />
              <h3>Re-Koo & Comment </h3>
            </div>
            <div>
              <img src="https://www.kooapp.com/assets/f82ff9f2.svg" alt="koo" />
              <h3>Mentions</h3>
            </div>
          </div>
        </div>
        <Widgets />
      </div>
    </div>
  );
};

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSp6ikXSB0cw5YPtaassBzIdUtRL6IGSw",
  authDomain: "kooappclone.firebaseapp.com",
  projectId: "kooappclone",
  storageBucket: "kooappclone.appspot.com",
  messagingSenderId: "389123845638",
  appId: "1:389123845638:web:eeb76f933d15f3beb59d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/
