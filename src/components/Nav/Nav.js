import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/Meny">Menu</NavItem>
        <NavItem url="/Promo">Promo</NavItem>
        <NavItem url="/Services ">Services</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
