// import useState from React
import { useEffect, useState } from "react";

// Import CSS styles
import "./styles.css"
import { NewTodoform } from "./NewTodoForm";
import { TodoList } from "./TodoList";

// Description: This is the main entry point of the React application.
export default function App() {

  // State to hold the to-do list
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM") // Retrieve the todos from localStorage
    if (localValue == null) return [] // If no todos are found, return an
    return JSON.parse(localValue) // Parse the stored todos and return them as an array
  })

  // Load the todos from localStorage when the component mounts
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos)) // Save the todos to localStorage
  }, [todos]) // This effect runs whenever the todos state changes
  
  function addTodo(newItem) {
   // Update the todos state by adding the new item
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false },  // Generate a unique ID (crypto.randomUUID is okay for simple apps)
      ]
    }) 
   

  }
  

  function toggleTodo(id, completed) { // Update the todos state by toggling the completed status of the todo with the given id
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed } // Spread the existing todo and update the completed status
        }
        return todo // Return the todo unchanged if the id does not match
      })
    })
  }

  // Delete function to remove a todo item
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id) // Filter out the todo with the specified id
    })
  }
return (
  <>
    <NewTodoform onSubmit={addTodo} />
      <h1 className="header">ToDo List</h1>
    <TodoList todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo} />
    </>
)
}