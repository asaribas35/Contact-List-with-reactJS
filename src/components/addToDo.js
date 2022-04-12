import React from 'react'
import { useState } from 'react'

function addToDo({ setItems, items }) {

  const [input, setInput] = useState()

  function addHandler() {

    let addObject = Object.assign({ input }, { bool: false })

    let inputs = items.map(a => a.input)

    if (inputs.includes(input) == false && input != "") {

      document.getElementById("inptodo").value = ""
      setInput("")
      setItems(() => ([...items, addObject]))
    } else {
      document.getElementById("inptodo").value = ""
    }





  }


  return (
    <>

      <div className="input-group mb-3 ">

        <input onChange={(e) => (setInput(e.target.value))} type="text" id='inptodo' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        <button onClick={addHandler} type="button" className="btn btn-secondary">ADD</button>
      </div>
    </>
  )
}

export default addToDo