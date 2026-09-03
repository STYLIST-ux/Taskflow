import "./TaskList.css"

function TaskList({ tasks , setTasks, filter }) {

  let filteredTasks = [...tasks] 


  if(filter === "Completed") {
    filteredTasks = filteredTasks.filter(task => task.completed)
  }else if(filter === "Active") {
    filteredTasks = filteredTasks.filter(task => !task.completed)
  }

  if(filteredTasks.length === 0) {

    let dym;

    if(filter === "All") {
      dym = "No tasks here yet. Add a task to get started."
    }else if(filter === "Completed") {
      dym ="No completed tasks"
    }else {
      dym = "No active tasks."
    }
    
    return (
      <div className="msg">
      <p>{dym}</p>
      </div>
    )
  }

  function handleComplete(uid) {
    const updatedTask = tasks.map((task,id) => {
      if( task.id === uid) {
        return {
          ...task,
          completed: !task.completed
        }
      }else {
        return task
      }
    })

    setTasks(updatedTask)
  }

  function handleDelete(uid) {
    const filtered = tasks.filter((task,id) => {
      return task.id !== uid
    })

    setTasks(filtered)
  }

  function clearCompleted() {
    const remaining = tasks.filter(task => !task.completed)

    setTasks(remaining)
  }

  
  return (
    <section className="lists">
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      <ul>
        {filteredTasks.map((list,idx) => {
      const diff = Date.now() - new Date(list.createdAt).getTime()
      const minutes = Math.floor(diff / 60000)

      let stamp;

      if(minutes === 0) {
        stamp = "just Now"
      }else {
        stamp = `${minutes} minutes ago`
      }
      
      return (
        <li key={list.id} className={list.completed ? "lxt completed" : "lxt"}>
            <div className="stamp">
              <p>{list.title}</p>
              <small>{stamp}</small>
            </div>
            <div className="right">
              <div className={list.completed ? "dot active" : "dot"}></div>
              <button onClick={() => handleComplete(list.id)}>{list.completed ? "Undo" : "Complete"}</button>
              <button onClick={() => handleDelete(list.id)}>Delete</button>
            </div>
          </li>
      )
    })}
      </ul>
    </section>
  )
}

export default TaskList;