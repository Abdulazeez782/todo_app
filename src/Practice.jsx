import { useState } from "react"

const App = () => {
  const [ todo, setTodo ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ editingIndex, setEditingIndex ] = useState(null);
  const [ editingText, setEditingText ] = useState("");
  const [ filter, setFilter ] = useState("all");

  const handleAddTodo = () => {
    if(!todo.trim()) return;
    setTodos([...todos, {text: todo, completed: false}])
    setTodo("");
  }

  const handleDeleteTodo = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  }

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  }

  const handleSaveEdit = (index) => {
    const updated = [...todos]
    updated[index].text = editingText
    setEditingIndex(null)
    setTodos(updated);    
  }

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingText("");
  }

  const handleCheckboxChange = (index) => {
    const updated = [...todos]
    updated[index].completed = !updated[index].completed
    setTodos(updated)
  }

  const filteredTodos = todos.filter(todo => {
    if(filter === "completed") return todo.completed;
    if(filter === "incomplete") return !todo.completed;
    return true;
  })

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const incompleteTodos = totalTodos - completedTodos

  return (
    <div className="m-4">
      <div className="mb-4 flex gap-2">
        <button
          className={`${filter === "all" ? "bg-gray-700" : "bg-gray-400"} text-white px-3 py-px`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`${filter === "completed" ? "bg-gray-700" : "bg-gray-400"} text-white px-3 py-px`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button 
          className={`${filter === "incomplete" ? "bg-gray-700" : "bg-gray-400"} text-white px-3 py-px`}
          onClick={() => setFilter("incomplete")}
        >
          Active
        </button>
      </div>

      <div className="border flex mb-4">
        <input 
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full p-2 focus:outline-none"
          placeholder="Add a Todo"
        />
        <button
          className="bg-red-600 text-white p-2 whitespace-nowrap cursor-pointer"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      <div>
        <ul className="space-y-2">
          {
            filteredTodos.map((todo, index) => {
              const originalIndex = todos.findIndex(t => t === todo);

              return (
                <div key={originalIndex}>
                {
                  editingIndex === originalIndex ? (
                    <div 
                      key={index}
                      className="flex gap-2"
                    >
                      <input 
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="p-1 border focus:outline-none"
                      />
                      <div className="space-x-2">
                        <button
                          className="bg-green-500 p-1"
                          onClick={() => handleSaveEdit(originalIndex)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-green-500 p-1"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div key={index}>
                      <li className="flex gap-2">
                        <span>{todo.text}</span>
                        <div className="space-x-2">
                          <button
                            className="bg-red-600 text-white p-1 cursor-pointer"
                            onClick={() => handleDeleteTodo(originalIndex)}
                          >
                            Delete
                          </button>
                          <button
                            className="bg-red-600 text-white p-1 cursor-pointer"
                            onClick={() => handleEditTodo(originalIndex)}
                          >
                            Edit
                          </button>
                        </div>
                      </li>
                      <label>Completed</label>
                      <input 
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleCheckboxChange(originalIndex)}
                      />
                    </div>
                  )
                }
              </div>              
              )
              
            })
          }
        </ul>
      </div>

      <p>Total Todos: {totalTodos}</p>
      <p>Completed Todos: {completedTodos}</p>
      <p>Incompleted Todos: {incompleteTodos}</p>
    </div>
  )
}

export default App