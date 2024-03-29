import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        id: 1,
        title: "viec 1",
        completed: false,
      },
      {
        id: 2,
        title: "viec 2",
        completed: true,
      },
      {
        id: 3,
        title: "viec 3",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.allTodos.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    markCompleted(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    deleteTodo(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

//reducer

const todoReducer = todoSlice.reducer;
// Selector

export const todoSelector = (state) => state.todoReducer.allTodos;

//action export
export const { addTodo, markCompleted, deleteTodo } = todoSlice.actions;

//export reducer
export default todoReducer;
