// Import the TodoItem component (each todo will be rendered using this component)
import { TodoItem } from "./TodoItem"

// This function receives a list of todos as props from the parent component (App.jsx)
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* If the todos array is empty, display a message */}
      {todos.length === 0 && "No ToDos, Add Some"}

      {/* Loop through each todo item and render a TodoItem component */}
      {todos.map(todo => {
        return (
          // Render the TodoItem component and pass individual todo data as props
          <TodoItem
                key={todo.id}           // Unique key required by React for efficient rendering
                id={todo.id}            // Pass the id of the todo item
                completed={todo.completed}  // Pass the completed status (true/false)
                title={todo.title}  // Pass the title (the task name)
                toggleTodo={toggleTodo} // Pass the toggle function to change the completed status
                deleteTodo={deleteTodo} // Pass the delete function to remove the todo item
          />
        )
      })}
    </ul>
  )
}
