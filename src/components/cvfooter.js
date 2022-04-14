import React from 'react'

function cvfooter() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-6' >
                    <h2>LANGUAGES</h2>
                    <div className='row'>
                        <div className='col-12 col-sm-5'>
                            <p>Turkish</p>
                            <p className='langString'>Native or Bilingual Proficiency</p>
                        </div>
                        <div className='col-12 col-sm-5'>
                            <p>English</p>
                            <p className='langString'>Limited Working Proficiency</p>
                        </div>                        

                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <h2>INTERESTS</h2>
                    <div className='col-12 col-sm-12 col-lg-8'>
                         <h5 className='d-inline m-2 ms-0'><span className="badge bg-secondary">Technology</span></h5>
                         <h5 className='d-inline m-2 ms-0'><span className="badge bg-secondary"> Artificial Intelligence</span></h5>
                         <h5 className='d-inline m-2 ms-0'><span className="badge bg-secondary">Cars</span></h5>
                         <h5 className='d-inline m-2 ms-0'><span className="badge bg-secondary">Finance</span></h5>
                         <h5 className='d-inline m-2 ms-0'><span className="badge bg-secondary">Exchange</span></h5>
                         <h5 className='d-inline m-2 ms-0'><span className="badge bg-secondary">Cryptocurrencies</span></h5>
              </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default cvfooter