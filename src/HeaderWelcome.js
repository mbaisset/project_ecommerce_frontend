import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function HeaderWelcome(props) {


    function onSelectAddProduct() {
        props.pageToDisplay("addProduct")
    }

    function onSelectDeleteProduct() {
        props.pageToDisplay("deleteProduct")
    }

    return (

            <Container>
                <Button variant="secondary" onClick={() => { onSelectAddProduct() }}>
                    Add a new product
                </Button>
            </Container>


    )


}

export default HeaderWelcome

