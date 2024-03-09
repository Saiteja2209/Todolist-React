import React from 'react'

const TodoList = ({todos, deleteHandler, editHandler}) => {
  return (
      <div>
          {todos.map((todo,index) =>
          <h3 key={index} className='todolist'>
                    {todo}
                    <button onClick={() => deleteHandler(index)} className='del'>Delete</button>
                    <button onClick={() => editHandler(index)} className='edit'>Edit</button></h3>

          )}
      </div>
  )
}

export default TodoList