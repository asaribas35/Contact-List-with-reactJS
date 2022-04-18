import React from 'react'
import infocv from '../data/info.json'

function cvinfo() {

    return (
        <>
            {
                infocv.info.map((data, i) => (

                    <div className='row' key={i}>

                        {
                            data.line.map((line, i) => (

                                <div className='col-12 col-sm-6' key={i}>
                                    <div className='row'>
                                        <div className='col-1'><i className={line.img}></i></div>
                                        <div className='col-9'><a href={line.href}><p>{line.data}</p></a> </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                ))
            }



        </>
    )
}

export default cvinfo