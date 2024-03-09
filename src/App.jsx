import { useState } from 'react'
import './App.css'
import Todolist from "./TodoList"


function App() {
  const [formData, setFormData] = useState('')
  const [todos, setTodos] = useState([])

  function handleChange(event){
      setFormData(event.target.value)
  }
   
  const handleClick = (event) =>{
    event.preventDefault()
    const newTodos = [...todos, formData];
    setTodos(newTodos)
    setFormData('')
  }

  const deleteHandler = (index) =>{
    const delTodos = todos.filter((_, i) => i !== index)
    setTodos(delTodos);
  }

  const editHandler = (index) =>{
    const updatedTasks = [...todos];
    const newContent = prompt('Edit Todo', todos[index]);
    if (newContent !== null) {
      updatedTasks[index] = newContent;
      setTodos(updatedTasks);
    }
  }

  
  return (
    <>
    <h1>Task List 2024</h1>
    <div className='container'>
      <div className="conatiner-two">
    <form onSubmit={handleClick}>
        <input type="text" placeholder='Type some Task....' name='task' value={formData} onChange={handleChange} className='inputform'/>
        <input type="submit" className='inputsubmit' />
    </form>
    </div>
    <Todolist todos={todos} deleteHandler={deleteHandler} editHandler={editHandler}/>

    </div>
    </>
  )
}

export default App
