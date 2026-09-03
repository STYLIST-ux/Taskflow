import "./Filter.css"

function FilterControls({ filter, setFilter }) {
  
  function all() {
    setFilter("All")
  }

  function active() {
    setFilter("Active")
  }

  function complete() {
    setFilter("Completed")
  }
  
  return (
    <div className="filter-controls">
      <button className={filter === "All" ? "show-all" : ""}  onClick={all}>All</button>
      <button className={filter === "Active" ? "active" : ""} onClick={active}>Active</button>
      <button className={filter === "Completed" ? "Completed" : ""} onClick={complete}>Completed</button>
    </div>
  )
}

export default FilterControls;