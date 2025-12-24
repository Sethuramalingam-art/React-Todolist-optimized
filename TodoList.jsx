import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const handleEnter = (e) => {
    console.log("Enter pressed:", e.target.value);
    todos.unshift({ text: e.target.value, completed: false, id: Date.now() });
    setTodos([...todos]);
    e.target.value = ""; // Clear the input field after adding
  };

  const handleClick = (e) => {
    const id = Number(e.currentTarget.id); // note here
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      Todo List Component
      <div className="todolist">
        <input
          type="text"
          placeholder="Add todo here..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // note here
              handleEnter(e);
            }
          }}
        />

        {todos.map((todo, index) => {
          return (
            <div
              key={index}
              id={todo.id}
              style={{
                display: "flex",
                flexDirection: "column",
                borderBottom: "1px solid lightgrey",
                padding: "5px 0",
              }}
              onClick={handleClick}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {" "}
                {!todo.completed ? (
                  <img
                    className="checkIcon"
                    alt="checkIcon"
                    src="/checkbox-blank-circle.svg"
                  />
                ) : (
                  <img
                    className="checkIcon"
                    alt="checkIcon"
                    src="/close-x.svg"
                  />
                )}{" "}
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
