import React, { useState } from "react";
import { Link } from "react-router-dom";
function Menu() {
  const [isMobile, SetIsMobile] = useState(false);
  return (
    <nav class="menu">
      <div class="menuchild1">
        <img src="./images/kids.webp" alt="" />
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => SetIsMobile(false)}
      >
        <Link to="/image" class="imag">
          <i class="fa-solid fa-images"></i>
          <li>IMAGE</li>
        </Link>
        <Link to="/video" class="video">
          <i class="fa-solid fa-circle-play"></i>
          <li>VIDEO</li>
        </Link>
        <Link to="/animal" class="animal">
          <i class="fa-solid fa-paw"></i>
          <li>ANIMAL</li>
        </Link>
        <Link to="/explore" class="explore">
          <i class="fa-solid fa-location-crosshairs"></i>
          <li>EXPLORE</li>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </Link>
        <Link to="/subscribe" class="subscribe">
          <i class="fa-regular fa-pen-to-square"></i>
          <li>SUBSCRIBE</li>
        </Link>
      </ul>
      <button class="mobile-menu-icon" onClick={() => SetIsMobile(!isMobile)}>
        {isMobile ? (
          <i class="fa-solid fa-bars"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </button>
      {/* <div className="menuchild3">
      <Link to="/video">
        <div className="menusubchild3">
          <i class="fa-solid fa-circle-play"></i>
        </div>
        <div className="menusubchild4">Videos</div>
      </Link>
    </div>
    <div className="menuchild4">
      <Link to="/animal">
        <div className="menusubchild5">
          <i class="fa-solid fa-paw"></i>
        </div>
        <div className="menusubchild6">Animals</div>
      </Link>
    </div>
    <div className="menuchild5">
      <Link to="/explore">
        <div className="menusubchild7">
          <i class="fa-solid fa-location-crosshairs"></i>
        </div>
        <div className="menusubchild8">Explore</div>
      </Link>
    </div>
    <div className="menuchild6">
      <Link to="/subscribe">
        <div className="menusubchild9">
          <i class="fa-solid fa-subscript"></i>
        </div>
        <div className="menusubchild10">Subscribe</div>
      </Link>
    </div> */}

      {/* <div className="checkbox">
      <div class="checkbtn">
        <a href="#">
          {" "}
          <i class="fa-solid fa-bars"></i>
        </a>
        <div className="menudropdown">
          <ul>
            <li>
              <a href="#">IMAGE</a>
            </li>
            <li>
              <a href="#">VIDEO</a>
            </li>
            <li>
              <a href="#">ANIMAL</a>
            </li>
            <li>
              <a href="#">EXPLORE</a>
            </li>
            <li>
              <a href="#">SUBSCRIBE</a>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    </nav>
  );
}
export default Menu;
