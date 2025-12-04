
const ClearTodos = () => {
    const clearButtons = [
        {label: "Delete all todos", value: "all"},
        {label: "Delete active todos", value: "active"},
        {label: "Delete completed todos", value: "completed"}
    ]
  return (
    <div className="flex gap-2 mt-5">
            {
                clearButtons.map((button, index) => (
                    <button
                        key={index}
                        className={`bg-black text-white px-6 py-2 rounded-sm flex-1 transition cursor-pointer whitespace-nowrap hover:bg-black/75`}
                    >
                        {button.label}
                    </button>
                ))
            }
        </div>
  )
}

export default ClearTodos