import React from "react"
import { useState ,useEffect} from "react"

import axios from "axios"

import Search from "./components/search"
import ListBody from "./components/listbody"
import Add from "./components/add"



function App() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState()
  const [list, setList] = useState([])
  const [filterList, setFilterList] = useState(list)
  

  useEffect(()=>{
    getData()
  },[])
  
  

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


 

    
    

  return (
    
    <>
    
      

      <div className="container-fluid col-lg-10">
        <div className="container-fluid col-lg-10">
          <h1 >Contact List App</h1>
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


