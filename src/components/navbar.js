import React from 'react'
import {Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
    
<nav className="navbar navbar-expand-md navbar-dark bg-dark ">
    <div className="container">

    <Link className='navbar-brand' to="/">Ali Sarıbaş</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <Link className='nav-link' to="/contactapp">Contact List App</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="/todo">ToDoApp</Link>
      </li>

    </ul>

  </div>
   
   
    </div>

    

</nav>       
    
    </>
  )
}

export default navbar