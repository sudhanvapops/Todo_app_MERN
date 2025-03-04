import {createContext,useContext} from "react"


export const TodoContext = createContext({
    todos: [{
        todo: "Message",
        isCompleted: false
    }],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleisCompleted: (id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const  useTodo = () => {
    return useContext(TodoContext)  
}