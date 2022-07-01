import ProductPreview from "./ProductPreview"
import "./ProductList.css"
import { useEffect, useState } from "react"
import HeaderWelcome from "./HeaderWelcome"


function triProductByName(a, b) {

    let value1 = a.name.toLowerCase()
    let value2 = b.name.toLowerCase()


    if (value1 > value2) {
        return 1;
    }
    if (value1 < value2) {
        return -1;
    }
    return 0;
}


function ProductList(props) {

    let [productList, setProductList] = useState([])

    useEffect(() => {
        console.log("In Product List Init:", props.updatePage)
        fetch('http://localhost:3005/get-products', { method: 'GET', credentials: 'include' })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setProductList(data.sort((a, b) => triProductByName(a, b)))
            })
    },[]
    )

    useEffect(() => {
        console.log("In Product List useEffect:", props.updatePage)
        fetch('http://localhost:3005/get-products', { method: 'GET', credentials: 'include' })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setProductList(data.sort((a, b) => triProductByName(a, b)))

            })
    },[props.updatePage]
    )


    function productPreviewDisplay() {
        console.log("In productPreviewDisplay")
        let productListComponent = productList.map(product => {
            return (
                <ProductPreview key={product.id} 
                                profile={props.profile}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                quickdescription={product.quickdescription}
                                id={product.id}
                                pageToDisplay={props.pageToDisplay}
                                passIdToManage={props.passIdToManage}
                                passProductToModify={props.passProductToModify}                                
                                manageUpdatePage= {props.manageUpdatePage} 
                                updatePage= {props.updatePage}
                                />
            )
        })

        return productListComponent
    }


    console.log("In Product List - updatePage: ",props.updatePage)

    return (
        <div>
            {(props.profile == "admin") && <HeaderWelcome pageToDisplay={props.pageToDisplay} />
            }
            <hr></hr>
            <div className="ProductList">
                {productPreviewDisplay()}
            </div>
        </div>
    )
}

export default ProductList