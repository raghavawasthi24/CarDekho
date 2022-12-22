import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Offer from './Offer';
import Footer from './Footer';
import Landing from './Landing';
import How from './How';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        {/* <Route path="/FAQS" element={<Offer/>}/> */}
        <Route path="/howtoRent" element={<How/>}/>
        {/* <Route path="/FAQS" element={<Offer/>}/> */}
        <Route path="/contact" element={<Offer/>}/>
        <Route path="/offerARide" element={<Offer/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
