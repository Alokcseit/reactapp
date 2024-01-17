import { Link } from "react-router-dom";
const content = (
  <div className="header">
    <div className="headersubchild">
      <div className="child1">
        <Link to="/search">
          SEARCH <i className="fa-solid fa-magnifying-glass"></i>
        </Link>
      </div>
      <div className="child2">
        <Link to="/shop">
          SHOP <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  </div>
);
export default content;
