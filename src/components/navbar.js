import React from 'react'
import {Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">

    <a class="navbar-brand" >Ali Sarıbaş</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      <Link className='nav-link' to="/">Contact List App</Link>
      </li>
      <li class="nav-item">
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