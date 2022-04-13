import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Meny from "./pages/Meny";
import Promo from "./pages/Promo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Meny" element={<Meny />} />
        <Route path="/Promo" element={<Promo />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
