import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar() {
  return (
    <nav>
      <Link to="/services">Our Services</Link>
      &nbsp; | &nbsp;
      <Link to="/contact-us">Let's Talk</Link>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}