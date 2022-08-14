import React from 'react'
import image from '../src/sonp2.jpg'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Cvskills from './components/cvskills'
import Cvprojects from './components/cvprojects'
import Cvfooter from './components/cvfooter'
import Cvinfo from './components/cvinfo'

function cvhome() {
  return (
    <>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-2 '>
            <img src={image} className="img-fluid image" />
          </div>
          <div className='col-4'>
            <div className='row'><h2>Ali Sarıbaş</h2> </div>
            <div className='row'><h6>Computer Engineer</h6> </div>
            
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container'>
        <div className='row'>
        
        <Cvinfo />


        </div>

      </div>
      <hr></hr>
      {/* section2 */}
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <h2>EDUCATION</h2>
            <h5>Study Program</h5>
            <p>Ege University/Computer Engineering</p>
          </div>
          <Cvskills />
        </div>
        {/* //////////////////////////////////////////// */}
        <div className='row mt-4'>
        <div className='col-12 col-sm-6'>
            <h2>WORK EXPERIENCE</h2>

            <h5>Full Time Job</h5>
            <p>Erdemir   (2022-Now) </p> 
          </div>
          <div className='col-12 col-sm-6'>
            <Cvprojects />
          </div>

        </div>
        {/* //////////////////////////////////////////// */}

      </div>
      

      {/* section2 */}
      <hr></hr>
      {/* section3 */}
      <Cvfooter />
      {/* section3 */}
      <hr></hr>
    </>
  )
}

export default cvhome