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
        <div className="col-5 text-center">Name</div>
        <div className="col-5 text-center">Phone Number</div>
    </div>

  <div>
  {
  filterList
    .map((user, i) => (
      <div className="card ">
        
      
    <div key={i} className="row card-body ">

        <div className="col-5  px-4 text-center">{user.name}   </div>
        <div className="col-5  px-4 text-center">{user.number}  </div>
        <div className="col-2  text-center"><button type="button" onClick={deleteItem} className="btn btn-primary btn-sm" value={user.name} >Delete</button></div>
         
        
    </div>
    </div>
    ))
}
  </div>


</div>

</>

)
    

}

export default ListBody