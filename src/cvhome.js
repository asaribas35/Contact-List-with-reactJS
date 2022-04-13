import React from 'react'
import image from '../src/sonp2.jpg'
import '../node_modules/font-awesome/css/font-awesome.min.css'

function cvhome() {
  return (
    <>
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-2 '>
         <img src={image} className="img-fluid image"/>
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
      <div className='col-6'>

      <div className='row'>
        <div className='col-1'><i class="fa-solid fa-envelope"></i></div>
        <div className='col-9'><a href='mailto:alisaribash35@gmail.com'><p>alisaribash35@gmail.com</p></a> </div>
       </div>

      <div className='row'>
      <div className='col-1'><i class="fa-solid fa-house"></i></div>
        <div className='col-9'><p>İzmir,Türkiye</p></div>
        </div>

      <div className='row'>
      <div className='col-1'><i class="fa-brands fa-github"></i></div>
        <div className='col-9'><a href='https://github.com/asaribas35'><p>github.com/asaribas35</p></a></div>
       </div>

      </div>
      <div className='col-6'>

      <div className='row'>
      <div className='col-1'><i class="fa-solid fa-phone"></i></div>
        <div className='col-9'><p>554 721 71 82</p></div>
       </div>

      <div className='row'>
      <div className='col-1'><i class="fa-brands fa-linkedin"></i></div>
        <div className='col-9'><a href='https://www.linkedin.com/in/alisaribash35/'><p>https://www.linkedin.com/in/alisaribash35/</p></a> </div>
        
      </div>

      </div>
      </div>
    </div>
    <hr></hr>
    </>
  )
}

export default cvhome