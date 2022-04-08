import React from "react"
import { useState } from "react"
import axios from "axios"

import Search from "./components/search"
import ListBody from "./components/listbody"
import Add from "./components/add"


function App() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState()
  const [list, setList] = useState([])
  const [filterList, setFilterList] = useState(list)
  const [apiCt , setApiCt] = useState(0)

  async function getData(){

      let {data : users} = await axios.get("https://jsonplaceholder.typicode.com/users")
        users.map((item)=>{
          delete item.id
          delete item.address
          delete item.company
          delete item.email
          delete item.username
          delete item.website
          item["number"] = item["phone"]
          delete item.phone
          let numString = item.number
          item.number = numString.slice(0,14)
      }) 
      
      setList(users)
      setFilterList(users)
      setApiCt(apiCt+1)
      
       
  }

  (apiCt==0 && getData())
 

    
    

  return (

    <>
      <div className="cont">
        <div className="container">
          <h1>Contact List App</h1>
          <br/>


        <Search setFilterList={setFilterList} list={list}/>

        <ListBody filterList={filterList} setList={setList} setFilterList={setFilterList}/>
          
        <Add name={name} setName={setName} number={number} setNumber={setNumber} setList={setList} setFilterList={setFilterList} list={list}/>

         </div>
      </div>
    </>
 );
}

export default App;


/* 

import React from "react"
import { useState } from "react"


function App() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState()
  const [list, setList] = useState([{}])
  const [filterList, setFilterList] = useState(list)

  function listHandler(e) {

    let listItem = Object.assign({ name }, { number })
    setList(() => [...list, listItem])
    setFilterList(() => [...list, listItem])
  }

  function filterHandler(e) {
    console.log(e.target.value)
    let searchInput = e.target.value
    var filteredList = list.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })

    setFilterList(filteredList)


  }



  return (

    <>
      <div className="cont">
        <div className="container">
          <h1>Contact List App</h1>
          <br/>
          <div class="input-group input-group-sm mb-3">
           <div class="input-group-prepend">
             <span class="input-group-text" id="inputGroup-sizing-sm">Search</span>
           </div>
           <input type="text" onChange={filterHandler} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </div>





          
          <div className="listBody">
              <div className="row">
                  <div className="col text-center">Name</div>
                  <div className="col text-center">Phone Number</div>
              </div>

            <div>
            {
            filterList
              .map((user, i) => (

              <div key={i} className="row">

                  <div className="col px-4">{user.name}   </div>
                  <div className="col px-4">{user.number}  </div>
                   
                  
              </div>
                
              ))
          }
            </div>


          </div>
    

          

          
        
        <div class="input-group input-group-sm mb-3">
           <div class="input-group-prepend">
             <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
           </div>
           <input type="text" onChange={(e) => (setName(e.target.value))} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </div>

        <div class="input-group input-group-sm mb-3">
           <div class="input-group-prepend">
             <span class="input-group-text" id="inputGroup-sizing-sm">Number</span>
           </div>
           <input type="text" onChange={(e) => (setNumber(e.target.value))} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        
        <button  onClick={listHandler} className="btn btn-primary  btn-block mb-3">Add Phone Number</button>
        





          



        </div>


      </div>
    </>



  );
}

export default App;


*/