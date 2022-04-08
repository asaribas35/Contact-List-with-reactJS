function ListBody({filterList,setList,setFilterList}){

  function deleteItem(e){
    
    let uname = e.target.value
    
    let deletedList = filterList.filter((item)=>{
      return (item.name != uname )
    })

    setFilterList(deletedList)
    setList(deletedList)

    
  }

return(
    <>
    <div className="listBody">
    <div className="row">
        <div className="col-lg-5 text-center">Name</div>
        <div className="col-lg-5 text-center">Phone Number</div>
    </div>

  <div>
  {
  filterList
    .map((user, i) => (

    <div key={i} className="row">

        <div className="col-sm-5 px-4">{user.name}   </div>
        <div className="col-sm-5 px-4">{user.number}  </div>
        <div className="col-sm-2"><button type="button" onClick={deleteItem} className="btn btn-primary btn-sm" value={user.name} >Delete</button></div>
         
        
    </div>
      
    ))
}
  </div>


</div>

</>

)
    

}

export default ListBody