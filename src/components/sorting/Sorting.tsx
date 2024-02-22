import { useContext, useState } from "react";
import "./sorting.css";
import { TodoContext } from "../../contexts/TodoContext";

const Sorting = () => {
  const { todos, setTodos } = useContext(TodoContext) 
  const [sortBy, setSortBy] = useState("");

  const handleSortingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value);
    
    if (e.target.value === "name") {
        const sortedTodos = [...todos].sort((a, b) => a.name.localeCompare(b.name));
        setTodos(sortedTodos);
      }
  };

  return (
    <div className="sort-frame">
    <p>Sort by: </p>
    <input
      type="radio"
      id="radioname"
      name="sorting"
      value="name"
      checked={sortBy === "name"}
      onChange={handleSortingChange}
    />
    <label htmlFor="radioname">name</label>

    <input
      type="radio"
      id="radiodate"
      name="sorting"
      value="date"
      checked={sortBy === "date"}
      onChange={handleSortingChange}
    />
    <label htmlFor="radiodate">date</label>
  </div>
  );
};

export default Sorting;
