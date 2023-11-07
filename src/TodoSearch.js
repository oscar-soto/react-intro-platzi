// import { useState } from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  // const [searchValue, setSearchValue] = useState('');

  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch };
