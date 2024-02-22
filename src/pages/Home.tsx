import React from "react";
import AddTodo from "../components/addTodo/AddTodo";
import TodoList from "../components/todoList/TodoList";
import Sorting from "../components/sorting/Sorting";

const Home = () => {
  return (
    <>
      <AddTodo />
      <Sorting />
      <TodoList />
    </>
  );
};

export default Home;
