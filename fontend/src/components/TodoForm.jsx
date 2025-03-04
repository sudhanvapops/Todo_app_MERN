import React, { useState } from 'react'
import {useTodo} from "../contexts"

const TodoForm = () => {

  const [todo,setTodo] = useState("")

  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo(todo)
    setTodo("")
  }

  return (
    <div className='flex items-center justify-center '>

        <input className='
        bg-white/20  m-5 rounded-sm
        font-bold px-5 py-1 cursor-pointer text-2xl'
        type="text"
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}}
         />

         <button type="submit" 
         className='bg-green-600 px-3.5 py-2 rounded-sm font-bold cursor-pointer'
         onClick={add}
         >Add</button>

    </div>
  )
}

export default TodoForm
