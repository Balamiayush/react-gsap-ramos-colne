import React from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import MainCircle from "./components/MainCircle";
import Header from "./components/Header";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Lenis from "lenis";
const App = () => {
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div className="w-full  overflow-x-hidden z-100">
      <MainCircle  />
      <div className="w-full relative">
      <Loader />
        <Navbar />
        <Header />
        <Page2 />
        <Page3 />
      </div>
    </div>
  );
};

export default App;
