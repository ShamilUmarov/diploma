import "./Header.css";
import headerImage from "../../assets/header5.jpg";

function Header() {
  return <header className="Header" >
    <img src={headerImage} alt="des" />
  </header>;
}

export default Header;
