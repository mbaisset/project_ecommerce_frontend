import { Container } from "react-bootstrap";
import ButtonTemplate from "./ButtonTemplate";
import ProductDetail from "./ProductDetail";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function DeleteProduct(props) {

    function onClickCancel() {
        props.pageToDisplay("welcome")
    }

    function handleClickDelete(event) {
        event.preventDefault()

        fetch('http://localhost:3005/delete-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: props.idToManage}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .then(onClickCancel())
            .catch((error) => {
                console.error('Error:', error);
            })

        
    }

    return (
        <div>
            <h1>Game deletion page</h1>
            <Container className="productToDelete">
                
                <hr></hr>
                <Row>
                    <Col md={4}></Col>
                    <Col md={2}>
                        <Button variant="outline-danger" size="sm" onClick={handleClickDelete}>
                            Confirm Delete
                        </Button>
                    </Col>
                    <Col md={2}>
                        <Button variant="outline-success" size="sm" onClick={onClickCancel}>
                            Cancel Delete
                        </Button>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </div>
    )

}

export default DeleteProduct