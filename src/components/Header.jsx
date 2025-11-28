
const Header = ({setFilter, filter}) => {
    const filterButtons = [
        {label: "All", value: "all"},
        {label: "Active", value: "active"},
        {label: "Completed", value: "completed"}
    ]
  return (
    <section className="mb-6">
        <h1 className="text-3xl text-center font-bold mb-8">My Todo App</h1>
        <div className="flex gap-2 mb-2">
            {
                filterButtons.map((button, index) => (
                    <button
                        key={index}
                        className={`${ filter === button.value ? "bg-black text-white": "bg-gray-300 text-black"} px-6 py-2 rounded-sm flex-1 transition cursor-pointer`}
                        onClick={() => setFilter(button.value)}
                    >
                        {button.label}
                    </button>
                ))
            }
        </div>
    </section>
  )
}

export default Header