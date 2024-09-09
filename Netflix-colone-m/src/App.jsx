import { useState } from "react";
import "./App.css";
// import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner/>
      <Footer />
    </>
  );
}

export default App;
