import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";
import Stories from "./components/Stories/Stories";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <About></About>
        <Features></Features>
        <Tours></Tours>
        <Stories></Stories>
      </main>
    </>
  );
}

export default App;
