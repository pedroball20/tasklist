import { useTaskList } from "../hooks/useTaskList";
export const TaskList = ({ email }) => {
  const {
    tasks,
    task,
    handleChange,
    editTask,
    addTask,
    updateTask,
    deleteTask,
  } = useTaskList(email);
 
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div className="jumbotron mt-5">
            <h1 className="display-4">Your Tasks</h1>
          </div>
        </div>
        <div className="col-xs-12">
          <form onSubmit={addTask} className="row g-3">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                id="task"
                value={task.task}
                onChange={handleChange}
                placeholder="Add a Task"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                {task.id ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-xs-12">
          <div className="card">
            <ul className="list-group list-group-flush">
              {tasks.map((task) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center list-group-item-primary"
                  key={task.id}
                >
                  <div>
                    <span style={{ marginLeft: "10px" }}>
                      {task.completed ? <del>{task.task}</del> : task.task}
                    </span>
                  </div>
                  <div>
                    <button
                      style={{minWidth: "120px"}}
                      className="btn btn-danger float-right mr-2"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      style={{minWidth: "120px"}}
                      className="btn btn-warning float-right ml-2"
                      onClick={() => editTask(task.id)}
                    >
                      Edit
                    </button>
                    <button
                      style={{minWidth: "120px"}}
                      className={`btn ${!task.completed ? 'btn-success' : 'btn-secondary'} float-right ml-2`}
                      onClick={() => updateTask(task.id)}
                    >
                      {task.completed ? "Uncompleted" : "Completed"}
                    </button>
                  </div>
                </li>
              ))}
              {tasks.length === 0 && (
                <li className="list-group-item list-group-item-danger">
                  No tasks to show
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};