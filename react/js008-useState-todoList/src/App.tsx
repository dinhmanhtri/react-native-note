import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState<string[]>(() => {
    const storageTasks = JSON.parse(localStorage.getItem("listTask") ?? "[]");
    return storageTasks;
  });

  const handleClick = (task: string) => {
    setListTask((prev) => {
      const newTask = [...prev, task];

      // Save to local storage
      const jsonTask = JSON.stringify(newTask);
      localStorage.setItem("listTask", jsonTask);
      return newTask;
    });
    setTask("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="card">
        <input
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => handleClick(task)}>Add</button>
      </div>
      <div className="card">
        <ul>
          {listTask.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
