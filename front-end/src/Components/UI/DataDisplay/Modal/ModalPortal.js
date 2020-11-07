import { createPortal } from "react-dom";

// TODO useEffect

const ModalPortal = ({ children }) => {
  const container = document.getElementsByTagName("body");

  return createPortal(children, container[0]);
};

export default ModalPortal;
