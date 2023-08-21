import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Rcenter from './components/Rcenter'
import Donate from './components/Donate'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
    
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Rcenter" element={<Rcenter/>} />
          <Route path="/Donate" element={<Donate />} />
        </Routes>
       <Footer />
      </BrowserRouter>
    </div>

    </>
  )
  
}

export default App
