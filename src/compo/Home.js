import React from "react";
import DP from "./dp.png";
import { SocialIcon } from "react-social-icons";
export default function Home() {
  return (
    <div className="containerHome" id="Home">
      <div className="row R">
        <div
          className="col-12 col-md-6  col-sm-6 col-lg-6 "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={DP} alt="" srcset="" className="Dp" />
        </div>
        <div
          className="col-12 col-md-6 col-sm-6 col-lg-6 HC1"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="Detail">
            <h3 style={{ color: "#f75023", fontSize: "250%" }}>Hello, I'm</h3>
            <h3 style={{ fontWeight: "550", fontSize: "30px" }}>
              Syed Muhammad Muslim
            </h3>
            <p style={{ fontWeight: "bold" }}>
              A <span style={{ color: "#876ff0" }}>Creative Developer</span>{" "}
              From
              <span style={{ color: "#30c367" }}> Pakistan</span>
            </p>
            <p style={{ color: "#6f6b80" }}>
              I'm creative developer based in Pakistan, and I'm very passionate
              and dedicated to my work.
            </p>

            <a href="#About" className="AL">
              <button className="AM">About Me</button>
            </a>

            <SocialIcon
              className="icon"
              network="linkedin"
              url="https://www.linkedin.com/in/syedmuslim015/"
              style={{ width: "30px", height: "30px", marginLeft: "15px" }}
            />
            <SocialIcon
              className="icon"
              network="facebook"
              url="https://www.facebook.com/profile.php?id=100009320153454&mibextid=LQQJ4d"
              style={{ width: "30px", height: "30px", marginLeft: "3px" }}
            />
            <SocialIcon
              className="icon"
              network="google"
              url="mailto:muslim.snh@gmail.com"
              style={{ width: "30px", height: "30px", marginLeft: "3px" }}
            />
            <SocialIcon
              className="icon"
              network="github"
              url="https://github.com/Syed-Muslim-19"
              style={{ width: "30px", height: "30px", marginLeft: "3px" }}
            />
          </div>
        </div>

        <div className="col-12">
          <center>
            <h3
              style={{
                fontFamily: "'Brush Script MT', cursive",
                marginTop: "10%",
                marginBottom: "5%",
                fontSize: "40px",
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              "Success is the sum of small efforts, repeated day in and day out"
            </h3>
          </center>
        </div>
      </div>
    </div>
  );
}
