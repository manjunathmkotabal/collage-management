import React from "react";
import uni from "../images/uni.jpg";

function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <h2>About us</h2>
      <br></br>
      <div style={{ width: "1300px" }} className="center-div">
        <div className="row">
          <div className="col-6">
            <p className="  ">
              Ad Astra University, was established yesterday when i started doing dbms project,
              In the span of one day, AAU has come a long way and has made
              its impact felt not only in the country, but also in the world. AAU is
              an Autonomous Institution, granted autonomy by the Harvard University for a period of unlimited years, starting from
              yesterday the 2022-11-15.
              <br></br>
              <br></br>
              The college runs many undergraduate programmes, many post graduate
              programmes and so many Ph.D. courses, permanently affiliated to the
              Harvard University.
              <br></br>
              <br></br>
              Students of the college, continue to innovate and solve the worlds problem to make world a better place.
              the AA University is a place where you get well educated people not "well trained".

            </p>
          </div>
          <div className="align-self-end col-6">
            <img src={uni} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
