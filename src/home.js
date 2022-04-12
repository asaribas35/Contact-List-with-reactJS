import React from 'react'
import Navbar from './components/navbar'
import { Routes, Route} from "react-router-dom";
import App from './App';
import Todo from './todo';
import Cvhome from './cvhome';

function home() {
  return (
      <>
      
    <Navbar />
    <Routes>
    <Route path='/' element={<Cvhome />} />   
    <Route path="todo" element={<Todo />} />
    <Route path="contactapp" element={<App />} />
  </Routes>
  </>
  )
}

export default home