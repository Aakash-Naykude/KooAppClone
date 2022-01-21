import React from "react";
import "./Widgets.css";

const HashTags = () => {
  return (
    <div>
     <div className="hash-trendings">
                  <div className="hash-tags-wrap">
                    <a href="#">
                      <h5>#sushantday</h5>
                    </a>
                    <div className="hash-followers">
                        <div className="followers-hash" style={{marginLeft:"0"}}>
                          <img className="hash-folloers-img" src="https://images.kooapp.com/transcode_input/27052021003208.jpg?tr=n-dp_mini" alt="" />
                        </div>
                        <div className="followers-hash">
                          <img className="hash-folloers-img" src="https://images.kooapp.com/transcode_input/27052021003208.jpg?tr=n-dp_mini" alt="" />
                        </div>
                        <div className="followers-hash">
                          <img className="hash-folloers-img" src="https://images.kooapp.com/transcode_input/27052021003208.jpg?tr=n-dp_mini" alt="" />
                        </div>
                        <div className="followers-hash">
                          <img className="hash-folloers-img" src="https://images.kooapp.com/transcode_input/27052021003208.jpg?tr=n-dp_mini" alt="" />
                        </div>
                    </div>
                  </div>
                  <div className="hash-add-btn">
                    <img src="https://www.kooapp.com/assets/57662a37.svg" alt="" />
                  </div>
                </div>
    </div>
  );
};

export default HashTags;
