import { useState } from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/Home';

function App() {

  return (
    <>
      <div className="flex flex-col justify-between items-center min-h-screen">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App
