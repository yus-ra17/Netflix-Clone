import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="foot">
        <div className="icons">
          <ul>
            <li>
              <FacebookOutlinedIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notice</li>
          <li>Service Code</li>
          <div>&copy; 1997-2024 Netflix, Inc.</div>
        </ul>
      </div>

      <div>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cokkie Preferences</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* <div className="service">
        <p>Service Code</p>
      </div> */}
    </div>
  );
}

export default Footer;
