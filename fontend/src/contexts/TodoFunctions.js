import { useEffect, useState } from "react";


export function useFunc() {

    // So now tihs is the main Todos list 
    const [todos, setTodos] = useState([]);


    const addTodo = async (todo) => {

        const newTodo = {
            todo: todo,
            isCompleted: false
        }

        try {
            let data = await fetch("http://localhost:3000/todos/add", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTodo)
            })

            data = await data.json()
            console.log(data)

            let allDocs = await fetchAllDocs()
            setTodos(allDocs)

        } catch (error) {
            console.log("Adding Error Frontend", error)
        }


    }


    // Update Todo
    const updateTodo = async (id, todoMsg) => {

        const updatedTodo = {
            todoMsg: todoMsg,
        }


        try {
            let data = await fetch(`http://localhost:3000/todos/update/${id}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTodo)
            })

            data = await data.json()
            console.log(data);

            let allDocs = await fetchAllDocs()
            setTodos(allDocs)

        } catch (error) {
            console.log("Error in Updation Frontend", error)
        }

    }



    const deleteTodo = async (id) => {
        try {
            
            let data = await fetch(`http://localhost:3000/todos/delete/${id}`,{
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
            })

            data = await data.json()
            console.log(data);

            let allDocs = await fetchAllDocs()
            setTodos(allDocs)

        } catch (error) {
            console.log("Error While Deleting Todo Frontend",error)
        }
    }



    const toggleisCompleted = async (id,isCompleted) => {

        try {

            let data = await fetch(`http://localhost:3000/todos/toggle/${id}`,{
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isCompleted: !isCompleted })
            })
    
            data = await data.json()
            console.log(data)

            let allDocs = await fetchAllDocs()
            setTodos(allDocs)

        } catch (error) {
            console.log("Error in Toggling in Frontend",error)
        }

    }

    const fetchAllDocs = async () => {
        let data = await fetch("http://localhost:3000/todos/fetch")
        data = await data.json()
        return data 
    }

    return { todos, addTodo, updateTodo, deleteTodo, toggleisCompleted,fetchAllDocs,setTodos }
}



