import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';

import './TodoForm.css';

function TodoForm() {
  const { setOpenModal, onAddTodo } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const withoutSpace = newTodoValue.trim();

    if (withoutSpace.length > 1) {
      onAddTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    const text = e.target.value;
    setNewTodoValue(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="newTodo">Escribe tu nuevo TODO</label>
      <textarea
        name="newTodo"
        id="newTodo"
        placeholder="Cortar cebolla para el almuerzo"
        onChange={onChange}
        value={newTodoValue}
      ></textarea>

      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
