import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import VideoPlayer from "./AnimalVideoPlayer";
import "./Valuecontent.css";
export default function Animal() {
  const videoUrl = "./videos/Animals.mp4";
  return (
    <div>
      <div class="firstcontainer">hello</div>
      <div class="vcontent">
        <VideoPlayer videoSrc={videoUrl} />
        <div class="bannertext">Animals</div>
      </div>
      <br></br>
      <Container>
        <Row>
          <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
            <div className="subbooks2">
              <Link to="/">
                <div className="subbooks2-1">
                  <img
                    src="https://i.natgeofe.com/k/7f3afbf5-27e2-42f6-a724-b0030c9ae7ec/binturong-update.jpg?w=795&h=551.25"
                    alt=""
                    class="image"
                  />
                </div>
                <div className="subbooks2-2">
                  <h2>MAMALS</h2>
                  <h4>
                    <i class="fa-solid fa-bars"></i> See More
                  </h4>
                </div>
              </Link>
            </div>
          </Col>
          <br></br>
          <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
            <div className="subbooks3">
              <Link to="#">
                <div className="subbooks3-1">
                  <img
                    class="image1"
                    src="https://i.natgeofe.com/k/1252a16b-0dbe-451c-9323-c51a0fbcbfb9/crow-swoop.jpg?w=795&h=447.5"
                    alt=""
                  />
                </div>
                <div className="subbooks3-2">
                  <h2>BIRDS</h2>
                  <h3>
                    <i class="fa-solid fa-bars"></i> See More
                  </h3>
                </div>
              </Link>
            </div>
            <br />
          </Col>
          <br></br>
          <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
            <div className="subbooks2">
              <Link to="/">
                <div className="subbooks2-1">
                  <img
                    src="https://i.natgeofe.com/k/3373927f-fa15-4c55-bf49-73f44073b768/burmese-python-tree.jpg?w=795&h=447.5"
                    alt=""
                    class="image"
                  />
                </div>
                <div className="subbooks2-2">
                  <h2>REPTILES</h2>
                  <h4>
                    <i class="fa-solid fa-bars"></i> See More
                  </h4>
                </div>
              </Link>
            </div>
          </Col>
          <br></br>
          <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
            <div className="subbooks2">
              <Link to="/">
                <div className="subbooks2-1">
                  <img
                    src="https://i.natgeofe.com/k/e65322d1-407b-41aa-b4c9-b80543362536/red-eyed-tree-frog-on-leaves.jpg?w=795&h=447.5"
                    alt=""
                    class="image"
                  />
                </div>
                <div className="subbooks2-2">
                  <h2>AMPHIBIANS</h2>
                  <h4>
                    <i class="fa-solid fa-bars"></i> See More
                  </h4>
                </div>
              </Link>
            </div>
          </Col>
          <br></br>
          <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
            <div className="subbooks2">
              <Link to="/">
                <div className="subbooks2-1">
                  <img
                    src="https://i.natgeofe.com/k/e1568ea5-bd19-42f5-8efa-cf5e642a6b48/christmas-island-crab-closeup.jpg?w=795&h=447.5"
                    alt=""
                    class="image"
                  />
                </div>
                <div className="subbooks2-2">
                  <h2>INVERTEBRATES</h2>
                  <h4>
                    <i class="fa-solid fa-bars"></i> See More
                  </h4>
                </div>
              </Link>
            </div>
          </Col>
          <br></br>
          <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
            <div className="subbooks2">
              <Link to="/">
                <div className="subbooks2-1">
                  <img
                    src="https://i.natgeofe.com/k/95d9f805-2ccf-45c0-906f-53ca85cde490/blue-marlin-jumping.jpg?w=795&h=447.5"
                    alt=""
                    class="image"
                  />
                </div>
                <div className="subbooks2-2">
                  <h2>FISH</h2>
                  <h4>
                    <i class="fa-solid fa-bars"></i> See More
                  </h4>
                </div>
              </Link>
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
