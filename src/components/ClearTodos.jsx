
const ClearTodos = ({todos, clearAllTodos, clearActiveTodos, clearCompletedTodos}) => {
    const all = todos.length > 0;
    const active = todos.filter(t => !t.completed).length > 0
    const completed = todos.filter(t => t.completed).length > 0

  return (
    <div className="flex gap-2 mt-5">           
        {all && <button
            className={`bg-black text-white px-6 py-2 rounded-sm  transition cursor-pointer whitespace-nowrap hover:bg-black/75`}
            onClick={clearAllTodos}
        >
            Clear All todos
        </button>}

        {active && <button
            className={`bg-black text-white px-6 py-2 rounded-sm transition cursor-pointer whitespace-nowrap hover:bg-black/75`}
            onClick={clearActiveTodos}
        >
            Clear Active Todos
        </button>}

        {completed && <button
            className={`bg-black text-white px-6 py-2 rounded-sm transition cursor-pointer whitespace-nowrap hover:bg-black/75`}
            onClick={clearCompletedTodos}
        >
            Clear Completed todos
        </button>}
        </div>
  )
}

export default ClearTodos