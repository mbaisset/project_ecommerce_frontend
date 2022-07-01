import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

function ProductDetail(props) {



    let [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        let productId = props.id
        //console.log(productId)
        fetch(`http://localhost:3005/get-product-detail/${productId}`, { method: 'GET', credentials: 'include' })
            .then((response) => {
                return response.json()

            }).then((data) => setProductDetail(data))
    }, []);





    return (
        <div className="ProductDetail" >
            <Container>
                <Row>
                    <Col>
                        <Figure className="imageProductDetailed" >
                            <Figure.Image


                                src={productDetail.image}
                            />

                        </Figure>
                    </Col>
                    <Col>
                        <div > <b>Description:</b> </div>
                        <Row className="quickDescriptionDetailed" > {productDetail.quickdescription}</Row>
                    </Col>
                </Row>
                <hr className="lineLittleMargin"></hr>
                <Row>
                    <Col>
                    <b>Price</b>
                    
                    </Col>
                    <Col>
                    {productDetail.price} €
                    </Col>
                </Row>
                <hr className="lineLittleMargin"></hr>
                <Row>
                    <Col>
                    <b>Number of players:</b>
                    
                    </Col>
                    <Col>
                    from {productDetail.minimumplayers} to {productDetail.maximumplayers} players                    
                    </Col>
                </Row>
                <hr className="lineLittleMargin"></hr>
                <Row>
                    <Col>
                    <b>Duration:</b>
                    
                    </Col>
                    <Col>
                    from {productDetail.minimumduration} to {productDetail.maximumduration} minutes                    
                    </Col>
                </Row>
                <hr className="lineLittleMargin"></hr>
                <Row > <b>Long description:</b> </Row>
                <Row className="longDescriptionDetailed" > {productDetail.longdescription}</Row>
                
            </Container>
        </div>
    )

}

export default ProductDetail