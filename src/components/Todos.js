import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todoSelector,
  markCompleted,
  deleteTodo,
} from "../store/reducers/todoSlice";
import TodoForm from "./TodoForm";

const Todos = () => {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  const toggleTodoCompleted = (todoId) => {
    dispatch(markCompleted(todoId));
  };
  const deleteSingleTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleTodoCompleted.bind(this, todo.id)}
            />
            <button onClick={deleteSingleTodo.bind(this, todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
