import React from 'react'

const Todolist = ({todos,handlecomplete}) => {
  return (
    <div>
        <h2>Child Component</h2>
        <ul>
        {todos.map((todo)=>(
            <li key={todo.id}> 
            <span style={{marginRight:"10px",}}>
                {todo.text}
            </span>
            {!todo.completed && (
                <button onClick={()=>handlecomplete(todo.id)}>Complete</button>
            )}
            </li>

        ))}

        </ul>


    </div>
  )
}

export default Todolist