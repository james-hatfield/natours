import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <About></About>
        <Features></Features>
      </main>
    </>
  );
}

export default App;
