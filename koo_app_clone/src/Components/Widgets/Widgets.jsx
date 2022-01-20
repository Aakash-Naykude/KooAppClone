import { Link } from "react-router-dom";
import "./Widgets.css";
function Widgets({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[370px] py-1 space-y-5 sticky">
      <div id="tabcont" className=" space-y-2.5 mt-4 mb-2.5 xl:ml-4 fixed">
        <div className="full-div">
          {/* search box */}
          <input type="text" className="search" placeholder="Search" />
          <img
            className="mike-icon"
            src="https://img.icons8.com/fluency-systems-regular/48/000000/microphone--v2.png"
            alt="Microphone"
          />

          {/* trending hastags */}
          <div className="trending-hastags">
            <div>Trending Hashtags</div>

            <div className="hastag-1">
              <div>
                #maharanapratap
                <span>
                  <div className="profiles">
                    <img
                      src="https://img.icons8.com/plumpy/50/000000/circled-a.png"
                      alt="1"
                    />
                    <img
                      src="https://img.icons8.com/emoji/48/000000/circled-m-emoji.png"
                      alt="2"
                    />
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/circled-n.png"
                      alt="3"
                    />
                    <Link to="/addinput" >
                      <img
                        className="add"
                        src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                        alt="1"
                      />
                    </Link>
                  </div>
                </span>
              </div>
            </div>
            <div className="hastag-1">
              <div>
                #aparnayadav
                <span>
                  <div className="profiles">
                    <img
                      src="https://img.icons8.com/plumpy/50/000000/circled-p.png"
                      alt="1"
                    />
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/s.png"
                      alt="4"
                    />
                    <img
                      src="https://img.icons8.com/ios/50/000000/circled-k.png"
                      alt="5"
                    />
                    <Link to="/addinput">
                      <img
                        className="add"
                        src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                        alt="1"
                      />
                    </Link>
                  </div>
                </span>
              </div>
            </div>
            <div className="hastag-1">
              <div>
                #upthriller
                <span>
                  <div className="profiles">
                    <img
                      src="https://img.icons8.com/dotty/80/000000/circled-h.png"
                      alt="1"
                    />
                    <img
                      src="https://img.icons8.com/fluency/48/000000/xbox-l.png"
                      alt="2"
                    />
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/v-bucks.png"
                      alt="1"
                    />
                    <Link to="/addinput">
                      <img
                        className="add"
                        src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                        alt="1"
                      />
                    </Link>
                  </div>
                </span>
              </div>
            </div>
            <div className="hastag-1">
              <div>
                #omicron
                <span>
                  <div className="profiles">
                    <img
                      src="https://img.icons8.com/color/48/000000/copyright--v1.png"
                      alt="1"
                    />
                    <img
                      src="https://img.icons8.com/doodle/48/000000/google-logo.png"
                      alt="1"
                    />
                    <img
                      src="https://img.icons8.com/dotty/80/000000/circled-d.png"
                      alt="1"
                    />
                    <Link to="/addinput">
                      <img
                        className="add"
                        src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                        alt="1"
                      />
                    </Link>
                  </div>
                </span>
              </div>
            </div>
            <div className="hastag-1">
              <div>
                #covid19
                <span>
                  <div className="profiles">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/circled-o.png"
                      alt="1"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/xbox-r--v1.png"
                      alt="2"
                    />
                    <img
                      src="https://img.icons8.com/color/48/000000/xbox-b--v1.png"
                      alt="3"
                    />
                    <Link to="/addinput">
                      <img
                        className="add"
                        src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                        alt="1"
                      />
                    </Link>
                  </div>
                </span>
              </div>
            </div>
          </div>
          {/* About  press contact*/}

          <div id="questions">
            <Link to="/about">
              <span>About</span>
            </Link>
            <span>Press</span> <span>Contact</span> <span>Media</span>{" "}
            <span>Privacy</span> <span>Terms</span> <span>Guidelines</span>{" "}
            <span>Compliance</span> <span>Sitemap</span> <span>Eminence</span>{" "}
            <span>FAQs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
