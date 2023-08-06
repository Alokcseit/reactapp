import "./App.css";
import "./Header.css";
import Header from "./Header";
import Menu from "./Menu";
import "./Menu.css";
import Search from "./Search";
import Valuecontentv from "./Valuecontent";
import "./Valuecontent.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Image from "./Image";
import Animal from "./Animal";
import Video from "./Video";
import Explore from "./Explore";
import Subscribe from "./Subscribe";
import Turtle from "./Turtle";
import "./Turtle.css";
import "./Image.css";
import "./Video.css";
import Shop from "./Shop";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header></Header>
                <Menu></Menu>
                <Valuecontentv></Valuecontentv>
              </div>
            }
          ></Route>
          <Route
            path="/image"
            element={
              <div>
                <Header></Header>
                <Menu></Menu>
                <Image></Image>
              </div>
            }
          ></Route>
          <Route
            path="/animal"
            element={
              <div>
                <Header></Header>
                <Menu></Menu>
                <Animal></Animal>
              </div>
            }
          ></Route>
          <Route
            path="/video"
            element={
              <div>
                <Header></Header>
                <Menu></Menu>
                <Video></Video>
              </div>
            }
          ></Route>
          <Route
            path="/explore"
            element={
              <div>
                <Header></Header>
                <Menu></Menu>
                <Explore></Explore>
              </div>
            }
          ></Route>
          <Route
            path="/subscribe"
            element={
              <div>
                <Header></Header>
                <Menu></Menu>
                <Subscribe></Subscribe>
              </div>
            }
          ></Route>
          <Route
            path="/turtle"
            element={
              <div>
                <Header></Header>
                <Menu></Menu>
                <Turtle></Turtle>
              </div>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <div>
                <Header></Header>
                <Menu></Menu>
                <Search></Search>
              </div>
            }
          ></Route>
          <Route
            path="/shop"
            element={
              <div>
                <Shop></Shop>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
