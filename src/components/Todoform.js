import React from 'react'
import {useState,useEffect,useRef} from 'react'
function Todoform(props) {
  const [input , setinput] = useState('')
  const inputref = useRef(null)
  useEffect(()=>{
    inputref.current.focus()
  })

  const handlechange = e =>{
      setinput(e.target.value)
  };

  const handleSubmit = e => {
      e.preventDefault();
       props.onSubmit({
       id : Math.floor(Math.random()*1000),
        text : input
       })
     setinput('')
  };

    return (
       <form className = 'inpform' onSubmit={handleSubmit}>
           <input type='text' placeholder='Enter the todo' value={input} name ='text' className='todoinp' onChange={handlechange} ref={inputref} />
           <button className="todobtn">Add todo</button>
       </form>
    )
}

export default Todoform
