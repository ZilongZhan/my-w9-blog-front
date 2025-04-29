import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav className="navigator">
      <ul className="navigator__list">
        <li>
          <NavLink className="navigator__link" to="/recipes">
            Recipes😋
          </NavLink>
        </li>
        <li>
          <NavLink className="navigator__link" to="/add-recipe">
            Add Recipe📝
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
