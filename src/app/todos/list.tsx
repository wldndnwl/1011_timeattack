import React from "react";
import { Todo } from "./types";

interface ListProps {
  todos: Todo[];
  completeTodo: (id: number) => void;
}

const list: React.FC<ListProps> = ({ todos, completeTodo }) => {
  return (
    <div>
      <h2>Working</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}:{todo.contents}
            <button onClick={() => completeTodo(todo.id)}>완료</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default list;
