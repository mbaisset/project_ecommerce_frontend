import "./ProductList.css"

import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import ShowDetailsModal from "./ModalShowDetails";


function ProductPreview(props) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quickdescription, setQuickDescription] = useState("")
    const [image, setImage] = useState("")

    function handleShowDelete() {
        props.passIdToManage(parseInt(props.id))
        props.pageToDisplay("deleteProduct");
    }

    function handleShowModify() {

        fetch(`http://localhost:3005/get-product-detail/${props.id}`, { method: 'GET', credentials: 'include' })
            .then((response) => {
                return response.json()

            }).then((data) => { props.passProductToModify(data) })
            .then(props.pageToDisplay("modifyProduct"))


    }

    function handleAddtobasket (event) {
        event.preventDefault()
       
        fetch('http://localhost:3005/add-product-basket', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price}),
        })
            .then(response => response.json())
            .then(data => {
                alert("Product successfully added to your basket")
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    useEffect(() => {
        setName(props.name)
        setPrice(props.price)
        setImage(props.image)
        setQuickDescription(props.quickdescription)
    }, [props.name, props.price, props.image, props.quickdescription])


    return (


        <div className="Product" >
            <Container>

                <div className="gameName"><b>{name}</b></div>
                <hr className="lineLittleMargin"></hr>
                <Figure className="imageProductPreview">
                    <Figure.Image
                        src={image}
                    />

                </Figure>
                <hr className="lineNoMargin"></hr>
                <Row>
                    <Col>
                        <div > <b>Description:</b> </div>
                        <Row className="quickDescriptionDetailed" > {quickdescription}</Row>
                    </Col>

                </Row>

                <hr></hr>
                <Row>
                    <Col>
                        <b>Price</b>
                    </Col>
                    <Col>
                        {price} €
                    </Col></Row>
                <hr></hr>
                <Row>
                    <Col md={6}>
                        <ShowDetailsModal {...props}></ShowDetailsModal>
                    </Col>
                    {props.profile != "admin" &&
                        <Col md={6}>
                            <Button variant="outline-warning" size="sm" onClick={handleAddtobasket}>
                                Add to basket
                            </Button>
                        </Col>
                    }
                </Row>
                <hr></hr>
                {props.profile === "admin" &&
                    <Row>
                        <Col md={6}>
                            <Button variant="outline-warning" size="sm" onClick={handleShowModify}>
                                Modify
                            </Button>
                        </Col>{' '}
                        <Col md={6}>
                            <Button variant="outline-danger" size="sm" onClick={handleShowDelete}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                }
            </Container>

        </div>



    )

}

export default ProductPreview