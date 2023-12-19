import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import { PrivateRoutes } from "./pages/PrivateRoutes";
import SingleRecipe from './pages/singlerecipe';
import Search from './pages/Search';
import "./App.css"


const App = () => {
  return (
   <Router>
      <Navbar/>
      <div className="container main">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/recipes" exact element={<Recipes />} />
          <Route path="/recipes/:id" element={ <SingleRecipe/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
   </Router>
  )
}

export default App