import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetFamiliarized from "./pages/GetFamiliarized";

function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "Home - Mind And Manas";
    } else if (path === "/about") {
      document.title = "About Us - Mind And Manas";
    } else if (path === "/contact") {
      document.title = "Contact - Mind And Manas";
    } else if (path === "/get-familiarized") {
      document.title = "Get Familiarized - Mind And Manas";
    } else {
      document.title = "Mind And Manas";
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/get-familiarized"
          element={<GetFamiliarized />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;