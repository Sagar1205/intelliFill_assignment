import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    // <div>App</div>
    <div className="flex flex-col justify-between items-center min-h-screen"> 
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App