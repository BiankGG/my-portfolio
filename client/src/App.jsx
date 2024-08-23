import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
