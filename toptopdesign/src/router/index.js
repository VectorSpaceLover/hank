import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/index'
import Navbar from '../components/navbar/navbar';
import Collection from "../pages/collection";
import AllCollections from "../pages/collection/components/allCollection";
import DetailCollection from "../pages/collection/components/detailCollection";

const Routers = () => {

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/collection" element={
              <Collection>
                <AllCollections />
              </Collection>
            }/>
            <Route exact path="/collection/:id" element={
              <Collection>
                <DetailCollection />
              </Collection>
            }/>
        </Routes>
    </Router>
  )
}
export default Routers
