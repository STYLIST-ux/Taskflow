import { useState } from "react"
import TaskInput from "./Component/TaskInput"
import TaskList from "./Component/TaskList"
import FilterControls from "./Component/FilterControls"
import TaskStat from "./Component/TaskStat"


import "./App.css"



function App() {

  const [ query , setQuery ] = useState("")
  const [ tasks , setTasks ] = useState([])
  const [filter, setFilter] = useState("All")
    
  return (
    <>
      <TaskStat 
        tasks={tasks}
      />
      
      <TaskInput 
        query={query}
        setQuery={setQuery}
        tasks={tasks}
        setTasks={setTasks}
      />

      <FilterControls 
        setFilter={setFilter}
        filter={filter}
      />

      <TaskList 
        tasks={tasks}
        setTasks={setTasks}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  )
}

export default App;