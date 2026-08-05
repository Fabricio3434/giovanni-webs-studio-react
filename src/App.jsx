import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { AboutMe } from "./pages/AboutMe/AboutMe.jsx";
import { TheStudy } from "./pages/TheStudy/TheStudy.jsx";
import { Footer } from "./components/layout/Footer/Footer.jsx";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/the-study" element={<TheStudy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
