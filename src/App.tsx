import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <About></About>
        <Features></Features>
        <Tours></Tours>
      </main>
    </>
  );
}

export default App;
