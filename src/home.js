import React from 'react'
import Navbar from './components/navbar'
import { Routes, Route} from "react-router-dom";
import App from './App';
import Todo from './todo';

function home() {
  return (
      <>
      
    <Navbar />
    <Routes>
    <Route path='/' element={<App />} />   
    <Route path="todo" element={<Todo />} />
  </Routes>
  </>
  )
}

export default home