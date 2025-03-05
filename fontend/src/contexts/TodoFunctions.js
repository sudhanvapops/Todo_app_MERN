import { useEffect, useState } from "react";


export function useFunc() {

    // So now tihs is the main Todos list 
    const [todos, setTodos] = useState([]);


    const addTodo = async (todo) => {

        const newTodo = {
            date: Date.now(),
            todo: todo,
            isCompleted: false
        }

        try {
            let res = await fetch("http://localhost:3000/todos/add", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTodo)
            })

            let data = await res.json()
            console.log(data)



            if (res.ok === true ){
                setTodos((todos)=>(
                    [...todos,{...newTodo}]
                ))
            }

        } catch (error) {
            console.log("Adding Error Frontend", error)
        }


    }


    // Update Todo
    const updateTodo = async (date, todoMsg) => {

        const updatedTodo = {
            todoMsg: todoMsg,
        }


        try {
            let res = await fetch(`http://localhost:3000/todos/update/${date}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTodo)
            })

            let data = await res.json()
            console.log(data);

            if (res.ok === true) {
                setTodos((todos)=>(
                    todos.map((todo)=>(
                        todo.date === date ? {...todo,todo: todoMsg}: todo
                    ))
                ))
            }


        } catch (error) {
            console.log("Error in Updation Frontend", error)
        }

    }



    const deleteTodo = async (date) => {
        try {
            
            let res = await fetch(`http://localhost:3000/todos/delete/${date}`,{
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
            })

            let data = await res.json()
            console.log(data);


           if (res.ok === true) {
             setTodos((todos)=>(
                 todos.filter((todo)=>(
                     todo.date !== date
                 ))
             ))
           }

        } catch (error) {
            console.log("Error While Deleting Todo Frontend",error)
        }
    }



    const toggleisCompleted = async (date,isCompleted) => {

        try {

            let res = await fetch(`http://localhost:3000/todos/toggle/${date}`,{
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isCompleted: !isCompleted })
            })
    
            let data = await res.json()
            console.log(data)


           if (res.ok === true) {
             setTodos((todos)=>(
                 todos.map((todo)=>(
                     todo.date === date ? {...todo,isCompleted: !todo.isCompleted} : todo
                 ))
             ))
           }


        } catch (error) {
            console.log("Error in Toggling in Frontend",error)
        }

    }

    const fetchAllDocs = async () => {
        let res = await fetch("http://localhost:3000/todos/fetch")
        let data = await res.json()
        return data 
    }

    return { todos, addTodo, updateTodo, deleteTodo, toggleisCompleted,fetchAllDocs,setTodos }
}



