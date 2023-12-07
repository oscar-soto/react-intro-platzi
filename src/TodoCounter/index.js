import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span>
      de <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
