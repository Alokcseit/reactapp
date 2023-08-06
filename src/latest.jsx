import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
const latestbook = (
  <div>
    <div class="latestcontent">
      <div className="latestcontent1">SNEAK PEAK PAGES</div>
      <div className="latestcontent2">Check out past issues of magazine</div>
      <div className="latestcontent3"></div>
    </div>
    <br />

    <Container>
      <Row>
        {/* <Col sm="12" xxl="6">
          <div className="subbooks1">
            <div class="subbooks1content">
              <Link to="#">(ADD) Subscribe</Link>
            </div>
          </div>
        </Col> */}
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks2">
            <Link to="/turtle">
              <div className="subbooks2-1">
                <img src="./images/2.webp" alt="" class="image" />
              </div>
              <div className="subbooks2-2">
                <h2>Check Out These Issue !</h2>
                <h4>
                  <i class="fa-solid fa-bars"></i> REAd
                </h4>
              </div>
            </Link>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks3">
            <Link to="#">
              <div className="subbooks3-1">
                <img class="image1" src="./images/3.webp" alt="" />
              </div>
              <div className="subbooks3-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </Link>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks4">
            <Link href="#">
              <div className="subbooks4-1">
                <img class="image2" src="./images/4.webp" alt="" />
              </div>
              <div className="subbooks4-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </Link>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks5">
            <a href="#">
              <div className="subbooks5-1">
                <img class="image3" src="./images/5.webp" alt="" />
              </div>
              <div className="subbooks5-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </a>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks6">
            <a href="#">
              <div className="subbooks6-1">
                <img class="image3" src="./images/6.webp" alt="" />
              </div>
              <div className="subbooks6-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </a>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks7">
            <a href="#">
              <div className="subbooks7-1">
                <img class="image5" src="./images/7.webp" alt="" />
              </div>
              <div className="subbooks7-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </a>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks8">
            <a href="#">
              <div className="subbooks8-1">
                <img class="image6" src="./images/9.webp" alt="" />
              </div>
              <div className="subbooks8-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </a>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks9">
            <a href="#">
              <div className="subbooks9-1">
                <img class="image7" src="./images/10.webp" alt="" />
              </div>
              <div className="subbooks9-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </a>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks10">
            <a href="#">
              <div className="subbooks10-1">
                <img class="image8" src="./images/11.webp" alt="" />
              </div>
              <div className="subbooks10-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </a>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks11">
            <a href="#">
              <div className="subbooks11-1">
                <img class="image9" src="./images/12.webp" alt="" />
              </div>
              <div className="subbooks11-2">
                <h2>Check Out These Issue !</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </a>
          </div>
          <br />
        </Col>
        <Col sm="12" md="6" lg="4" xl="4" xxl="3.5">
          <div className="subbooks12">
            <a href="#">
              <div className="subbooks12-1">
                <img class="image10" src="./images/14.webp" alt="" />
              </div>
              <div className="subbooks12-2">
                <h2>Magazine Sneak Peak</h2>
                <h3>
                  <i class="fa-solid fa-bars"></i> READ
                </h3>
              </div>
            </a>
          </div>
          <br />
        </Col>
      </Row>
    </Container>
    <br />

    <div className="subbooks13">
      <div className="lo">
        <a class="load" href="#">
          <i class="fa-solid fa-spinner"></i> READ MORE
        </a>
      </div>
    </div>
    <br />
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
    <hr />
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
export default latestbook;
