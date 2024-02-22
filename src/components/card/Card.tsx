import { FC, useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import "./card.css";
import { TodoContext } from "../../contexts/TodoContext";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

type todoProps = {
  task: string;
  name: string;
  completed: boolean;
};

const Card: FC<todoProps> = ({ task, name, completed }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const deleteTodo = () => {
    const filteredTodos = todos.filter((todo) => todo.task !== task);
    setTodos(filteredTodos);
  };

  const markAsComplete = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.task === task) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const moveTaskUp = () => {
    const currentIndex = todos.findIndex((todo) => todo.task === task);
    if (currentIndex > 0) {
      const updatedTodos = [...todos];
      const temp = updatedTodos[currentIndex];
      updatedTodos[currentIndex] = updatedTodos[currentIndex - 1];
      updatedTodos[currentIndex - 1] = temp;
      setTodos(updatedTodos);
    }
  };

  const moveTaskDown = () => {
    const currentIndex = todos.findIndex((todo) => todo.task === task);
    if (currentIndex < todos.length - 1) {
      const updatedTodos = [...todos];
      const temp = updatedTodos[currentIndex];
      updatedTodos[currentIndex] = updatedTodos[currentIndex + 1];
      updatedTodos[currentIndex + 1] = temp;
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="outer-card">
      <section>
        <MdKeyboardArrowUp className="arrow-up" onClick={moveTaskUp} />
        <MdKeyboardArrowDown className="arrow-down" onClick={moveTaskDown} />
      </section>
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
    </div>
  );
};

export default Card;
