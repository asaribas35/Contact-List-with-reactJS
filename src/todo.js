import React from 'react'
import AddToDo from './components/addToDo'
import ListToDo from './components/listToDo'
import {useState} from "react"


function todo() {

  const [items,setItems] = useState([])

  return (
      <>
        <div className="container col-md-10 col-lg-4 mt-3">
          
          <AddToDo setItems={setItems} items={items}/>
          <ListToDo setItems={setItems} items={items}/>
          
        </div>
        
      </>
    
  )
}

export default todo