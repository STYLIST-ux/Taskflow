import "./TaskStat.css"

function TaskStat({ tasks }) {

  let comp = tasks.filter(task => task.completed).length
  let act = tasks.filter(task => !task.completed).length
  let all = tasks.length
  
  return (
    <header>
      <div className="headTitle">
        <h1>Task flow</h1>
        <p>Plan your tasks. Track your progress.</p>
      </div>
      <div className="stat">
        <p>{`Total: ${all}`}</p>
        <p>{`Active: ${act}`}</p>
        <p>{`Completed: ${comp}`}</p>
      </div>
    </header>
  )
}

export default TaskStat;