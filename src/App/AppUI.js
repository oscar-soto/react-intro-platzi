import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";

function AppUI() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({loading, error, searchedTodos, onComplete, onDelete}) => (
          <TodoList>
            {loading ? (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            ) : null}
            {error ? <TodosError /> : null}

            {Boolean(!loading) && searchedTodos.length === 0 ? (
              <EmptyTodos />
            ) : (
              searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={onComplete}
                  onDelete={onDelete}
                />
              ))
            )}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
