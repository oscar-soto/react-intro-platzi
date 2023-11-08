import React, { useEffect, useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Hacer Duolingo', completed: true },
// ];
// const stringifyTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', stringifyTodos);
// localStorage.removeItem('TODOS_V1')

function App() {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // const [todos, setTodos] = useState(() => {
  //   const localStorageTodo = localStorage.getItem('TODOS_V1');
  //   const parsedTodos = JSON.parse(localStorageTodo);

  //   return parsedTodos || [];
  // });

  useEffect(() => {
    const localStorageTodo = localStorage.getItem('TODOS_V1');
    const parsedTodos = JSON.parse(localStorageTodo);

    setTodos(parsedTodos);
  }, []);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  };

  const onComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}
export default App;
