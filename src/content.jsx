import { Link } from "react-router-dom";
const content = (
  <div class="header">
    <div className="headersubchild">
      <div class="child1">
        <Link to="/search">
          SEARCH <i class="fa-solid fa-magnifying-glass"></i>
        </Link>
      </div>
      <div class="child2">
        <Link to="/shop">
          SHOP <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  </div>
);
export default content;
