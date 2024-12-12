import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Flipcard from "./Components/Flipcard";
import Achievements from "./Components/Achievements";
import TimelineCards from "./Components/TimelineCards";
import Services from "./Components/Services";
import MagicalNumbers from "./Components/MagicalNumbers";
import ProductCategories from "./Components/ProductCategories";
import Identity from "./Components/Identity";
import Footer from "./Components/Footer";
import Servicepage from "./Components/Pages/ServicesPage/ServicePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Pages/Aboutpage/Aboutpage";
// import ContactPage from "./Components/Pages/ContactSite/ContactPage";
import TeamPage from "./Components/Pages/TeamPage/TeamPage";
import Contact from "../src/Components/Pages/Contactpage/Contact";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              {/* <Flipcard /> */}
              {/* <Achievements /> */}
              {/* <TimelineCards /> */}
              {/* <Services /> */}
              {/* <MagicalNumbers /> */}
              {/* <ProductCategories /> */}
              {/* <Identity /> */}
              {/* <Footer /> */}
            </>
          }
        />
        <Route
          path="ServicesPage"
          element={
            <>
              <Navbar />
              <Servicepage />
              <Footer />
            </>
          }
        />
        <Route
          path="TeamPage"
          element={
            <>
              <Navbar />
              <TeamPage />
              <Footer />
            </>
          }
        />
        <Route
          path="AboutPage"
          element={
            <>
              <Navbar />
              <AboutPage />
              <Footer />
            </>
          }
        />
        <Route
          path="ContactPage"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="ProductPage"
          element={
            <>
              <Navbar />
              <ProductPage />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#222",
                WebkitTextStroke: "2px crimson",
                fontSize: "100px",
              }}
            >
              Page Not Found
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
