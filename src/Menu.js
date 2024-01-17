import React, { useState } from "react";
import { Link } from "react-router-dom";
function Menu() {
  const [isMobile, SetIsMobile] = useState(false);
  return (
    <nav className="menu">
      <div className="menuchild1">
        <img src="./images/kids.webp" alt="" />
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => SetIsMobile(false)}
      >
        <Link to="/image" className="imag">
          <i className="fa-solid fa-images"></i>
          <li>IMAGE</li>
        </Link>
        <Link to="/video" className="video">
          <i className="fa-solid fa-circle-play"></i>
          <li>VIDEO</li>
        </Link>
        <Link to="/animal" className="animal">
          <i className="fa-solid fa-paw"></i>
          <li>ANIMAL</li>
        </Link>
        <Link to="/explore" className="explore">
          <i className="fa-solid fa-location-crosshairs"></i>
          <li>EXPLORE</li>
          <div className="dropdown-content">
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
          </div>
        </Link>
        <Link to="/subscribe" className="subscribe">
          <i className="fa-regular fa-pen-to-square"></i>
          <li>SUBSCRIBE</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => SetIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
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
