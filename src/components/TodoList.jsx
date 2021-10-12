import DeleteTodo from "./DeleteTodo";

const TodoList = ({ todos, setTodos }) => {
  const handleToggleTodo = (todo) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, done: !t.done } : t
    );
    setTodos(updatedTodos);
  };

  if (!todos.length) return <p>No todos left.</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <li
          style={{ textDecoration: todo.done ? "line-through" : "" }}
          key={todo.id}
          onDoubleClick={() => handleToggleTodo(todo)}
        >
          <span>{todo.text}</span>
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
