import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sincrnizedItem, setSincrnizedItem] = useState(true);

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
        setSincrnizedItem(true);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 3000);
  }, [sincrnizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincrnizedItem(false);
  };

  return {
    item,
    loading,
    error,
    saveItem,
    sincronizeItem
  };
}

export { useLocalStorage };
