// import { useState } from "react";
import { createRoot } from "react-dom/client";
import Todo from "./Todo";

const App = () => {
  return (
    <>
      <header>
        <h1>To-do list</h1>
      </header>
      <main>
        <Todo />
      </main>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
