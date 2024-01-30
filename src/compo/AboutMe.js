import React from "react";

export default function AboutMe() {
  return (
    <div
      className="containerAbout"
      id="About"
      style={{
        textAlign: "center",
        display: "grid",
        placeContent: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="row R">
        <div className="col-12" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="Aboutme Detail">
            <h3
              style={{
                color: "#f75023",
                fontSize: "250%",
                marginBottom: "30px",
              }}
            >
              I'm a Developer/Designer
            </h3>
            <p style={{ color: "#6f6b80" }}>
              "Hey 👋! I'm <b>Syed Muhammad Muslim</b>, a frontend web developer
              and designer. Proficient in HTML, CSS, and JavaScript, I
              specialize in crafting sleek and responsive interfaces. With
              expertise in Bootstrap and React.js, I bring a seamless blend of
              development and design to every project. Let's build something
              awesome together!"🚀
            </p>
            <div className="bttn">
              <a href="#Contacts" className="AL">
                <button className="AM">Hire Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
