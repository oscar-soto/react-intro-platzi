import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  onComplete,
  onDelete,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading ? <p>Estamos cargando...</p> : null}
        {error ? <p>Tenemos un error...</p> : null}

        {Boolean(!loading) && searchedTodos.length === 0 ? (
          <p>Crea tu primer TODO</p>
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

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
