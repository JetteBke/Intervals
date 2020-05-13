import React from "react";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";
import './StartModal.css';

const StartModal = (props) => {

    const onModalClose = () => {
        props.onHide();
    };

    const secondsCounter = (seconds) => {
        return seconds;
    };

    return (
        <Modal className="startModal" onHide={onModalClose} show={props.show} centered>
            <Modal.Header closeButton>
                <h1>Training gestartet</h1>
            </Modal.Header>
            <Modal.Body>
                <p>{secondsCounter(props.data.pause)}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="modalButton" onClick={onModalClose}>Stop</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default StartModal;