import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";

import "./style.css";
import "./bootstrap.min.css";
import { Navbar,   Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Table,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function Game() {
  const [showForm, setShowForm] = useState(false);
  const [games , setGames] = useState([]);
  const [game , setGame] = useState({
    id:"",
    name: "",
    description: "",
      priceGame: "",
      status: "",
     releaseDate: "",
      version: "",
      gameType: "",
  });

  useEffect(() => {
    setToken();
    loadGames();
  }, []);
  const setToken = () => {
    const bearertoken =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYW9oYW4iLCJpYXQiOjE3MTkwNDM5NDEsImV4cCI6MTcxOTA0NTM4MSwicm9sZXMiOlsiQURNSU4iXX0.8jywJIPzmT4ZdKLvzbx3cDpOilZxUcAQWzmgd1WbdqQ";
    localStorage.setItem("accesstoken", bearertoken);
  };
  // Load all 
  const loadGames = async () => {
    const token = localStorage.getItem("accesstoken");
    if (!token) {
      console.error("Token not found");
      return;
    }
    try {
      const response = await axios.get("http://localhost:8080/api/games", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data =
        typeof response.data === "string"
          ? JSON.parse(response.data)
          : response.data;
      console.log(data);

      setGames(Array.isArray(data) ? data : []);
      // console.log(game);
    } catch (error) {
      console.error(error);
    }
  };
  // Thêm game
  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accesstoken");
    if (!token) {
      console.error("Không tìm thấy token");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/games",
        game,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      loadGames();
      handleResetForm();
    } catch (error) {
      console.error(error);
    }
  };
  // XÓa Account
  const deleteGames = async (id) => {
    const token = localStorage.getItem("accesstoken");
    if (!token) {
      console.error("Không tìm thấy token");
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/games/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      loadGames();
    } catch (error) {
      console.error(error);
    }
  };
  // Chi tiết account
  const viewsGames = async (id) => {
    const token = localStorage.getItem("accesstoken");
    if (!token) {
      console.error("Không tìm thấy token");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/api/games/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setGame(response.data);
      loadGames();
    } catch (error) {
      console.error(error);
    }
  };
  //  edit
  const editGames = async (e,id) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const token = localStorage.getItem("accesstoken");
    if (!token) {
      console.error("Không tìm thấy token");
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:8080/api/games/${id}`, game,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      loadGames();
      handleResetForm();

    } catch (error) {
      console.error(error);
    }
  };
  const onInputChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };
  const handleResetForm = () => {
    setGame({
      name: "",
      description: "",
        priceGame: "",
        status: "",
       releaseDate: "",
        version: "",
        gameType: "",
    });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="sidebar pe-4 pb-3">
      <Navbar bg="secondary" variant="dark" className="flex-column">
<Navbar.Brand href="index.html" className="mx-4 mb-3">
  <h3 className="text-primary">
    <i className="fa fa-user-edit me-2"></i>DarkPan
  </h3>
</Navbar.Brand>
<div className="d-flex align-items-center ms-4 mb-4">
  <div className="position-relative">
    <img
      className="rounded-circle"
      src=""
      alt=""
      style={{ width: '40px', height: '40px' }}
    />
    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
  </div>
  <div className="ms-3">
    <h6 className="mb-0">Jhon Doe</h6>
    <span>Admin</span>
  </div>
</div>
<Nav className="w-100 flex-column">
  <Nav.Link as={Link} to="/" className="active">
    <i className="fa fa-tachometer-alt me-2"></i>Dashboard
  </Nav.Link>
  <NavDropdown
    title={
      <span>
        <i className="fa fa-laptop me-2"></i>Elements
      </span>
    }
    id="nav-dropdown"
  >
    <NavDropdown.Item as={Link} to="/game">Game</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/gametypes ">
      GameTypes
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/element">
      Other Elements
    </NavDropdown.Item>
  </NavDropdown>
  <Nav.Link as={Link} to="/widget">
    <i className="fa fa-th me-2"></i>Widgets
  </Nav.Link>
  <Nav.Link as={Link} to="/form">
    <i className="fa fa-keyboard me-2"></i>Forms
  </Nav.Link>
  <Nav.Link as={Link} to="/table">
    <i className="fa fa-table me-2"></i>Tables
  </Nav.Link>
  <Nav.Link as={Link} to="/chart">
    <i className="fa fa-chart-bar me-2"></i>Charts
  </Nav.Link>
  <NavDropdown
    title={
      <span>
        <i className="far fa-file-alt me-2"></i>Pages
      </span>
    }
    id="nav-dropdown-pages"
  >
    <NavDropdown.Item as={Link} to="/signin">Sign In</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/404">404 Error</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/blank">Blank Page</NavDropdown.Item>
  </NavDropdown>
</Nav>
</Navbar>
      </div>
      {/* Sidebar End */}

      {/* Content Start */}
      <div className="content">
        {/* Navbar Start */}
        <Navbar
          expand="lg"
          bg="secondary"
          variant="dark"
          className="sticky-top px-4 py-0"
        >
          <Navbar.Brand href="index.html" className="d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0">
              <i className="fa fa-user-edit"></i>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="sidebar-toggler flex-shrink-0">
                <i className="fa fa-bars"></i>
              </Nav.Link>
              <Form className="d-none d-md-flex ms-4">
                <Form.Control
                  className="bg-dark border-0"
                  type="search"
                  placeholder="Search"
                />
              </Form>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown
                title={
                  <span>
                    <i className="fa fa-envelope me-lg-2"></i>
                    <span className="d-none d-lg-inline-flex">Message</span>
                  </span>
                }
                id="nav-dropdown-messages"
              >
                <NavDropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" className="text-center">
                  See all message
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span>
                    <i className="fa fa-bell me-lg-2"></i>
                    <span className="d-none d-lg-inline-flex">
                      Notification
                    </span>
                  </span>
                }
                id="nav-dropdown-notifications"
              >
                <NavDropdown.Item href="#">
                  <h6 className="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  <h6 className="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  <h6 className="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" className="text-center">
                  See all notifications
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span>
                    <img
                      className="rounded-circle me-lg-2"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <span className="d-none d-lg-inline-flex">John Doe</span>
                  </span>
                }
                id="nav-dropdown-user"
              >
                <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* Navbar End */}

        {/* Sale & Revenue Start */}
        <Container fluid className="pt-4 px-4">
          <Row className="g-4">
            <Col sm={6} xl={3}>
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-line fa-3x text-primary"></i>
                <div className="ms-3">
                  <p className="mb-2">Today Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </Col>
            <Col sm={6} xl={3}>
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-bar fa-3x text-primary"></i>
                <div className="ms-3">
                  <p className="mb-2">Total Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </Col>
            <Col sm={6} xl={3}>
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-area fa-3x text-primary"></i>
                <div className="ms-3">
                  <p className="mb-2">Today Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </Col>
            <Col sm={6} xl={3}>
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-pie fa-3x text-primary"></i>
                <div className="ms-3">
                  <p className="mb-2">Total Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Sale & Revenue End */}

        {/* Sales Chart Start */}
        <Container fluid className="pt-4 px-4">
          <Row className="bg-secondary text-center rounded p-4">
            <Col md={12}>
              <h6 className="mb-4">Worldwide Sales</h6>
              <canvas id="worldwide-sales"></canvas>
            </Col>
          </Row>
        </Container>

        <Container fluid className="pt-4 px-4">
          <Row className="bg-secondary text-center rounded p-4">
            <Col md={12}>
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h6 class="mb-0">Games</h6>
                <a href="/">Show All</a>
              </div>
              <div
                style={{ display: showForm ? "block" : "none" }}
                className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow  "
              >
                <h2 className="text-center m-4">Thêm người dùng</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                  {/* ID:{user.id} */}

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name Game
                    </label>
                    <input
                      type="text "
                      className="form-control "
                      placeholder="Enter your username"
                      name="name"
                      value={game.name}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                    Description
                    </label>
                    <input
                      type="text "
                      className="form-control "
                      placeholder="Enter your username"
                      name="description"
                      value={game.description}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="priceGame" className="form-label">
                    PriceGame
                    </label>
                    <input
                      type="text "
                      className="form-control "
                      placeholder="Enter your username"
                      name="priceGame"
                      value={game.priceGame}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">
                    Status
                    </label>
                    <input
                      type="text "
                      className="form-control "
                      placeholder="Enter your username"
                      name="status"
                      value={game.status}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                 
                  <div className="mb-3">
                    <label htmlFor="releaseDate" className="form-label">
                    ReleaseDate
                    </label>
                    <input
                      type="text "
                      className="form-control "
                      placeholder="Enter your username"
                      name="releaseDate"
                      value={game.releaseDate}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="version" className="form-label">
                    Version
                    </label>
                    <input
                      type="text "
                      className="form-control "
                      placeholder="Enter your username"
                      name="version"
                      value={game.version}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gameType" className="form-label">
                    GameType
                    </label>
                    <input
                      type="text "
                      className="form-control "
                      placeholder="Enter your username"
                      name="gameType"
                      value={game.gameType }
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
               
              
             
        <button
          type="submit"
          className="btn btn-outline-warning mx-3"  
        >
        Thêm  
        </button>

                  <button
          type="button"
          className="btn btn-outline-danger mx-3"
          onClick={(e) =>editGames(e, game.id)}
        >
          Cập nhật
        </button>

                  <button
                    type="button"
                    className="btn btn-outline-success mx-3"
                    onClick={handleResetForm}
                  >
                    Làm mới
                  </button>

                  <button className="btn btn-outline-info mx-3" to={"/"}>
                    Hủy
                  </button>
                </form>
              </div>
              <Table className="table text-start align-middle table-bordered table-hover mb-0 mt-3">
                <thead>
                <th>STT</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Status</th>
                <th>Release Date</th>
                <th>Version</th>
                <th>Game Type</th>

              <th scope="col">Action</th>
               </thead>
                <tbody>
                {games.map((game, index) => (
  <tr key={game.id}>
    <td style={{ display: "none" }}>{game.id}</td>
    <td>{index + 1}</td>
    <td>{game.name}</td>
    <td>{game.description}</td>
    <td>{game.priceGame}</td>
    <td>{game.status ? "True" : "False"}</td>
    <td>{new Date(game.releaseDate).toLocaleDateString()}</td>
    <td>{game.version}</td>
    <td>{game.gameType ? game.gameType.name : "Unknown"}</td>
                     

                      <td>
                        <button
                          className="btn btn-warning mx-3"
                          onClick={() => {
                            toggleForm();
                            viewsGames(game.id);
                          }}
                        >
                          Chi tiết
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteGames(game.id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        {/* Recent Sales End */}

        {/* Footer Start */}
        <Container fluid className="pt-4 px-4">
          <Row className="bg-secondary rounded-top p-4">
            <Col md={12} className="text-center">
              <p className="mb-0">
                &copy;{" "}
                <a className="text-primary" href="#">
                  Your Site Name
                </a>
                . All Rights Reserved. Designed by{" "}
                <a className="text-primary" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        {/* Footer End */}
      </div>
      {/* Content End */}
    </div>
  );
}

export default Game;
