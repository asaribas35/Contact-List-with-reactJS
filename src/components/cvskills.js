import React from 'react'
import skills from '../data/skills.json'

function cvskills() {
  return (
    <>
        <div className='col-12 col-sm-6'>
            <div className='row'>
              <h2>SKILLS</h2>
            </div >
            <div className='col-12 col-sm-12 col-lg-8'>
                 {
                        skills.data.map((data,i)=>(
                            <h5 key={i} className='d-inline m-2 ms-0'><span className="badge bg-secondary">{data}</span></h5>
                        ))

                } 

              </div>
          </div>
    </>
  )
}

export default cvskills