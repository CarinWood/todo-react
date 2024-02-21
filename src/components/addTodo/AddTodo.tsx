import { useState } from "react";
import "./addTodo.css";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = {
      task: task,
      name: name,
    };

    setName('')
    setTask('')
  };

  return (
    <form onSubmit={submitTodo}>
      <div className="task-div">
        <label className="task-label">Task:</label>
        <input
          className="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="outer-div">
        <div className="name-div">
          <label className="name-label">Name:</label>
          <input
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button>Add</button>
      </div>
    </form>
  );
};

export default AddTodo;