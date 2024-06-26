import PropTypes from "prop-types";
import Modal from "./Modal";
import Button from "../FormElements/Button";

const ErrorModal = ({ onClear, error }) => {
  return (
    <Modal
      onCancel={onClear}
      header="An Error Occurred!"
      show={!!error}
      footer={<Button onClick={onClear}>Okay</Button>}
    >
      <p>{error}</p>
    </Modal>
  );
};

export default ErrorModal;
ErrorModal.propTypes = {
  error: PropTypes.any,
  onClear: PropTypes.any,
};
