import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./editProfile.css";
function Editprofile() {
  const userMail = localStorage.getItem("email");
  const userId = localStorage.getItem("userid");
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    fetch(`https://kooappcloneapis.herokuapp.com/user/${userId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.following);
        setUserList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(userList.name);
  return (
    <div className="maincon">
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <div
          id="feedcont"
          className="flex-grow bg-[#F8F7F3] sm:ml-[50px] xl:ml-[300px]"
        >
          <div className="profilehead1">
            <div>
              <Link to="/feed">
                <img
                  className="profilehead1img"
                  src="https://www.kooapp.com/img/ic_back.svg"
                  alt="backtofeed"
                />
              </Link>

              <h1>{userList.name}</h1>
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
            </div>
            <h1>{userList.name}</h1>
            <h2>{userList.username}</h2>

            <div className="user_info">
              <input type="text" placeholder="Enter Name" />
              <br />
              <input type="text" placeholder="Enter Last Name" />
              <br />
              <input type="text" placeholder="Enter Username" />
              <br />
              <input type="file" placeholder="Choose Profile pic" />
              <br />
              <input type="text" placeholder="Enter Date of Birth" />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editprofile;
