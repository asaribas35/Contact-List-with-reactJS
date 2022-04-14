import React from 'react'
import image from '../src/sonp2.jpg'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Cvskills from './components/cvskills'
import Cvprojects from './components/cvprojects'
import Cvfooter from './components/cvfooter'

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
            <div className='row'><p>New Graduated</p> </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container'>
        <div className='row'>
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <div className='row'>
                <div className='col-1'><i className="fa-solid fa-envelope"></i></div>
                <div className='col-9'><a href='mailto:alisaribash35@gmail.com'><p>alisaribash35@gmail.com</p></a> </div>
              </div>
            </div>
            <div className='col-12 col-sm-6'>
              <div className='row'>
                <div className='col-1'><i className="fa-solid fa-phone"></i></div>
                <div className='col-9'><p>554 721 71 82</p></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <div className='row'>
                <div className='col-1'><i className="fa-solid fa-house"></i></div>
                <div className='col-9'><p>İzmir,Türkiye</p></div>
              </div>
            </div>
            <div className='col-12 col-sm-6'>
              <div className='row'>
                <div className='col-1'><i className="fa-brands fa-linkedin"></i></div>
                <div className='col-9'><a href='https://www.linkedin.com/in/alisaribash35/'><p>https://www.linkedin.com/in/alisaribash35/</p></a> </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <div className='row'>
                <div className='col-1'><i className="fa-brands fa-github"></i></div>
                <div className='col-9'><a href='https://github.com/asaribas35'><p>github.com/asaribas35</p></a></div>
              </div>
            </div>
            <div className='col-12 col-sm-6'>
              {/* // site link */}
            </div>
          </div>



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
            <h5>Intern</h5>
            <p>Probel/Izmir</p>
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
    </>
  )
}

export default cvhome