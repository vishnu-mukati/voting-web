import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./modal.module.css"

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    );
}

const portalElements = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>

            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
                portalElements
            )}
        </Fragment>
    );
}

export default Modal;