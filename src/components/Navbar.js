import React from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "../store/reducers/todoSlice";

const Navbar = () => {
  const todos = useSelector(todoSelector);
  return (
    <div className="navbar">
      <h1> My React Todos App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Todos : {todos.length}</li>
      </ul>
    </div>
  );
};

export default Navbar;
