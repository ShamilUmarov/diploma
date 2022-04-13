import "./Header.css";
import headerImage from "../../assets/header5.jpg";

function Header() {
  return <header className="Header" >
    <img src={headerImage} alt="image" />
  </header>;
}

export default Header;
