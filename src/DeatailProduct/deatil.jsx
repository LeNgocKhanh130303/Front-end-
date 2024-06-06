import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Ripples from "react-ripples";
// import CardImg from "react-bootstrap/esm/CardImg";
// import CardBody from "react-bootstrap/esm/CardBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";



import "bootstrap/dist/css/bootstrap.min.css";
// import Badge from "react-bootstrap/Badge";
// import Stack from "react-bootstrap/Stack";

import CardImg from "react-bootstrap/esm/CardImg";
import CardBody from "react-bootstrap/esm/CardBody";
import { Form } from "react-bootstrap";

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
function Productdetail() {
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center align-items-center h-100">
        <Row className=" justify-content-center align-items-center h-100 mt-4 ">
      
          <Row className="align-items-center ">
          
            <Col sm={6} className="text-start">
              <h3 id="spnb" className="hover-trigger text-white">
                Game trên steam
              </h3>
            
              
            </Col>
          </Row>  
        
          <Row sm={12}>

   <Col>
        <Form.Select aria-label="Select 1" >
          <option>Danh mục</option>
          <option value="1">Game hay</option>
          <option value="2">Game kinh dị</option>
          <option value="3">Game hành động</option>
        </Form.Select>
      </Col>
      <Col>
        <Form.Select aria-label="Select 2">
          <option>Thể loại</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </Form.Select>
      </Col>
      <Col>
      <Form.Control
        type="text"
        placeholder="Mức giá đến"
        
        
        readOnly={false}
      />
      </Col>
      <Col>      
      <Form.Control
        type="text"
        placeholder="Mức giá từ"
      
        readOnly={false}

      />
      </Col>
      
      
      <Col>
        <Form.Select aria-label="Select 4">
          <option>Sắp xếp</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </Form.Select>
      </Col>
      <Col>
  <Button variant="danger">

  <FontAwesomeIcon icon={faFilter} style={{color:"#FFD43B"}} className="me-2" />
Lọc
  </Button>
</Col>
          </Row>
   

    
          

          <section className=" custom-bg mt-5">
            <Col sm={12} className="text-end">
              <Button className="buttonhot" variant="primary">
                Khám phá
              </Button>
            </Col>
            <Row className="justify-content-center align-items-center h-100 mt-4">
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://wegame.gtimg.com/g.2002166-r.92ffb/info/8af17088afbd3c036c83877284091598.jpg/1000"
                    position="top"
                  />
                  <CardBody>
                    <di className="d-flex justify-content-between">
                      <p className="small">
                        <h6>resident evil 4 / biohazard 4</h6>
                      </p>
                    </di>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">160.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://wegame.gtimg.com/g.2001128-r.5990c/info/a2cdb9609e5ce4c4283f57d43d86fe89.jpg/1000"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>In Silences</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">160.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://wegame.gtimg.com/g.2001715-r.9a324/info/1d8ac7c7cdcf660f503405796c7d0d83.jpg/1000"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Into The Haze</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">160.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://wegame.gtimg.com/g.2002137-r.72c5f/info/bd393ac7bd1f4063e9d88f3c851bda96.jpg/1000"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>ABZU</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">188.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://wegame.gtimg.com/g.2002127-r.67644/info/09c47ee0d1199035478b3acba81a4c97.jpg/1000"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>The Witcher: Enhanced </h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">120.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://wegame.gtimg.com/g.2000797-r.57462/info/6276f8400b2fda1e23c27cff76413af7.jpg/1000"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h5>Batman: Arkham Asylum </h5>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">37.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://steamcdn-a.akamaihd.net/steam/apps/1237970/header.jpg"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Titanfall® 2 : Ultimate Edition </h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">700.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card>
                  <CardImg
                    className="product"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1615337540"
                    position="top"
                    alt="Laptop"
                  />
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <h6>Forza Horizon 4 Ultimate Edition</h6>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        <p className="fw-bold">790.000đ</p>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col sm={12}>
                <Button variant="link" className="custom-link-button">
                  Xem thêm
                </Button>
              </Col>
            </Row>
          </section>

          <hr></hr>
        </Row>
      </Row>
    </Container>
  );
}
export default Productdetail;
