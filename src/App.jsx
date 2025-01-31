import React from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import MainCircle from "./components/MainCircle";
import Header from "./components/Header";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
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
    <div className="w-full h-[500vh]  overflow-x-hidden z-100">
      <MainCircle  />
     
      <Loader />
        <Navbar />
        <Header />
        <Page2 />
        <Page3 />
        <Page4 />
        <section>
          <div className="w-full  ">
          <h1 className=" text-[6rem] capitalize font-bold relative z-10 text-center">Made with ❤️ by <span className="text-red-500">Aayush.clone</span></h1>
          </div>
        </section>
    </div>
  );
};

export default App;
