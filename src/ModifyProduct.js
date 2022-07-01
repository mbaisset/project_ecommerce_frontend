import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './App.css'
import { useState, useEffect } from 'react'


function ModifyProduct(props) {




    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [fromage, setFromAge] = useState("")
    const [minimumduration, setMinimumDuration] = useState("")
    const [maximumduration, setMaximumDuration] = useState("")
    const [minimumplayers, setMinimumPlayers] = useState("")
    const [maximumplayers, setMaximumPlayers] = useState("")
    const [quickdescription, setQuickDescription] = useState("")
    const [longdescription, setLongDescription] = useState("")


    useEffect(() => {
        setId(props.productToModify.id)
        setName(props.productToModify.name)
        setImage(props.productToModify.image)
        setPrice(props.productToModify.price)
        setFromAge(props.productToModify.fromage)
        setMinimumDuration(props.productToModify.minimumduration)
        setMaximumDuration(props.productToModify.maximumduration)
        setMinimumPlayers(props.productToModify.minimumplayers)
        setMaximumPlayers(props.productToModify.maximumplayers)
        setQuickDescription(props.productToModify.quickdescription)
        setLongDescription(props.productToModify.longdescription)
        console.log(name)

    },[props.productToModify])

 
    console.log("In Modify Product - updatePage: ",props.updatePage)

    const handleChangeName = event => {
        setName(event.target.value)
    }

    const handleChangeImage = event => {
        setImage(event.target.value)
    }

    const handleChangePrice = event => {
        setPrice(event.target.value)
    }

    const handleChangeFromAge = event => {
        setFromAge(event.target.value)
    }

    const handleChangeMinimumDuration = event => {
        setMinimumDuration(event.target.value)
    }

    const handleChangeMaximumDuration = event => {
        setMaximumDuration(event.target.value)
    }

    const handleChangeMinimumPlayers = event => {
        setMinimumPlayers(event.target.value)
    }

    const handleChangeMaximumPlayers = event => {
        setMaximumPlayers(event.target.value)
    }

    const handleChangeQuickDescription = event => {
        setQuickDescription(event.target.value)
    }

    const handleChangeLongDescription = event => {
        setLongDescription(event.target.value)
    }

    function onClickCancel() {
        props.pageToDisplay("productPreview")
    }

    function onSubmitSuccesfull() {
        props.pageToDisplay("productPreview")
    }

    function handleSubmitForm (event) {

        
        event.preventDefault()

        fetch('http://localhost:3005/modify-product', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, quickdescription, longdescription, image, price, fromage, minimumduration, maximumduration, minimumplayers, maximumplayers, id }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                props.manageUpdatePage(!props.updatePage)
            })
            .then(onSubmitSuccesfull())
            .catch((error) => {
                console.error('Error:', error);
            })


    }

    return (
        <div>
            <h2>Modify a game</h2>
            <Container>
                <Form onSubmit={(event) => {handleSubmitForm(event)}} className="addproductform">
                    <Row className="mb-3">
                        <Form.Group controlId="formGridName">
                            <Form.Label variant="custom">Name of the game</Form.Label>
                            <Form.Control name="name" type="text" onChange={handleChangeName} required  defaultValue={name}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group controlId="formGridQuickDescription">
                            <Form.Label variant="custom">Quick description of the game</Form.Label>
                            <Form.Control name="quickdescription" as="textarea" onChange={handleChangeQuickDescription} rows={3} required defaultValue={quickdescription} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridImage">
                            <Form.Label variant="custom">Picture of the Game</Form.Label>
                            <Form.Control type="text" onChange={handleChangeImage} required defaultValue={image} />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label variant="custom">Price in €</Form.Label>
                            <Form.Control type="number" step="0.01" required defaultValue={price} onChange={handleChangePrice} />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAgeMin">
                            <Form.Label variant="custom">From Age</Form.Label>
                            <Form.Control type="number" onChange={handleChangeFromAge} defaultValue={fromage} />
                        </Form.Group>

                    </Row>


                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formGridNbPlayerMin">
                            <Form.Label variant="custom">Minimum Number of Players</Form.Label>
                            <Form.Control type="number" onChange={handleChangeMinimumPlayers} defaultValue={minimumplayers} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNbPlayerMax">
                            <Form.Label>Minimum Number of Players</Form.Label>
                            <Form.Control type="number" onChange={handleChangeMaximumPlayers} defaultValue={maximumplayers} />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formGridDurationMin">
                            <Form.Label variant="custom">Minimum Duration in Minutes</Form.Label>
                            <Form.Control type="number" onChange={handleChangeMinimumDuration} defaultValue={minimumduration} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDurationMax">
                            <Form.Label>Maximum Duration in Minutes</Form.Label>
                            <Form.Control type="number" onChange={handleChangeMaximumDuration} defaultValue={maximumduration} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group controlId="formGridLongDescription">
                            <Form.Label variant="custom">Long description of the game</Form.Label>
                            <Form.Control name="longdescription" as="textarea" onChange={handleChangeLongDescription} rows={10} defaultValue={longdescription} />
                        </Form.Group>
                    </Row>


                    <Row>

                        <Col md={{ span: 2, offset: 2 }}></Col>
                        <Col md={1}>
                            <Button variant="success" type="submit" >
                                Submit
                            </Button>

                        </Col>
                        <Col md={{ span: 1, offset: 0 }}></Col>

                        <Col md={2}>
                            <Button variant="primary" onClick={() => { onClickCancel(props) }}>
                                Cancel
                            </Button>
                            <Col md={{ span: 2, offset: 2 }}></Col>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )

}

export default ModifyProduct