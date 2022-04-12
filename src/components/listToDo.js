import React from 'react'

function listToDo({ setItems,items }) {

    function deleteHandler(e){

        

        let deletedItems = items.filter((item)=>{

            return  item.input != e.target.value
        })
        
        
        setItems(deletedItems)

    }

    function checkHandler(e){
       let index = e.target.value
       
        let newItems = [...items]
        
        if( newItems[index].bool==false){
            newItems[index].bool = true

            document.getElementById(newItems[index].input).classList.add("overlineText")

        }else{
            newItems[index].bool = false

            document.getElementById(newItems[index].input).classList.remove("overlineText")
        }
         setItems(newItems)

        
    }

    return (
        <>
            {
                items.map((item,i) =>
                    <div key={i} className="card ">
                        <div className="card-body">
                            <div className='row'>
                                    <div className='col-1 col-lg-1' ><input onChange={checkHandler} className="form-check-input" type="checkbox" value={i} id="defaultCheck1" checked={item.bool} /></div>
                                     <div className='col-9 col-lg-9 ' id={item.input} >{item.input}</div>
                                     <div className='col-2 col-lg-2'><button onClick={deleteHandler} type="button" value={item.input} className="btn btn-danger btn-sm">X</button></div>
                            </div>
 
                        </div>
                    </div>
                )

            }
        </>
    )
}

export default listToDo