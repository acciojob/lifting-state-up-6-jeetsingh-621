import React, { useState } from "react";
import './../styles/App.css';
import Todolist from "./Todolist";

const App = () => {

  const [todos, settodos] = useState([
    {id:1, text:"Learn React", completed:false },
    {id:2, text:"Build a project", completed:false },
    {id:3, text:"Practice lifting state up", completed:false }

  ]);

  const handlecomplete = (id)=>{

    const updatedtodos = todos.map((todo)=>
    todo.id===id?{...todo, completed:true}:todo
    );
    settodos(updatedtodos);
  }
  return (
    <div>
    <h1>Parent Component</h1>
      <Todolist todos={todos} handlecomplete={handlecomplete} />
    </div>
  )
}

export default App
