import "./styles.css";
import React from "react";
export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

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
