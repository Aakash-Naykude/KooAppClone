import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Feed.css";
export const Feed = () => {
  const [list, setList] = useState([]);
  const { handleUsername, username } = useContext(UserContext);

  handleUsername("test");
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    fetch("http://localhost:4000/userid/post")
      .then((res) => res.json())
      .then((json) => setList(json));
  };
  console.log(list);
  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div
          id="feedcont"
          className="flex-grow bg-[#F8F7F3] sm:ml-[40px] xl:ml-[300px]"
        >
          <div
            id="header"
            className="bg-[#F8F7F3] border-gray-700 sticky top-0 z-40 "
          >
            <Link to="/feed">
              <h2
                id="heads"
                className="text-lg sm:text-xl text-[#7D8889] font-bold"
              >
                Feed
              </h2>
            </Link>

            <Link to="/people">
              <h2
                id="heads"
                className="text-lg  sm:text-xl  text-[#7D8889]  font-bold "
              >
                People
              </h2>
            </Link>

            <Link to="/trending">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                Trending
              </h2>
            </Link>

            <Link to="/upelections">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                UP Election
              </h2>
            </Link>
            <Link to="/videos">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                Videos
              </h2>
            </Link>

            <Link to="/polls">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                Polls
              </h2>
            </Link>

            <Link to="/cricket">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                Cricket
              </h2>
            </Link>

            <Link to="/following">
              <h2
                id="heads"
                className="text-lg  sm:text-xl  text-[#7D8889]  font-bold"
              >
                Following
              </h2>
            </Link>

            <Link to="/new">
              <h2
                id="heads"
                className="text-lg   sm:text-xl  text-[#7D8889]  font-bold"
              >
                New
              </h2>
            </Link>

            <Link to="/exclusive">
              <h2
                id="heads"
                className="text-lg  sm:text-xl  text-[#7D8889]  font-bold"
              >
                Exclusive
              </h2>
            </Link>
          </div>

          <Link to="/addinput">
            <div className="inputbar">
              <div style={{ display: "flex" }}>
                <img
                  className="iconimage"
                  src="https://www.kooapp.com/img/profilePlaceholderYellow.svg"
                  alt="iconimage"
                />
                <p>What's on your mind...</p>
              </div>
              <div>
                <img
                  className="addiconlogo"
                  src="https://www.kooapp.com/img/koo_create_24.svg"
                  alt="addlogo"
                />
              </div>
            </div>
          </Link>
          <h1>Feed</h1>
          {/* <Input /> */}
          <div className="pb-72">
            {/* {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post.data()} />
      ))} */}
            {list.map((e) => (
              <div key={e._id}>
                <h1>{e.postdata}</h1>
                <img style={{ width: "150px" }} src={e.imageupload} alt="img" />
              </div>
            ))}
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
