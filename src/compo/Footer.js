import React from "react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div className="footer-basic" data-aos="fade-up" data-aos-duration="1000">
      <footer>
        <div className="social">
          <SocialIcon
            className="icon"
            network="linkedin"
            url="https://www.linkedin.com/in/syedmuslim015/"
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "15px",
              border: "none",
            }}
          />
          <SocialIcon
            className="icon"
            network="facebook"
            url="https://www.facebook.com/profile.php?id=100009320153454&mibextid=LQQJ4d"
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "5px",
              border: "none",
            }}
          />
          <SocialIcon
            className="icon"
            network="google"
            url="mailto:muslim.snh@gmail.com"
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "5px",
              border: "none",
            }}
          />
          <SocialIcon
            className="icon"
            network="github"
            url="https://github.com/Syed-Muslim-19"
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "5px",
              border: "none",
            }}
          />
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#Home" style={{ color: "#ff3700" }}>
              Home
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#About" style={{ color: "#ff3700" }}>
              About
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#Skill" style={{ color: "#ff3700" }}>
              Skills
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#Projects" style={{ color: "#ff3700" }}>
              Projects
            </a>
          </li>
        </ul>
        <p className="copyright">Designed by Syed M Muslim © 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
