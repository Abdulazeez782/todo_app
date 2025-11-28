import { useState } from 'react'
import Header from './components/Header'
import InputTodo from './components/InputTodo'
import TodoItems from './components/TodoItems'
import Statistics from './components/Statistics'

const App = () => {
  const [ todo, setTodo ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ editingId, setEditingId ] = useState(null)
  const [ editingText, setEditingText ] =  useState("");
  const [ filter, setFilter ] = useState("all");

  // adding items to the list
  const handleAddTodo = () => {
    if(!todo.trim()) return;    
    setTodos((prev) => [...prev, {id: Date.now(), text: todo, completed: false}]);
    setTodo("");
  }

  // editing an item from the list
  const onEdit = (id) => {
    const todoEdit = todos.find(t => t.id === id)
    if (todoEdit) {
      setEditingId(id);
      setEditingText(todoEdit.text)
    }
  }

  // deleting an item from the list
  const onDelete = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  //saving after editing an item on the list
  const onSave = (id) => {   
    if(!editingText.trim()) return;
    setTodos(prev => prev.map(t => t.id === id ? {...t, text: editingText.trim()} : t))
    setEditingId(null);
    setEditingText("");
  }

  const onCancel = () => {
    setEditingId(null);
    setEditingText("")
  }

  const handleCheckboxChange = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t))
  }

  const filteredTodos = todos.filter(todo => {
    if(filter === "completed") return todo.completed;
    if(filter === "active") return !todo.completed;
    return true;
  })

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  const stats = [
    {label: "Total", value: totalTodos },
    {label: "Active", value: activeTodos},
    {label: "Completed", value: completedTodos}
  ]

  return (
    <div className='mx-auto min-h-screen m-4 px-8 lg:px-48'>
      <Header 
        filter={filter}
        setFilter={setFilter}
      />
      <InputTodo 
        todo={todo}
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
      />
      <TodoItems 
        todos={filteredTodos}
        editingId={editingId}
        onEdit={onEdit}
        editingText={editingText}
        setEditingText={setEditingText}
        onDelete={onDelete}
        onSave={onSave}
        onCancel={onCancel}
        handleCheckboxChange={handleCheckboxChange}
        filter={filter}
      />

      <Statistics 
        stats={stats}
      />
    </div>
  )
}

export default App