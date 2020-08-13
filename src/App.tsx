import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";
import Stories from "./components/Stories/Stories";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import BookingModal from "./components/Booking/BookingModal/BookingModal";

function App() {
  return (
    <>
      <BookingModal />
      <Navigation></Navigation>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
