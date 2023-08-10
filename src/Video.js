import React from "react";
import { Container, Col, Row } from "reactstrap";
import VideoPlayer from "./AnimalVideoPlayer";
export default function Video() {
  const videoUrl =
    "https://player.vimeo.com/external/468451144.sd.mp4?s=1a225f021e1bb831f8973685579845d84fb2521c&profile_id=164&oauth2_token_id=57447761";
  return (
    <div>
      <div className="container1"></div>
      <div>
        <VideoPlayer videoSrc={videoUrl} />
      </div>
      <br></br>
      <Container>
        <Row>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/tlZwYsJpqjo"
              ></iframe>
              African-lion
            </div>
          </Col>
          <br></br>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                src="https://www.youtube.com/embed/rHhSCO5-3Pg"
                width="310"
                height="220"
              ></iframe>
              Gorila
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/ifXMpuNk9RA"
              ></iframe>
              Spoted animal
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/ImUgAzHSyIc"
              ></iframe>
              Cobra
            </div>
          </Col>
          <br></br>
          <br></br>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/A_hEZNxG_H8"
              ></iframe>
              Army-ant
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/1lViKrWgTYk"
              ></iframe>
              Racoon
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/VYKsI5ILiaQ"
              ></iframe>
              Wolf
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/veY5fyt66cg"
              ></iframe>
              Bettle
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/7itwHJiNRz4"
              ></iframe>
              Secret Bird
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/dciLg3Zm1hI"
              ></iframe>
              Bluewhale
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/Fk3VdpuFx0Q"
              ></iframe>
              African Elephant
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <iframe
                width="310"
                height="220"
                src="https://www.youtube.com/embed/XdCaBF8NJ00"
              ></iframe>
              Polar-Bear
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <hr></hr>
      <div className="footer">
        <div className="footercontent1">
          <ul>
            <li>LEGAL</li>
            <br />
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Your US State Privacy Rights</a>
            </li>
            <li>
              <a href="#">Children's Online Privacy Policy</a>
            </li>
            <li>
              <a href="#">Interest-Based Ads</a>
            </li>
            <li>
              <a href="#">About Nielsen Measurement</a>
            </li>
            <li>
              <a href="#">Do Not Sell or Share My Personal Information</a>
            </li>
          </ul>
        </div>
        <div className="footercontent2">
          <ul>
            <li>OUR SITES</li>
            <br />
            <li>
              <a href="#">National Geographic</a>
            </li>
            <li>
              <a href="#">National Geographic Education</a>
            </li>
            <li>
              <a href="#">shop NAT GEO</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
          </ul>
        </div>
        <div className="footercontent3">
          <ul>
            <li>JOIN US</li>
            <br />
            <li>
              <a href="#">Subscribe</a>
            </li>
            <li>
              <a href="#"> Manage Your Subscription</a>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <Container>
        <Row class="lastfooter">
          <Col sm="12" md="10" lg="8" xl="7" xxl="6">
            <div class="ima">
              <img class="lastimg" src="./images/15.webp" alt="" />
            </div>
          </Col>
          <Col>
            <div class="text">
              <p>
                {" "}
                Copyright © 1996-2015 National Geographic Society | Copyright ©
                2015-2023 National Geographic Partners, LLC. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
