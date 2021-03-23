import { createPortal } from "react-dom";

const ModalPortal = ({ children }) => {
  const container = document.body;

  return createPortal(children, container)
};

export default ModalPortal;
