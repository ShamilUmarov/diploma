import "./Header.css";
import headerImage from "../../assets/header4.jpg";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`,
  };

  return (
    <header className="Header" style={style}>
      <h1></h1>
      <p></p>
    </header>
  );
}

export default Header;
