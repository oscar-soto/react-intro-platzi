import { WithStorageListener } from './WithStorageListener';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>Hubo Cambio</p>
        <button onClick={() => toggleShow(false)}>
          Volver a cargar la información
        </button>
      </div>
    );
  }

  return null;
};

export const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);
