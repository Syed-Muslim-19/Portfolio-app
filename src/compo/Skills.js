import React from "react";
import html from "./html.png";
import bs from "./bootstrap2.png";
import c from "./c.png";
import css from "./css-3.png";
import js from "./js.png";
import sql from "./mysql.png";
import node from "./node-js.png";
import rct from "./react2.png";
import next from "./next.png";
export default function Skills() {
  return (
    <div className="containerSkill" id="Skill">
      <h3
        style={{
          color: "#f75023",
          fontSize: "250%",
          marginBottom: "10%",
          marginTop: "20%",
          fontWeight: "bold",
        }}
      >
        Skills
      </h3>
      <div className="row R RS">
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "fit-content",
          }}
        >
          <div
            className="sticker"
            style={{ textAlign: "center" }}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img
              src={html}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>
              HTML
            </h3>
          </div>
        </div>
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "max-content",
          }}
        >
          <div
            className="sticker"
            style={{ textAlign: "center" }}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img
              src={css}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>CSS</h3>
          </div>
        </div>
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "max-content",
          }}
        >
          <div
            className="sticker"
            style={{ textAlign: "center" }}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img
              src={js}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>
              JAVASCRIPT
            </h3>
          </div>
        </div>
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "max-content",
          }}
        >
          <div
            className="sticker"
            data-aos="flip-right"
            data-aos-duration="1000"
            style={{ textAlign: "center" }}
          >
            <img
              src={bs}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>
              BOOTSTRAP
            </h3>
          </div>
        </div>
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "max-content",
          }}
        >
          <div
            className="sticker"
            data-aos="flip-right"
            data-aos-duration="1000"
            style={{ textAlign: "center" }}
          >
            <img
              src={rct}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>
              REACT.JS
            </h3>
          </div>
        </div>
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "max-content",
          }}
        >
          <div
            className="sticker"
            data-aos="flip-right"
            data-aos-duration="1000"
            style={{ textAlign: "center" }}
          >
            <img
              src={node}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>
              NODE.JS
            </h3>
          </div>
        </div>
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "max-content",
          }}
        >
          <div
            className="sticker"
            data-aos="flip-right"
            data-aos-duration="1000"
            style={{ textAlign: "center" }}
          >
            <img
              src={next}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>
              NEXT.JS
            </h3>
          </div>
        </div>
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "max-content",
          }}
        >
          <div
            className="sticker"
            data-aos="flip-right"
            data-aos-duration="1000"
            style={{ textAlign: "center" }}
          >
            <img
              src={c}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>C++</h3>
          </div>
        </div>
        <div
          className="col-6 stkr col-sm-4 col-md-3 col-lg-3"
          style={{
            height: "max-content",
          }}
        >
          <div
            className="sticker"
            data-aos="flip-right"
            data-aos-duration="1000"
            style={{ textAlign: "center" }}
          >
            <img
              src={sql}
              alt=""
              srcset=""
              style={{ width: "100%", height: "50%" }}
            />
            <h3 style={{ color: "rgb(252 108 68)", marginTop: "15px" }}>
              MySQL
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
