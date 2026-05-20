import React, { useState } from "react";

function TaskForm({ addTask }) {

  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      setError("Task cannot be empty");
      return;
    }

    addTask(task);

    setTask("");
    setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>

      {error && <p className="error">{error}</p>}

    </form>
  );
}

export default TaskForm;