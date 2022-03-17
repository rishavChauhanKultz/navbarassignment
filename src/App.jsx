import { useState } from 'react'
import React from "react";
import logo from './logo.svg'
import './App.css'
 import Navbar from './components/NavBar'
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom"
import About from './components/About'
import Home from './components/Home'
import Movies from './components/MovieDashBoard';
 import SingleMovie from './components/SingleMovie';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <>
      
      <Router>
        <nav>
        <Navbar/>
        </nav>
      <Routes>
        <Route exact path="/" element={<About/>}></Route>
        <Route  path="/home" element={<Home/>}></Route>
        <Route exact path="/movies" element={<Movies/>}/>
        <Route path="/:id" element={<SingleMovie/>}></Route>
      </Routes>
      </Router>
      </>
    </div>
  )
}

export default App
