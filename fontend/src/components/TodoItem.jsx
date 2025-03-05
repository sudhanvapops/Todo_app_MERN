import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoItem = ({ todo }) => {

  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const [isReadOnly, setIsReadOnly] = useState(true)

  const { updateTodo, deleteTodo, toggleisCompleted } = useTodo()

  const update = () => {
    updateTodo(todo.date, todoMsg)
    setIsReadOnly(!isReadOnly)
  }


  return (
    <div className='flex w-full gap-2 ' >
          
      <div id='Todo_Msg' className={`${todo.isCompleted ? "bg-[#c6e9a7]" :"bg-[#ccbed7]"} px-2 py-1 w-[50vw] text-black font-bold rounded-sm flex justify-between`} >
        <input
          type="text"
          value={todoMsg}
          className={`text-xl ${ todo.isCompleted ? "line-through font-bold": "" } ${!isReadOnly && "border-2" }`}
          onChange={(e) => { setTodoMsg(e.target.value) }}
          readOnly={isReadOnly}
        />
        <input 
        className='' 
        checked={todo.isCompleted}
        onChange={()=>{
          toggleisCompleted(todo.date,todo.isCompleted)
        }}
        type="checkbox"/>
      </div>

      <div id='Buttons' className='flex gap-2'>

      {isReadOnly ? ( 
        <button 
        className={`cursor-pointer mx-2 px-2 rounded-sm ${todo.isCompleted ?  "bg-yellow-100":  "bg-yellow-300"} text-black font-bold`}
          onClick={() => { setIsReadOnly(false) }}
          disabled = {todo.isCompleted}
        >Edit</button>
          ) :

        (
        <button className='cursor-pointer mx-2 px-2 rounded-sm bg-green-500 font-bold'
          onClick={update}>
          Save
        </button>)
        }


        {/* Delete Button */}
        <button className='cursor-pointer mx-2 px-2 rounded-sm bg-red-500 font-bold'
        onClick={()=>{
          console.log("Delete Frontend: ",todo)
          deleteTodo(todo.date)}
          }
        >Delete</button>

      </div>

    </div >
  )
}

export default TodoItem
