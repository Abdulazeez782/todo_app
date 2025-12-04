const InputTodo = ({todo, setTodo, handleAddTodo}) => {
  return (
    <div className="w-full flex gap-1">
        <input 
            type="text"
            placeholder="Add a new todo..."
            className="p-2 focus:outline-blue-300 border border-gray-200 w-full rounded-sm"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === "Enter") {
                handleAddTodo();
              }
            }}
        />
        <button
            className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!todo.trim()}
            onClick={handleAddTodo}
        >
            Add
        </button>
    </div>
  )
}

export default InputTodo