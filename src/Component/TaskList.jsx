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

  
  return (
    <section className="lists">
      <ul>
        {filteredTasks.map((list,idx) => (
          <li key={list.id} className={list.completed ? "lxt completed" : "lxt"}>
            <p>{list.title}</p>
            <div className="right">
              <div className={list.completed ? "dot active" : "dot"}></div>
              <button onClick={() => handleComplete(list.id)}>{list.completed ? "Undo" : "Complete"}</button>
              <button onClick={() => handleDelete(list.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TaskList;