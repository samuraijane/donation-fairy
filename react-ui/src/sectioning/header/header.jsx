import { NavLink } from "react-router-dom";
import Greeting from '../../components/greeting'

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
      <Greeting />
    </header>
  );
};

export default Header;
