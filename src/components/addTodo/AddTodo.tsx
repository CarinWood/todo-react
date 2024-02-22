import { useContext, useState } from "react";
import "./addTodo.css";
import { TodoContext } from "../../contexts/TodoContext";

const AddTodo = () => {
  const {setTodos} = useContext(TodoContext)
  const [task, setTask] = useState("");
  const [name, setName] = useState("");

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTimeStamp = new Date().getTime();
    const todo = {
      task: task,
      name: name,
      completed: false,
      timeStamp: currentTimeStamp 
    };

    setTodos((prevArray) => {
        return [...prevArray, todo]
    })

    setName("");
    setTask("");
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
