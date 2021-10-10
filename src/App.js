import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles.css";
export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} length={todos.length} />
    </div>
  );
}
