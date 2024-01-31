import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModal({ show, title, subTitle, onConfirm, onCancel }) {
    return (
        <Modal
            show={show}
            onHide={onCancel}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {subTitle}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    No
                </Button>
                <Button variant="primary" onClick={onConfirm}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;