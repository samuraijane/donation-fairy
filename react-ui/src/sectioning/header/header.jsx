import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div> <NavLink to="/">home</NavLink></div>
      <ul>
        <li>
          <NavLink to="/categories">categories</NavLink>
        </li>
        <li>
          <NavLink to="/locations">locations</NavLink>
        </li>
        <li>
          <NavLink to="/donate">donate</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
