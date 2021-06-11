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
  function handleAddTodo(event) {
    // To prevent form default behaviour i.e page refresh on submit form
    event.preventDefault();

    // elements has form fields
    console.log(event.target.elements);

    // this contains the actual value by using the name given to the field
    console.log(event.target.elements.addTodo.value);
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" />
      <button type="submit">Submit</button>
    </form>
  );
}
