import React, { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

export default function App() {

  const [todos, setTodos] = React.useState([]);

  //to get the data already stored in local storage
  const getLocalStorage = () => {
    const localData = localStorage.getItem('todos');
    //check if there is data on local storage if not return empty
    return localData ? JSON.parse(localData) : []
  }
  
  //update the state on the first render
  useEffect(() => {
    setTodos(getLocalStorage())
  },[])
   
  // add data to local storage when todos changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])


  return (
    <Routes>
      <Route path="/" element={<div>
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} length={todos.length} />
    </div>} />
    <Route path="/404" element={<ErrorPage/>} />
    </Routes>
  );
}
