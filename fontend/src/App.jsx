import { useEffect } from 'react';
import { TodoForm, TodoItem } from './components'
import { TodoProvider, useFunc } from './contexts';

function App() {

  const { todos, addTodo, deleteTodo, updateTodo, toggleisCompleted,fetchAllDocs,setTodos } = useFunc()


  useEffect(() => {
    fetchAllDocs()
      .then((result) => {
        if (result && result.length > 0) setTodos(result || [])
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  console.log(todos);


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleisCompleted }}>
      <div className='flex flex-col items-center justify-center w-full max-w-2xl mx-auto'>
        <TodoForm />
        <div className='my-8'>
        {
          todos.map((item) => (
            <div key={item.date} className='my-1'>
              <TodoItem todo={item} />
            </div>
          ))
        }
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
