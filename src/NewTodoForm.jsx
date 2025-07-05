// Import React, { useState } from "react";
import { useState } from "react";

export function NewTodoform({onSubmit}) { // Destructure the props to get the addTodo function
    
    // State to manage the list of items, set to default empty string
  const [newItem, setNewItem] = useState("")

     // Handler for form submission (triggers on Enter key or form submission)
  function handleSubmit(e) {
    e.preventDefault() // Prevent the default form submission (page reload)
      if (newItem === "") return // If the input is empty, do nothing
      
      onSubmit(newItem) // Call the function to add the new item
     
    setNewItem("") // Clear the input field after submission
  } 
     return (
    
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
           <input value={newItem}
             onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item" />
        </div>
        <button className="add-btn">Add</button>
     </form>
    )
}