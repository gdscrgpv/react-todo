import React, { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles.css";

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
    <div className="container">
      <h1 className="neonText">Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} length={todos.length} />
    </div>
  );
}


function TodoList(props) {
  console.log(props);
  var todos = props.todos;

  function handleToggleTodo(todo) {
    // console.log(todo);
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done
          }
        : t
    );
    props.setTodos(updatedTodos);
  }
  if (!todos.length) {
    return <p>No todos left!</p>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <li
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "80px",
            textDecoration: todo.done ? "line-through" : ""
          }}
          key={todo.id}
          onDoubleClick={() => handleToggleTodo(todo)}
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={props.setTodos} />
        </li>
      ))}
    </div>
  );
}

function AddTodo({ setTodos, length }) {
  const inputRef = React.useRef();
  function handleAddTodo(event) {
    // To prevent form default behaviour i.e page refresh on submit form
    event.preventDefault();

    // elements has form fields
    // console.log(event.target.elements);

    // this contains the actual value by using the name given to the field
    console.log(event.target.elements.addTodo.value);
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: Math.random(),
      text,
      done: false
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  }

  return (
    <center>
      <form onSubmit={handleAddTodo}>
        <input name="addTodo" placeholder="Add todo" ref={inputRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </center>
  );
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    // returns true of false
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      // take care of deleting the todo
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer"
      }}
    >
      x
    </span>
  );
}

