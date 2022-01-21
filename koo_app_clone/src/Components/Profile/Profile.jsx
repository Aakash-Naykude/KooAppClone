import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Profile.css";
export const Profile = () => {
  const { handleUsername, username } = useContext(UserContext);

  handleUsername("test");
  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div
          id="feedcont"
          className="flex-grow bg-[#F8F7F3] sm:ml-[50px] xl:ml-[300px]"
        >
          <div className="cont1">
            <div>
              <img
                src="https://www.kooapp.com/img/ic_back.svg"
                alt="backtofeed"
              />
              <h1>Fake name</h1>
            </div>
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
