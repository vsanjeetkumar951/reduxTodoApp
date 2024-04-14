import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);

  const { todos } = Todo;
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  }

  function removeHandler(t) {
    dispatch(RemoveTodoAction(t))
  }
  return (
    <div>
      <h1>TodoList in App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>
      <ul>
        {todos &&
          todos.map((t) => (
            <li key={t.id}>
              <span>{t.todo}</span>
              <button onClick={()=>removeHandler(t)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
