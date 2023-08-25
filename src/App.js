import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Hero from "./components/hero/hero";
import Featured from "./components/Featured/Featured";
import Currencies from "./components/allCurrencies/currencies";
import Signup from "./components/signup/signup";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/allcurrencies" element={<Currencies />} />
          <Route path="/featured" element={<Featured />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
