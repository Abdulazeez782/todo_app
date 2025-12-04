
const TodoItems = ({
    todos, 
    editingId, 
    onEdit, 
    editingText, 
    setEditingText, 
    onDelete,
    onSave,
    onCancel,
    handleCheckboxChange,
    filter
}) => {
  return (
    <div className="w-full">
        {
            todos.length > 0 ? (
            <ul className="w-full flex flex-col gap-3 mt-4">        
                    {
                        todos.map((todo) => {
                            
                            return (
                                editingId === todo.id ? (
                                    <li 
                                        className="bg-white shadow-sm flex justify-between items-center gap-1 p-2 rounded-sm"
                                        key={todo.id}
                                    >
                                        
                                        <input 
                                            type="text"
                                            value={editingText}
                                            onChange={(e) => setEditingText(e.target.value)}
                                            className="p-2 focus:outline-blue-300 border border-gray-200 w-full rounded-sm"
                                            autoFocus
                                            onKeyDown={(e) => {
                                                if(e.key === "Enter") {
                                                    onSave(todo.id);
                                                }
                                            }}
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-green-700 p-2 text-white rounded-sm cursor-pointer"
                                                onClick={() => onSave(todo.id)}
                                                
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="bg-gray-700 p-2 text-white rounded-sm cursor-pointer"
                                                onClick={onCancel}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </li>
                                ) : (
                                    <li 
                                        className="bg-white shadow-sm flex justify-between items-center gap-1 p-2 rounded-sm"
                                        key={todo.id}
                                    >
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                checked={todo.completed}
                                                onChange={() => handleCheckboxChange(todo.id)}                                            
                                                className="cursor-pointer w-5 h-5"
                                            />
                                            <span 
                                                className={`${todo.completed ? "line-through text-gray-400" : ""}`}
                                            >
                                                {todo.text}
                                            </span>  
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-blue-700 p-2 text-white rounded-sm cursor-pointer"
                                                onClick={() => onEdit(todo.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-700 p-2 text-white rounded-sm cursor-pointer"
                                                onClick={() => onDelete(todo.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                )
                               
                            )
                        })
                    }
                </ul>
            ) : (
                <div className="text-center py-12 text-gray-500">
                    {filter === "all" ? "No todos yet. Add one above!" : filter === "active" ? "No active todos" : "No completed todos"}
                </div>
            )
        }
    </div>
    
  )
}

export default TodoItems