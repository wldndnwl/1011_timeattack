import React, { useState } from "react";

// props로 내려주기..
interface InputProps {
  addTodo: (title: string, contents: string) => void;
}

const input: React.FC<InputProps> = ({ addTodo }) => {
  // usestate로..? 맞나 아님 말고;
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleAdd = () => {
    if (title && contents) {
      addTodo(title, contents);
      setTitle("");
      setContents("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <button onClick={handleAdd}>추가하기</button>
    </div>
  );
};

export default input;
