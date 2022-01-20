import React from "react";
import "./Viewpost.css";
function Viewpost({ name, username, title, image, id }) {
  return (
    <div className="maincont">
      <div className="cont1">
        {image ? (
          <img className="profilepic" src={image} alt="postimg" />
        ) : (
          <img
            className="profilepic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU"
            alt="postimg"
          />
        )}

        <div>
          <h1 className="name">Name</h1>
          <h2 className="username">Username</h2>
        </div>
      </div>
      <div className="cont2">
        <h1>{title}</h1>
      </div>
      <div className="cont3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MvKGlOE7ERr4LBkTnMLIJgHZE_1zewZHvw&usqp=CAU" alt="postedimg"/>
      </div>
      <div className="cont4">like, comment, whats app, share, swap</div>
      <div className="cont5">Add comment</div>
    </div>
  );
}

export default Viewpost;
