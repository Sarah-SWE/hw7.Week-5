import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InputForm from "./Components/InputForm";
import { useEffect, useState } from "react";
import ListOfTasks from "./Components/ListOfTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);

  useEffect(() => {}, [tasks]);
  const onAddTask = (t) => {
    if (t.id) {
      // Update
      setTasks(tasks.map((ele) => (ele.id === t.id ? t : ele)));
      setEditedTask(null);
    } else {
      // Create
      t.id = Date.now();
      setTasks([...tasks, t]);
    }
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, isComplete: !t.isComplete } : t)),
    );
  };
  const completedCount = tasks.filter((t) => t.isComplete).length;
  const uncompletedCount = tasks.length - completedCount;
  return (
    <div
      className="p-4 rounded shadow bg-dark text-white text-center"
      style={{ width: "350px" }}
    >
      <h1>To Do List</h1>
      <InputForm onAddTask={onAddTask} editedTask={editedTask} />
      <h4>Task List</h4>
      <div style={{ maxHeight: "220px", overflowY: "auto" }} className="pe-1">
        {tasks.length > 0 ? (
          <ListOfTasks
            tasks={tasks}
            onDelete={handleDelete}
            onEdit={(task) => setEditedTask(task)}
            onToggleComplete={handleToggleComplete}
          />
        ) : (
          <span className="text-danger my-3 d-block">There are no tasks</span>
        )}
      </div>{" "}
      <hr className="text-primary border-3 rounded my-3" />
      <p>
        Completed: {completedCount} | Uncompleted: {uncompletedCount}
      </p>
    </div>
  );
}

export default App;
