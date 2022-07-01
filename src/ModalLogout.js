import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import ProductDetail from './ProductDetail';

function ModalLogout (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleConfirm = () => {
        props.handleLogout()
        setShow(false)
        props.pageToDisplay("productPreview")
    }

    return (
        <>
            <Button variant="light" className='logButton' onClick={handleShow}>
                Logout
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle"><b>{props.name}</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to Logout ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleConfirm}>
                        Confirm
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalLogout