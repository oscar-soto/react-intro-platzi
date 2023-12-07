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
  }, [initialValue, itemName]);

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
}

export { useLocalStorage };
