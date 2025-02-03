import { ACTIONS } from "./Calculator";

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() => {
        console.log(operation);
        dispatch({ type: ACTIONS.CHOSE_OPERATION, payload: { operation } });
      }}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
