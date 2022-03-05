import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/index'
import Navbar from '../components/navbar/navbar';
import Footer from "../components/footer/footer";

const Routers = () => {

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
        </Routes>
        <Footer />
    </Router>
  )
}
export default Routers
