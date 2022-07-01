import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function ModalLogin(props) {
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            //console.log("******** response.json(): ", response.json())
             const responseJson = response.json()
            // console.log("****** response json: ", responseJson)
            // console.log("Type of", typeof (responseJson))
            // console.log("****** response json custom: ", responseJson[Promise])
            alert("Error in login/password")
            return Promise.reject(new Error(response.statusText))
        }
    }

    function json(response) {
        console.log("******* response: ", response)
        return response.json()
    }

    function handleLoginConfirm(event) {
        event.preventDefault()
        console.log("****************** in submit login")
        fetch('http://localhost:3005/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password }),
        })
            .then(status)
            .then(json)
            .then(function (data) {
                console.log('Success:', data);
                props.handleLogin(data['login']);
                setShow(false);
            }).catch(function (error) {
                console.log('Request failed', error);
            });


    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChangeLogin(event) {
        setLogin(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    return (
        <>
            <Button variant="light" className='logButton' onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle"><b>{props.name}</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form onSubmit={handleLoginConfirm}>
                            <Row className="mb-3">
                                <Form.Group controlId="formGridLogin">
                                    <Form.Label variant="custom">Login</Form.Label>
                                    <Form.Control name="name" type="text" onChange={handleChangeLogin} required placeholder="Enter your login" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group controlId="formGridPassword">
                                    <Form.Label variant="custom">Password</Form.Label>
                                    <Form.Control name="name" type="text" onChange={handleChangePassword} required placeholder="Enter your password" />
                                </Form.Group>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col md={{ span: 1, offset: 2 }}></Col>
                                <Col md={1}>
                                    <Button variant="success" type="submit" >
                                        Confirm
                                    </Button>
                                </Col>
                                <Col md={{ span: 2, offset: 1 }}></Col>
                                <Col md={2}>
                                    <Button variant="danger" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Col md={{ span: 2, offset: 2 }}></Col>
                                </Col>
                            </Row>

                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalLogin