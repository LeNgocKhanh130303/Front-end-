import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Ripples from "react-ripples";
import CardImg from "react-bootstrap/esm/CardImg";
import CardBody from "react-bootstrap/esm/CardBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
// or

function Cart() {
  return (
    <section className="custom-bg" style={{ backgroundColor: "F3F4F6" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col>
            <Card>
              <CardBody className="p-4">
                <Row>
                  <Col lg="8">
                    <Card className="mb-3">
                      <CardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <CardImg
                                src="https://steamcdn-a.akamaihd.net/steam/apps/269210/header.jpg"
                                fluid
                                className="rounded-3"
                                style={{ width: "250px", height: "140px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3 mg">
                              <h5>The Office Quest</h5>

                              <p className="small mb-0">
                                Fighting, Action2D, Fighter
                              </p>

                              <br></br>
                              <hr></hr>
                              <div className="float-sm-start">
                                <FontAwesomeIcon icon={faBox} />
                                <p className="d-inline ml-2"> Tình trạng:</p>
                                <p
                                  style={{ color: "green" }}
                                  className="d-inline ml-2"
                                >
                                  {" "}
                                  Còn hàng
                                </p>

                                <FontAwesomeIcon
                                  className="trash mt-auto"
                                  icon={faTrash}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-lg-row align-items-center  mb-lg-5   ">
                            <button className="btn btn-outline-secondary fw-normal mb-0">
                              -
                            </button>
                            <input
                              type="text"
                              className="form-control text-center mx-1"
                              value="1"
                              readOnly
                              style={{ width: "35px" }}
                            />
                            <button className="btn btn-outline-secondary">
                              +
                            </button>
                          </div>
                          <div>
                            <h5 className="mt-4">790.000 đ</h5>

                            <Stack
                              className="m-lg-1"
                              direction="horizontal"
                              gap={2}
                            >
                              <Badge pill bg="danger">
                                -1%
                              </Badge>

                              <p className="d-inline ml-2 mt-3 ">
                                <del>8000.0đ</del>
                              </p>
                            </Stack>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="mb-3">
                      <CardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <CardImg
                                src="https://steamcdn-a.akamaihd.net/steam/apps/387990/header.jpg"
                                fluid
                                className="rounded-3"
                                style={{ width: "250px", height: "140px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3 mg">
                              <h5>The Office Quest</h5>

                              <p className="small mb-0">
                                Fighting, Action2D, Fighter
                              </p>

                              <br></br>
                              <hr></hr>
                              <div className="float-sm-start">
                                <FontAwesomeIcon icon={faBox} />
                                <p className="d-inline ml-2"> Tình trạng:</p>
                                <p
                                  style={{ color: "green" }}
                                  className="d-inline ml-2"
                                >
                                  {" "}
                                  Còn hàng
                                </p>
                              </div>
                              <FontAwesomeIcon
                                className="trash mt-auto"
                                icon={faTrash}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-lg-row align-items-center  mb-lg-5   ">
                            <button className="btn btn-outline-secondary fw-normal mb-0">
                              -
                            </button>
                            <input
                              type="text"
                              className="form-control text-center mx-1"
                              value="1"
                              readOnly
                              style={{ width: "35px" }}
                            />
                            <button className="btn btn-outline-secondary">
                              +
                            </button>
                          </div>
                          <div>
                            <h5 className="mt-4">790.000 đ</h5>
                            <Stack
                              className="m-lg-1"
                              direction="horizontal"
                              gap={2}
                            >
                              <Badge pill bg="danger">
                                -1%
                              </Badge>

                              <p className="d-inline ml-2 mt-3 ">
                                <del>8000.0đ</del>
                              </p>
                            </Stack>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="mb-3">
                      <CardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <CardImg
                                src="https://steamcdn-a.akamaihd.net/steam/apps/251570/header.jpg"
                                fluid
                                className="rounded-3"
                                style={{ width: "250px", height: "140px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3 mg">
                              <h5>The Office Quest</h5>

                              <p className="small mb-0">
                                Fighting, Action2D, Fighter
                              </p>

                              <br></br>
                              <hr></hr>
                              <div className="float-sm-start">
                                <FontAwesomeIcon icon={faBox} />
                                <p className="d-inline ml-2"> Tình trạng:</p>
                                <p
                                  style={{ color: "green" }}
                                  className="d-inline ml-2"
                                >
                                  {" "}
                                  Còn hàng
                                </p>

                                <FontAwesomeIcon
                                  className="trash mt-auto"
                                  icon={faTrash}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-lg-row align-items-center  mb-lg-5   ">
                            <button className="btn btn-outline-secondary fw-normal mb-0">
                              -
                            </button>
                            <input
                              type="text"
                              className="form-control text-center mx-1"
                              value="1"
                              readOnly
                              style={{ width: "35px" }}
                            />
                            <button className="btn btn-outline-secondary">
                              +
                            </button>
                          </div>
                          <div>
                            <h5 className="mt-4">790.000 đ</h5>
                            <Stack
                              className="m-lg-1 "
                              direction="horizontal"
                              gap={2}
                            >
                              <Badge pill bg="danger">
                                -1%
                              </Badge>

                              <p className="d-inline ml-2 mt-3 ">
                                <del>8000.0đ</del>
                              </p>
                            </Stack>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="mb-3">
                      <CardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <CardImg
                                src="https://steamcdn-a.akamaihd.net/steam/apps/690640/header.jpg"
                                fluid
                                className="rounded-3"
                                style={{ width: "250px", height: "140px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3 mg">
                              <h5>The Office Quest</h5>

                              <p className="small mb-0">
                                Fighting, Action2D, Fighter
                              </p>

                              <br></br>
                              <hr></hr>
                              <div className="float-sm-start">
                                <FontAwesomeIcon icon={faBox} />
                                <p className="d-inline ml-2"> Tình trạng:</p>
                                <p
                                  style={{ color: "green" }}
                                  className="d-inline ml-2"
                                >
                                  {" "}
                                  Còn hàng
                                </p>

                                <FontAwesomeIcon
                                  className="trash mt-auto"
                                  icon={faTrash}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-lg-row align-items-center  mb-lg-5   ">
                            <button className="btn btn-outline-secondary fw-normal mb-0">
                              -
                            </button>
                            <input
                              type="text"
                              className="form-control text-center mx-1"
                              value="1"
                              readOnly
                              style={{ width: "35px" }}
                            />
                            <button className="btn btn-outline-secondary">
                              +
                            </button>
                          </div>
                          <div>
                            <h5 className="mt-4">790.000 đ</h5>
                            <Stack
                              className="m-lg-1"
                              direction="horizontal"
                              gap={2}
                            >
                              <Badge pill bg="danger">
                                -1%
                              </Badge>

                              <p className="d-inline ml-2 mt-3 ">
                                <del>8000.0đ</del>
                              </p>
                            </Stack>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col lg="4">
                    <Card className="bg-bg-white text-black brounded-3">
                      <CardBody>
                        <div className="d-flex justify-content-between align-items-center mb-3 ">
                          <h5 className="mb-0 ">Thanh toán:</h5>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Tổng giá trị sản phẩm:</p>
                          <p className="mb-2">186.000đ</p>
                        </div>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Tổng giá trị phải thanh toán: </p>
                          <p className="mb-2">186.000đ</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Số dư hiện tại: </p>
                          <p className="mb-2">0đ</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Số dư cần phải thanh toán: </p>
                          <p className="mb-2">186.000đ</p>
                        </div>

                        <Button variant="primary" block size="sm">
                          <div className="d-flex justify-align-align-content-lg-between no-gap">
                            <img
                              className="divines"
                              src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg"
                              alt="Divine Shop Logo"
                            ></img>
                            <span className=" span  mt-1">
                              Đăng nhập để thanh toán
                            </span>
                          </div>
                        </Button>
                        <p className="mt-2">Quét mã không cần thanh toán</p>
                        <Button variant="info" block size="sm">
                          <div className="d-flex justify-align-align-content-lg-between no-gap">
                            <img
                              className="divines"
                              src="https://cdn.divineshop.vn/static/ed4044413ba8489903d4f27bac88aa02.svg"
                              alt="Divine Shop Logo"
                            />
                            <span className="span mt-1 custom-text-color">
                              Đăng nhập để thanh toán
                            </span>
                          </div>
                        </Button>

                        <Button
                          className="momo mt-3 custom-button"
                          block
                          size="sm"
                        >
                          <div>
                            <img
                              className="momoimg"
                              src="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg"
                              alt="Divine Shop Logo"
                            />
                            <span className="span1 mt-1">
                              Đăng nhập để thanh toán
                            </span>
                          </div>
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Cart;
