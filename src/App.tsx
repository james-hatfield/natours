import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";
import Stories from "./components/Stories/Stories";
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
    </>
  );
}

export default App;
