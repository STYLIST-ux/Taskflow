import { useRef } from "react"
import "./TaskInput.css"


function TaskInput({ 
  query, 
  setQuery, 
  tasks,
  setTasks
}) {

  const inputRef = useRef(null)

  function handleChange(e) {
    setQuery(e.target.value)
  }

  function handleClick() {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title : query,
      completed: false,
      createdAt: new Date().toISOString()
    }])
    setQuery("")
    inputRef.current.focus()
  }

  function handleKey(e) {
    if(e.key === "Enter" && query.trim() !== "") {
      handleClick()
    }
  }
  
  return (
    <div className="task-input">
      <input 
        placeholder="what needs to be done?"
        onChange={handleChange}
        onKeyDown={handleKey}
        value={query}
        ref={inputRef}
      />
      <button 
        disabled={query.trim() === ""}
        onClick={handleClick}>
        Add
      </button>
    </div>
  )
}

export default TaskInput;