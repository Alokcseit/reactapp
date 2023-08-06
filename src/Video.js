import React from "react";
import { Container, Col, Row } from "reactstrap";
import VideoPlayer from "./AnimalVideoPlayer";
export default function Video() {
  const videoUrl = "./videos/Animals.mp4";
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
              <video width="310" height="240" controls>
                <source src="./videos/africanlion.mp4" type="video/webm" />
                <source src="./videos/africanlion.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              African-lion
            </div>
          </Col>

          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/gorila.mp4" type="video/webm" />
                <source src="./videos/gorila.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Gorila
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/spoted.mp4" type="video/webm" />
                <source src="./videos/spoted.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Spoted animal
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/cobra.mp4" type="video/webm" />
                <source src="./videos/cobra.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Cobra
            </div>
          </Col>
          <br></br>
          <br></br>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/armyant.mp4" type="video/webm" />
                <source src="./videos/armyant.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Army-ant
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/racoon.mp4" type="video/webm" />
                <source src="./videos/racoon.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Racoon
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/wolf.mp4" type="video/webm" />
                <source src="./videos/wolf.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Wolf
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/bettle.mp4" type="video/webm" />
                <source src="./videos/bettle.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Bettle
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/secretbird.mp4" type="video/webm" />
                <source src="./videos/secretbird.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Secret Bird
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/bluewhale.mp4" type="video/webm" />
                <source src="./videos/bluewhale.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              Bluewhale
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/africanelephant.mp4" type="video/webm" />
                <source src="./videos/africanelephant.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              African Elephant
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <div class="videocard">
              <video width="310" height="240" controls>
                <source src="./videos/polarbear.mp4" type="video/webm" />
                <source src="./videos/polarbear.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
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
