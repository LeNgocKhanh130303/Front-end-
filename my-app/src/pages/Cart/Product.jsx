import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// // import Ripples from "react-ripples"; 
// import CardImg from "react-bootstrap/esm/CardImg";
// import CardBody from "react-bootstrap/esm/CardBody";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBox } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Badge from "react-bootstrap/Badge";
// import Stack from "react-bootstrap/Stack";
// // or

function NoCreateproduct() {
  return(
    <section className="backgroup" style={{ backgroundColor: "white" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col>
          <h3>Giỏ hàng trống!cd</h3>
          <p>Thêm sản phẩm vào giỏ và quay lại trang này để thanh toán nha bạn nhé</p>
          <img src="https://cdn.divineshop.vn/static/4e0db8ffb1e9cac7c7bc91d497753a2c.svg"></img>
          </Col>
         
        </Row>
      </Container>
    </section>
  )
 

}
export default NoCreateproduct ;
