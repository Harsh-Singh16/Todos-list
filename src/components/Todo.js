import React,{useState} from 'react'
import Todoform from './Todoform'

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    const [edit,setedit] = useState({
        id : null,
        value: ''
    });
    
    const readUpdate =value => {
        updateTodo(edit.id,value)
        setedit({
            id : null,
            value : ''
        })
    }
    
if(edit.id){
    return <Todoform edit={edit} onSubmit = {readUpdate} />;
}

    return todos.map((todo,index)=>(
        <div className={todo.isComplete ? 'todo-row-complete' : 'todo-row'} key={index}>
          <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
              {todo.text}
          </div>
          <div className="icons">
          <button className="delete-icon" onClick = {()=> removeTodo(todo.id)}>DONE</button>
          <button className="edit-icon" onClick = {()=> setedit({id : todo.id,value : todo.text})}>Edit Todo</button>
          </div>
            </div>
    ))
}

export default Todo
