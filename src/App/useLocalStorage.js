import { useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  // Consulta a Local Storage
  const localStorageItems = localStorage.getItem(itemName);
  let parsedItems;
  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorageItems);
  }

  const [item, setItem] = useState(parsedItems);
  // const [todos, setTodos] = useState(() => {
  //   const localStorageTodo = localStorage.getItem('TODOS_V1');
  //   const parsedTodos = JSON.parse(localStorageTodo);

  //   return parsedTodos || [];
  // });

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];

  // const saveTodos = (newTodos) => {
  //   localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
  //   setTodos(newTodos)
  // };

  // useEffect(() => {
  //   const localStorageTodo = localStorage.getItem('TODOS_V1');
  //   const parsedTodos = JSON.parse(localStorageTodo);

  //   setTodos(parsedTodos);
  // }, []);
}

export { useLocalStorage };
