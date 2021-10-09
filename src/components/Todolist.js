import React,{useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo'
function Todolist() {
    const [todos,settodos] = useState([])
   const addtodos = todo =>{
       if(!todo.text || /^\s*$/.test(todo.text)){
           return
       }

       const newTodos = [todo,...todos]

       settodos(newTodos)

   };
 
   const removeTodo = id => {
       const remArr = [...todos].filter(todo=>todo.id !== id)
       settodos(remArr);
   };
   
   const updateTodo = (todoId , newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }
    settodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
   };

   const completeTodo =id =>{
       let updatedTodos = todos.map(todo =>{
           if(todo.id === id){
               todo.isComplete = !todo.isComplete
           }
           return todo
       })
       settodos(updatedTodos);
   };

    return (
        <div>
            <h1>Tasks for today</h1>
            <Todoform onSubmit={addtodos} />
            <Todo todos = {todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo = {updateTodo} />
        </div>
    )
}

export default Todolist
