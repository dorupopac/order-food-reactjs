import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({onCloseClick}) => {
  return <div className={classes.backdrop} onClick={onCloseClick} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({ onCloseClick, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCloseClick={onCloseClick} />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </>
  );
};
export default Modal;
