import { Link } from "react-router-dom";
import "./Widgets.css";
import HashTags from "./HashTags";

function Widgets({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[370px] py-1 space-y-5 sticky">
      <div id="tabcont" className=" space-y-2.5 mt-4 mb-2.5 xl:ml-4 fixed">
        {/* workingPart */}
        <div className="full-div">
          {/* search box */}
          <div className="hash-srch-container">
            
          </div>

          {/* trending hastags */}
          <div className="hash-container">
            <div className="hash-wrap">
              <div className="hash-title-container">
                <h5 className="hash-title">Trending Hashtags</h5>
              </div>

              <div className="hash-containt-container">
                <HashTags/>
                <HashTags/>
                <HashTags/>
              </div>
            </div>
          </div>
          {/* About  press contact*/}

          <div id="questions">
            <Link to="/about">
              <span>About</span>{" "}
            </Link>{" "}
            <span>Press</span>{" "}
            <Link to="/contact">
              <span>Contact</span>{" "}
            </Link>{" "}
            <span>Media</span> <span>Privacy</span> <span>Terms</span>{" "}
            <span>Guidelines</span> <span>Compliance</span> <span>Sitemap</span>{" "}
            <span>Eminence</span> <span>FAQs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
