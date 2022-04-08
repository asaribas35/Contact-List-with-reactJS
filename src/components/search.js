
function search({setFilterList,list}){
    function filterHandler(e) {
        console.log(e.target.value)
        let searchInput = e.target.value
        var filteredList = list.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
    
        setFilterList(filteredList)
    
    
      }

return(
    <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
            </div>
        <input type="text" onChange={filterHandler} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </div>

)

}

export default search