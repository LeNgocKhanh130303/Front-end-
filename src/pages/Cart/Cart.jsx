import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/esm/CardImg";
import CardBody from "react-bootstrap/esm/CardBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faTrash } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import './cart.css'
function Cart() {
  return (
    <section className="custom-bg">
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col sm={8}>
            <Card className="mb-2">
              <CardBody>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <CardImg
                      src="https://steamcdn-a.akamaihd.net/steam/apps/269210/header.jpg"
                      fluid
                      className="item"
                      alt="Shopping item"
                    />
                    <div className="ms-2">

                      <h5>Elden Ring </h5>
                      <p className="small mb-0">Action , RPG</p>
                      <hr />
                      <br></br>


                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faBox}  />
                        <p className="d-inline mb-0 ms-2">Tình trạng:</p>


                        <span style={{ color: "white" , fontWeight:'bold', width:'100px'}} className="d-inline">
                          Còn hàng
                        </span>
                        <div className="ms-auto">
                          <FontAwesomeIcon
                            className="trash mt-auto"
                            icon={faTrash}
                            style={{ color: "red" }}
                          />
                        </div>


                      </div>

                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-5 ">
                    <Button variant="warning" className="fw-normal ">-</Button>
                    <input
                      type="text "
                      className="form-control text-center mx-1"
                      value="1"
                      readOnly
                      style={{ width: "35px" }}
                    />
                    <Button variant="warning">+</Button>
                  </div>
                  <div className=" bbadge ms-5 mt-n1">
                    <h5 className="">790.000 đ</h5>
                    <Stack direction="horizontal" gap={1}>
                      <Badge cl pill bg="danger">-1%</Badge>
                      <p className="d-inline mt-2 mb-2 ms-2">
                        <del>800.000 đ</del>
                      </p>

                    </Stack>
                  </div>

                </div>
              </CardBody>
            </Card>
            <Card className="mb-2">
              <CardBody>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <CardImg
                      src="https://steamcdn-a.akamaihd.net/steam/apps/269210/header.jpg"
                      fluid
                      className="item"
                      alt="Shopping item"
                    />
                    <div className="ms-2">

                      <h5>Elden Ring </h5>
                      <p className="small mb-0">Action , RPG</p>
                      <hr />
                      <br></br>


                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faBox} style={{ color: "#f1f2f3" }} />
                        <p className="d-inline mb-0 ms-2">Tình trạng:</p>


                        <span style={{ color: "white" , fontWeight:'bold', width:'100px'}} className="d-inline ms-2">
                          Còn hàng
                        </span>
                        <div className="ms-auto">
                          <FontAwesomeIcon
                            className="trash mt-auto"
                            icon={faTrash}
                            style={{ color: "red" }}
                          />
                        </div>


                      </div>

                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-5 ">
                    <Button variant="warning" className="fw-normal ">-</Button>
                    <input
                      type="text "
                      className="form-control text-center mx-1"
                      value="1"
                      readOnly
                      style={{ width: "35px" }}
                    />
                    <Button variant="warning">+</Button>
                  </div>
                  <div className=" bbadge ms-5 mt-n1">
                    <h5 className="">790.000 đ</h5>
                    <Stack direction="horizontal" gap={1}>
                      <Badge cl pill bg="danger">-1%</Badge>
                      <p className="d-inline mt-2 mb-2 ms-2">
                        <del>800.000 đ</del>
                      </p>

                    </Stack>
                  </div>

                </div>
              </CardBody>
            </Card>
            <Card className="mb-2">
              <CardBody>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <CardImg
                      src="https://steamcdn-a.akamaihd.net/steam/apps/269210/header.jpg"
                      fluid
                      className="item"
                      alt="Shopping item"
                    />
                    <div className="ms-2">

                      <h5>Elden Ring </h5>
                      <p className="small mb-0">Action , RPG</p>
                      <hr />
                      <br></br>


                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faBox} style={{ color: "#f1f2f3" }} />
                        <p className="d-inline mb-0 ms-2">Tình trạng:</p>


                        <span style={{ color: "white" , fontWeight:'bold', width:'100px'}}  className="d-inline ms-2">
                          Còn hàng
                        </span>
                        <div className="ms-auto">
                          <FontAwesomeIcon
                            className="trash mt-auto"
                            icon={faTrash}
                            style={{ color: "red" }}
                          />
                        </div>


                      </div>

                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-5 ">
                    <Button variant="warning" className="fw-normal ">-</Button>
                    <input
                      type="text "
                      className="form-control text-center mx-1"
                      value="1"
                      readOnly
                      style={{ width: "35px" }}
                    />
                    <Button variant="warning">+</Button>
                  </div>
                  <div className=" bbadge ms-5 mt-n1">
                    <h5 className="">790.000 đ</h5>
                    <Stack direction="horizontal" gap={1}>
                      <Badge cl pill bg="danger">-1%</Badge>
                      <p className="d-inline mt-2 mb-2 ms-2">
                        <del>800.000 đ</del>
                      </p>

                    </Stack>
                  </div>

                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card className="bg-bg-white text-black rounded-3">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Thanh toán:</h5>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Tổng giá trị sản phẩm:</p>
                  <p className="mb-2">186.000đ</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Tổng giá trị phải thanh toán:</p>
                  <p className="mb-2">186.000đ</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Số dư hiện tại:</p>
                  <p className="mb-2">0đ</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Số dư cần phải thanh toán:</p>
                  <p className="mb-2">186.000đ</p>
                </div>
                <Button variant="primary" block size="sm">
                  <div className="d-flex justify-content-between align-items-center no-gap">
                    <img
                      className="divines"
                      src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg"
                      alt="Divine Shop Logo"
                    />
                    <span className="span mt-1">Đăng nhập để thanh toán</span>
                  </div>
                </Button>
                <p className="mt-2">Quét mã không cần thanh toán</p>
                <Button variant="info" block size="sm">
                  <div className="d-flex justify-content-between align-items-center no-gap">
                    <img
                      className="divines"
                      src="https://cdn.divineshop.vn/static/ed4044413ba8489903d4f27bac88aa02.svg"
                      alt="Divine Shop Logo"
                    />
                    <span className="span mt-1">Đăng nhập để thanh toán</span>
                  </div>
                </Button>
                <Button className="momo mt-3 custom-button" block size="sm">
                  <div className="d-flex justify-content-between align-items-center no-gap">
                    <img
                      className="divines"
                      src="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg"
                      alt="Divine Shop Logo"
                    />
                    <span className="span1 mt-1">Đăng nhập để thanh toán</span>
                  </div>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>




      </Container>
    </section>
  );
}
export default Cart;
