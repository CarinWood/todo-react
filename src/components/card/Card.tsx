import { FC, useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import "./card.css";
import { TodoContext } from "../../contexts/TodoContext";

type todoProps = {
    task: string
    name: string
    completed: boolean
}

const Card:FC<todoProps> = ({task, name, completed}) => {
    const { todos, setTodos } = useContext(TodoContext)
    
const deleteTodo = () => {
    const filteredTodos = todos.filter((todo) => todo.task !== task)
    setTodos(filteredTodos)
}

const markAsComplete = () => {
    const updatedTodos = todos.map((todo) => {
        if (todo.task === task) {
            return { ...todo, completed: true };
        }
        return todo;
    });
    setTodos(updatedTodos);
}


  return (
    <div className="card">
      <p className={completed ? "lined-through" : ""}>{task}</p>

      <div className="bottom-card">
        <p>
          <i>{name}</i>
        </p>
        <div className="button-area">
          <button onClick={markAsComplete}>
            <IoMdCheckmark className="check-icon" />
          </button>
          <button onClick={deleteTodo}>
            <FaRegTrashAlt className="trash-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
