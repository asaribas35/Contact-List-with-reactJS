import React from 'react'
import projects from '../data/projects.json'

function cvprojects() {
    return (
        <>
            <h2>PERSONAL PROJECTS</h2>

            {
                projects.data.map((data,i)=>(
                    <div key={i}>
                        <h5>{data.title}</h5>
                        <ul>
                            {
                                data.description.map((desc,i)=>(
                                        <div key={i}>
                                       <li>
                                               <p>{desc}</p>
                                       </li>  
                                        </div>
                                ))
                            }
                        </ul>
                    </div>
                    
                    
                ))
            }


        </>
    )
}

export default cvprojects