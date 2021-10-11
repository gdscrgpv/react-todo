import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.random(),
      text: input,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
    setInput("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Add to do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodo;
