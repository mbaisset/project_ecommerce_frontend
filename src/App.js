import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct';
import ModifyProduct from './ModifyProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import ModalLogin from './ModalLogin';
import ModalLogout from './ModalLogout';


function App() {

  let [currentPage, setCurrentPage] = useState("productPreview")
  let [profile, setProfile] = useState("guest")
  let [idToManage, setIdToManage] = useState("")
  let [productToModify, setProductToModify] = useState({})
  let [updatePage, setUpdatePage] = useState(false)

  function displayCurrentPage(pageToDisplay) {
    setCurrentPage(pageToDisplay)
  }

  function passIdToManage(id) {
    setIdToManage(id)
  }

  function passProductToModify(product) {
    setProductToModify(product)
  }

  function manageUpdatePage() {
    setUpdatePage(!updatePage)
  }

  function handleLogin(login) {
    console.log("********* Login: ", login)
    setProfile(login)
    console.log("********profile: ",profile)
  }

  function handleLogout() {
    setProfile("guest")
  }

  return (
    <div className="App">
      <Container fluid>
        <Row >
          <Col xs lg="2">
            <div className="profileDisplay">Connected as: {profile}</div>
          </Col>
          <Col md="8">          <h1 className='ecommerceName'>
            DA GAMEZ LAIRZ
          </h1></Col>
          <Col xs lg="2">

              <Container>
                {profile == "guest" && <ModalLogin handleLogin={handleLogin} pageToDisplay={displayCurrentPage}/>}
                {profile != "guest" && <ModalLogout handleLogout={handleLogout} pageToDisplay={displayCurrentPage}/>}
              </Container>


          </Col>
        </Row>
        <Row>

        </Row>
      </Container>

      {currentPage == "productPreview" && <ProductList pageToDisplay={displayCurrentPage} profile={profile} passIdToManage={passIdToManage} passProductToModify={passProductToModify} manageUpdatePage={manageUpdatePage} updatePage={updatePage} />}
      {currentPage == "addProduct" && <AddProduct pageToDisplay={displayCurrentPage} profile={profile} passIdToManage={passIdToManage} manageUpdatePage={manageUpdatePage} updatePage={updatePage} />}
      {currentPage == "modifyProduct" && <ModifyProduct pageToDisplay={displayCurrentPage} profile={profile} productToModify={productToModify} manageUpdatePage={manageUpdatePage} updatePage={updatePage} />}
      {currentPage == "deleteProduct" && <DeleteProduct pageToDisplay={displayCurrentPage} idToManage={idToManage} manageUpdatePage={manageUpdatePage} updatePage={updatePage} />}
    </div>
  );
}

export default App;
