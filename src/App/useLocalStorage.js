import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        // Consulta a Local Storage
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;
        
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
          setItem(parsedItems);
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems);
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    loading,
    error,
    saveItem,
  };

  // const [todos, setTodos] = useState(() => {
  //   const localStorageTodo = localStorage.getItem('TODOS_V1');
  //   const parsedTodos = JSON.parse(localStorageTodo);

  //   return parsedTodos || [];
  // });

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
