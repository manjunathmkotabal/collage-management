import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import home from "../images/home.png";
import phone from "../images/phone.png";
import fax from "../images/fax.png";
import email from "../images/emil.png";
import website from "../images/website.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={1}></Col>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Row>
              <Col md={3}>
                {" "}
                <img className="mr-2" src={home} alt="" />
                <b className="mt-2"> Address: </b>{" "}
              </Col>
              <Col>
                Ad Astra University,Banglore,India
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={3}>
                {" "}
                <img className="mr-2" src={phone} alt="" />
                <b className="mt-2"> Phone: </b>{" "}
              </Col>
              <Col>8792476144</Col>
            </Row>
            <br></br>
            <Row>
              <Col md={3}>
                {" "}
                <img className="mr-2" src={fax} alt="" />
                <b className="mt-2"> Fax: </b>{" "}
              </Col>
              <Col>it's too old,don't even try</Col>
            </Row>
            <br></br>
            <Row>
              <Col md={3}>
                {" "}
                <img className="mr-2" src={email} alt="" />
                <b className="mt-2"> Email: </b>{" "}
              </Col>
              <Col>addastra@gmail.edu</Col>
            </Row>
            <br></br>
            <Row>
              <Col md={3}>
                {" "}
                <img className="mr-2" src={website} alt="" />
                <b className="mt-2"> Website: </b>{" "}
              </Col>
              <Col>http://localhost:3000/</Col>
            </Row>
          </Col>
          <Col md={5}>
            <div className="mt-5">
              <h2>CONTACT US</h2>
              <br></br>
              <br></br>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.569225820153!2d77.5336364144656!3d12.935385219172614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1668529816270!5m2!1sen!2sin"
                width="602"
                height="550"
                frameborder="0"
                style={{ border: "0",borderRadius:"1rem" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
