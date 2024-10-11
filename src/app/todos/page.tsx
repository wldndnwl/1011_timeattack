import React, { useEffect, useState } from "react";
import axios from "axios";
import input from "./input";
import { Todo } from "./types";
import { todo } from "node:test";

const page = () => {
  const [todos, setTodos] = useState<Todo>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("fetch 오류 =>", error);
      }
    };
    fetchTodos();
  }, []);

  // 데이터 입력 영역
  const addTodo = async (title: string, contents: string) => {
    const newTodo = { title, contents, isDone: false };
    try {
      const response = await axios.post("http://localhost:4000/todos", newTodo);
    } catch (error) {
      console.error("add 오류 =>", error);
    }
  };

  // 완료
  const completeTodo = async (id: number) => {
    try {
      // ... 펼쳐서....... find 돌려서... 아닌가
      const update = { ...todos.find((todo) => todo.id === id), isDone: true };
      await axios.patch(`http://localhost:4000/todos/${id}`, update);
      setTodos(todos.map((todo) => (todo.id === id ? update : todo)));
    } catch (error) {
      console.error("complete 오류 =>", error);
    }
  };

  // 삭제

  // 취소

  return (
    <div>
      <h1>My Todo List</h1>
      <input addTodo={addTodo} />
    </div>
  );
};

export default page;
