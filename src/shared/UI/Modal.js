import React from 'react';
import ReactDOM from "react-dom";
import { CSSTransition } from 'react-transition-group';
import { IoCloseCircle } from "react-icons/io5";
import Backdrop from './Backdrop';
import Success from '../components/Success';
import './Modal.css';

const ModalOverlay = props => {

    const content = (
        <div className={`modal_container
         ${props.className}`} ref={props.ref}>
            <div className="modal_bg" onClick={props.onClose}></div>
            <div className='modal_content'>
                <IoCloseCircle className='modal_close_icon' onClick={props.onClose} />
                {!props.success ? props.children : <Success onClose={props.onClose} />}
            </div>

        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
    const nodeRef = React.useRef(null)
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onClose} />}
            <CSSTransition
                nodeRef={nodeRef}
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </React.Fragment>
    );
};

export default Modal;
