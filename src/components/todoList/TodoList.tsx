import { useContext } from "react";
import Card from "../card/Card";
import "./todoList.css";
import { TodoContext } from "../../contexts/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="list">
      {todos.map((item, i) => {
        return (
          <div key={i}>
            <Card task={item.task} name={item.name} completed={item.completed}/>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
