function Add({name,setName,number,setNumber,setList,setFilterList,list}){

    function listHandler(e) {

        let listItem = Object.assign({ name }, { number })
        setList(() => ([...list, listItem]))
        setFilterList(() => [...list, listItem])
        setName("")
        setNumber()
        document.getElementById("nameInput").value =""
        document.getElementById("numberInput").value =""
      }
    



    return(
        <>
        <div className="input-group input-group-sm mb-3">
           <div className="input-group-prepend">
             <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
           </div>
           <input id="nameInput" type="text" onChange={(e) => (setName(e.target.value))} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </div>

        <div className="input-group input-group-sm mb-3">
           <div className="input-group-prepend">
             <span className="input-group-text" id="inputGroup-sizing-sm">Number</span>
           </div>
           <input id="numberInput" type="text" onChange={(e) => (setNumber(e.target.value))} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        
        <button  onClick={listHandler} className="btn btn-primary  btn-block mb-3">Add Phone Number</button>
        </>
    )
}


export default Add