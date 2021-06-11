import "./styles.css";

export default function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddTodo />
    </div>
  );
}

function TodoList(props) {
  console.log(props);
  return (
    <div>
      {props.todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
}

function AddTodo() {
  function handleAddTodo(props) {
    console.log(props);
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input placeholder="Add todo" />
      <button type="submit">Submit</button>
    </form>
  );
}
