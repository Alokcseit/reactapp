import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
const items = [
  {
    src: "https://wallpaperaccess.com/full/4543429.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://wallpaperaccess.com/full/812062.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://wallpaperaccess.com/full/4152988.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: "https://wallpaperaccess.com/full/2979721.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
    key: 4,
  },
  {
    src: "https://wallpaperaccess.com/full/3151052.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
    key: 5,
  },
  {
    src: "https://wallpaperaccess.com/full/4543509.jpg",
    altText: "Slide 6",
    caption: "Slide 6",
    key: 6,
  },
  {
    src: "https://wallpaperaccess.com/full/4543530.jpg",
    altText: "Slide 7",
    caption: "Slide 7",
    key: 7,
  },
  {
    src: "https://wallpaperaccess.com/full/4543532.jpg",
    altText: "Slide 8",
    caption: "Slide 8",
    key: 8,
  },
  {
    src: "https://wallpaperaccess.com/full/4543542.jpg",
    altText: "Slide 9",
    caption: "Slide 9",
    key: 9,
  },
  {
    src: "https://wallpaperaccess.com/full/1204159.jpg",
    altText: "Slide 10",
    caption: "Slide 10",
    key: 10,
  },
  {
    src: "https://wallpaperaccess.com/full/4543566.jpg",
    altText: "Slide 11",
    caption: "Slide 11",
    key: 11,
  },
  {
    src: "https://wallpaperaccess.com/full/4543574.jpg",
    altText: "Slide 12",
    caption: "Slide 12",
    key: 12,
  },
  {
    src: "https://wallpaperaccess.com/full/4543575.jpg",
    altText: "Slide 13",
    caption: "Slide 13",
    key: 13,
  },
  {
    src: "https://wallpaperaccess.com/full/4543578.jpg",
    altText: "Slide 14",
    caption: "Slide 14",
    key: 14,
  },
  {
    src: "https://wallpaperaccess.com/full/4543509.jpg",
    altText: "Slide 15",
    caption: "Slide 15",
    key: 15,
  },
];

function Image(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          style={{ width: "100%", height: "580px" }}
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <div className="firstcontainer"> </div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                style={{ width: "100%", height: "190px" }}
                alt="Sample"
                src="https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <CardBody>
                <CardTitle tag="h5">Rooster</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Rooster
                </CardSubtitle>
                <CardText>Indian Roster</CardText>
                <Button style={{ backgroundColor: "#fe5d00" }}>
                  know more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                style={{ width: "100%", height: "190px" }}
                alt="Sample"
                src="https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <CardBody>
                <CardTitle tag="h5">Pandas</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  panda
                </CardSubtitle>
                <CardText>pandas</CardText>
                <Button style={{ backgroundColor: "#fe5d00" }}>
                  know more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                style={{ width: "100%", height: "190px" }}
                alt="Sample"
                src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <CardBody>
                <CardTitle tag="h5">parrot</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  parrot
                </CardSubtitle>
                <CardText>cute parrot</CardText>
                <Button style={{ backgroundColor: "#fe5d00" }}>
                  know more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                style={{ width: "100%", height: "190px" }}
                alt="Sample"
                src="https://images.pexels.com/photos/568022/pexels-photo-568022.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <CardBody>
                <CardTitle tag="h5">Baby sheep</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  sheep
                </CardSubtitle>
                <CardText>cute sheep</CardText>
                <Button style={{ backgroundColor: "#fe5d00" }}>
                  know more
                </Button>
              </CardBody>
            </Card>
            <br></br>
          </Col>

          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                style={{ width: "100%", height: "190px" }}
                alt="Sample"
                src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <CardBody>
                <CardTitle tag="h5">squarel</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Squarel
                </CardSubtitle>
                <CardText>cute squarel</CardText>
                <Button style={{ backgroundColor: "#fe5d00" }}>
                  know more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                style={{ width: "100%", height: "190px" }}
                alt="Sample"
                src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <CardBody>
                <CardTitle tag="h5">zebra</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  zebra
                </CardSubtitle>
                <CardText>zebra</CardText>
                <Button style={{ backgroundColor: "#fe5d00" }}>
                  know more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                style={{ width: "100%", height: "190px" }}
                alt="Sample"
                src="https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&w=600"
              />
              <CardBody>
                <CardTitle tag="h5">Dogs</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  dog
                </CardSubtitle>
                <CardText>dogs</CardText>
                <Button style={{ backgroundColor: "#fe5d00" }}>
                  know more
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4" xl="3" xxl="3">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                style={{ width: "100%", height: "190px" }}
                alt="Sample"
                src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <CardBody>
                <CardTitle tag="h5">Cat</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  cat
                </CardSubtitle>
                <CardText>cute cat</CardText>
                <Button style={{ backgroundColor: "#fe5d00" }}>
                  know more
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <br></br>
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
export default Image;
