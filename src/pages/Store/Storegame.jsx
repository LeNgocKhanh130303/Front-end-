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
import { faFire } from "@fortawesome/free-solid-svg-icons";
import './Storegame.css'
import { faTrophy} from "@fortawesome/free-solid-svg-icons";
import { faTags} from "@fortawesome/free-solid-svg-icons";


import "bootstrap/dist/css/bootstrap.min.css";
// import Badge from "react-bootstrap/Badge";
// import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import CardImg from "react-bootstrap/esm/CardImg";
import CardBody from "react-bootstrap/esm/CardBody";

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
function StoreGame() {
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center align-items-center h-100 custom-col ">
        <Col className="  carouse-height  carousel-container custom-carousel text-center  " sm={12}>
          <Carousel className="Carouselimg " interval={1000}>
           
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://wegame.gtimg.com/g.2001918-r.ea725/info/b06fbfc894eab2fac226090c07f65089.jpg/1000"
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100  carousel-img"
                src="https://wegame.gtimg.com/g.2002040-r.08f8d/info/dabe8e1a1dae63719127ed26151388bc.jpg/1000"
                alt="Image Two"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100 carousel-img"
                src="https://wegame.gtimg.com/g.2002122-r.696e0/info/87577d4556b188077f585d838ebb6164.png/1000"
                alt="Image Three"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100 carousel-img"
                src="https://wegame.gtimg.com/g.2000340-r.83e94/info/419ced0ef3377e0d6932466e364ed21c.jpg/1000"
                alt="Image Four"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  w-100  carousel-img"
                src="https://wegame.gtimg.com/g.2002137-r.72c5f/info/bd393ac7bd1f4063e9d88f3c851bda96.jpg/1000"
                alt="Image Five"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row sm={12}>
        <Nav
          className="custom-background custom-bg justify-content-center mb-3 mt-4"
          activeKey="/home"
        >
          <Col sm={3}>
            <Nav.Item> 
              <Nav.Link className="font" href="!#spnb">
                <FontAwesomeIcon icon={faStar} className="me-2" />
                Sản phẩm nổi bật
              </Nav.Link>
            </Nav.Item>
          </Col>

          <Col sm={3}>
            <Nav.Item>
              <Nav.Link className="font" eventKey="link-1"  href="!#tknb">
                <FontAwesomeIcon icon={faFire} className="me-2" />
                Từ khóa nổi bật
              </Nav.Link>
            </Nav.Item>


          </Col>

          <Col sm={3}>
            <Nav.Item>
              <Nav.Link className="font" eventKey="link-2" href="!#spm">
                <FontAwesomeIcon icon={faTrophy} className="me-2" />
                Sản phẩm mới
              </Nav.Link>
            </Nav.Item>
          </Col>

          <Col sm={3}>
            <Nav.Item>
              <Nav.Link className="font" eventKey="link-3" href="!#spgg">
                <FontAwesomeIcon icon={faTags} className="me-2" />
                Sản phẩm giảm giá
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Nav>
      </Row>

      <Row className=" justify-content-center align-items-center h-100 mt-4 ">
      <Row className="align-items-center ">
      <Col sm={6} className="text-start">
        <h3  id= "spnb"className="hover-trigger text-dark">Sản phẩm nổi bật</h3>
        <span className="hover-content d-block text-dark ">Danh sách những sản phẩm theo xu hướng</span>
      </Col>
      
      </Row>

        <section className=" custom-bg mt-3 ">
          <Row className="justify-content-center align-items-center h-100 ">
            <Col xs={12} md={6} lg={3} className="mb-4 mt-3">
              <Card >
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
                    <p className="text-muted ">
                      <p className="fw-bold text-dark">160.000đ</p>
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
                
                />
                <CardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <h6>In Silences</h6>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      <p className="fw-bold text-dark">160.000đ</p>
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
                      <h6>Batman: Arkham Asylum </h6>
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
          
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
             
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
              
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
             
            </Col>
            <Col sm={12}>
          <Button variant="link" className="custom-link-button">
            Xem thêm
          </Button>
        </Col>
          </Row>
        </section>

        
        <hr></hr>

        <section>
        <Row sm={12} className="justify-content-center align-items-center mt-4">
      <Row className="align-items-center">
        <Col sm={12} className="text-start" >
          <h3 id="gcph" className="text-start text-dark">Từ khóa nổi bật</h3>
          <span className="text-end text-dark">Game hay chơi đều tay</span>
        </Col>
      </Row>
      <Row sm={12} className="mt-5">
        <Col  className="d-flex justify-content-center">
          <Button size="lg" variant="primary" className="mx-2">
            20.000 đ
          </Button>
          <Button size="lg" variant="secondary" className="mx-2">
            50.000 đ
          </Button>
          <Button size="lg" variant="success" className="mx-2">
            100.000 đ
          </Button>
     


        
          <Button size="lg" variant="warning" className="mx-2">
            200.000 đ
          </Button>
          <Button size="lg" variant="danger" className="mx-2">
            500.000 đ
          </Button>
          <Button size="lg" variant="info" className="mx-2">
            1000.000 đ
          </Button>
        </Col>
      </Row>


      
    </Row>
        </section>

        <section className=" custom-bg mt-5">
      
          

          <Row sm={12}>
            <Col
              sm={2}
              className=" Col-sm-2 panel "
              style={{
                backgroundImage: `url('https://wegame.gtimg.com/g.2001938-r.899f5/info/043a650fff10945b6ca51da4ed59ba93.jpg')`,
              }}
            >
              <h3>Call of Duty®: Black Ops</h3>
            </Col>
            <Col
              sm={2}
              className=" Col-sm-2 panel "
              style={{
                backgroundImage: `url('https://wegame.gtimg.com/g.55555-r.c4663/store/upload/game-list-top/agent/agent-01-%E6%B2%99%E7%9F%B3%E9%95%87%E6%97%B6%E5%85%89.png')`,
              }}
            >
              <h3>Resident Evil Village</h3>
            </Col>
            <Col
              sm={2}
              className=" Col-sm-2 panel "
              style={{
                backgroundImage: `url('https://wegame.gtimg.com/g.55555-r.c4663/store/upload/game-list-top/agent/agent-05-%E7%94%9F%E6%AD%BB%E7%8B%99%E5%87%BB2.png')`,
              }}
            >
              <h3>Metro 2033 Redux</h3>
            </Col>
            <Col
              sm={2}
              className=" Col-sm-2 panel "
              style={{
                backgroundImage: `url('https://wegame.gtimg.com/g.55555-r.c4663/store/upload/game-list-top/agent/agent-07-%E5%85%A8%E5%A2%83%E5%B0%81%E9%94%812.png')`,
              }}
            >
              <h3>Tom Clancy’s The Division™</h3>
            </Col>
            <Col
              sm={2}
              className=" Col-sm-2 panel "
              style={{
                backgroundImage: `url('https://wegame.gtimg.com/g.2001715-r.9a324/agent-06-online.png')`,
              }}
            >
              <h3>Mortal Kombat X</h3>
            </Col>
          </Row>
          
        </section>
        <section>






        <Row sm={12} className="justify-content-center align-items-center mt-4">
      <Row className="align-items-center">
        <Col sm={12} className="text-start">
          <h3 id="gcph" className="text-start text-dark">Giá cả phù hợp</h3>
          <span className="text-end text-dark">Game hay chơi đều tay</span>
        </Col>
      </Row>
      <Row sm={12} className="mt-5">
        <Col  className="d-flex justify-content-center">
          <Button size="lg" variant="primary" className="mx-2">
            20.000 đ
          </Button>
          <Button size="lg" variant="secondary" className="mx-2">
            50.000 đ
          </Button>
          <Button size="lg" variant="success" className="mx-2">
            100.000 đ
          </Button>
     


        
          <Button size="lg" variant="warning" className="mx-2">
            200.000 đ
          </Button>
          <Button size="lg" variant="danger" className="mx-2">
            500.000 đ
          </Button>
          <Button size="lg" variant="info" className="mx-2">
            1000.000 đ
          </Button>
        </Col>
      </Row>


      
    </Row>
        </section>



        
        <section className=" custom-bg  mt-5">
        <Row className="align-items-center ">
      <Col sm={6} className="text-start">
        <h3 id="spm" className="hover-trigger text-dark">Sản phẩm mới</h3>
        <span className="hover-content d-block text-dark">Danh sách những sản phẩm theo xu hướng</span>
      </Col>
              
      </Row>
          <Row className=" custom-bg ustify-content-center align-items-center h-100">
            <Col xs={12} md={6} lg={3} className="mb-4">
              <Card>
                <CardImg
                  className="product"
                  src="https://steamcdn-a.akamaihd.net/steam/apps/254700/header.jpg"
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
                  src="https://steamcdn-a.akamaihd.net/steam/apps/1361000/header.jpg"
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
                  src="https://steamcdn-a.akamaihd.net/steam/apps/1430640/header.jpg"
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
                  src="https://steamcdn-a.akamaihd.net/steam/apps/384190/header.jpg"
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
                  src="https://steamcdn-a.akamaihd.net/steam/apps/20900/header.jpg"
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
                  src="https://steamcdn-a.akamaihd.net/steam/apps/35140/header.jpg"
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
            <Col sm={12}>
          <Button variant="link" className="custom-link-button">
            Xem thêm
          </Button>
        </Col>
          </Row>
        </section>






        <Row className="align-items-center mt-3 ">
      <Col sm={12} className="text-start">
        <h3  id = "spgg" className="hover-trigger text-dark">Giảm giá đặc biệt</h3>
        <span className="hover-content d-block text-dark">Sale lễ hội mùa hè</span>
      </Col>
      
      </Row>

        <section  className=" custom-bg ">
        
          <Row className="justify-content-center align-items-center h-100 mt-4">
          <Col xs={12} md={6} lg={3} className="mb-4">
          <Card>
  <div className="product-container">
    <CardImg
      className="product"
      src="https://wegame.gtimg.com/g.2002166-r.92ffb/info/8af17088afbd3c036c83877284091598.jpg/1000"
      position="top"
    />
    <span className="badge bg-danger badge-discount">Giảm 10%</span>
  </div>
  <CardBody>
    <div className="d-flex justify-content-between">
      <p className="small">
        <h6>Resident Evil 4 / Biohazard 4</h6>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <p className="text-muted mb-0">
        {/* Giá gốc */}
        <span className="fw-bold price-original text-dark"><del>160.000đ</del></span>
        {/* Giá sau khi giảm */}
        <span className="fw-bold price-discount">140.000đ</span>
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
                 
                />
                 <span className="badge bg-danger badge-discount">Giảm 10%</span>
                <CardBody>
                <div className="d-flex justify-content-between">
      <p className="small">
        <h6>Resident Evil 4 / Biohazard 4</h6>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <p className="text-muted mb-0">
        {/* Giá gốc */}
        <span className="fw-bold price-origina text-dark"><del>160.000đ</del></span>
        {/* Giá sau khi giảm */}
        <span className="fw-bold price-discount">140.000đ</span>
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
                  
                
                />
                 <span className="badge bg-danger badge-discount">Giảm 10%</span>
                <CardBody>
                <div className="d-flex justify-content-between">
      <p className="small">
        <h6>Resident Evil 4 / Biohazard 4</h6>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <p className="text-muted mb-0">
        {/* Giá gốc */}
        <span className="fw-bold price-original text-dark"><del>160.000đ</del></span>
        {/* Giá sau khi giảm */}
        <span className="fw-bold price-discount">140.000đ</span>
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
                  
                />
                 <span className="badge bg-danger badge-discount">Giảm 10%</span>
                <CardBody>
                <div className="d-flex justify-content-between">
      <p className="small">
        <h6>Resident Evil 4 / Biohazard 4</h6>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <p className="text-muted mb-0">
        {/* Giá gốc */}
        <span className="fw-bold price-original text-dark"><del>160.000đ</del></span>
        {/* Giá sau khi giảm */}
        <span className="fw-bold price-discount">140.000đ</span>
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
                 
                />
                <CardBody>
                <span className="badge bg-danger badge-discount">Giảm 10%</span>
                <div className="d-flex justify-content-between">
      <p className="small">
        <h6>Resident Evil 4 / Biohazard 4</h6>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <p className="text-muted mb-0">
        {/* Giá gốc */}
        <span className="fw-bold price-original text-dark"><del>160.000đ</del></span>
        {/* Giá sau khi giảm */}
        <span className="fw-bold price-discount">140.000đ</span>
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

                <span className="badge bg-danger badge-discount">Giảm 10%</span>
                <div className="d-flex justify-content-between">
      <p className="small">
        <h6>Resident Evil 4 / Biohazard 4</h6>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <p className="text-muted mb-0">
        {/* Giá gốc */}
        <span className="fw-bold price-original text-dark"><del>160.000đ</del></span>
        {/* Giá sau khi giảm */}
        <span className="fw-bold price-discount">140.000đ</span>
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
                <span className="badge bg-danger badge-discount">Giảm 10%</span>
                <div className="d-flex justify-content-between">
      <p className="small">
        <h6>Resident Evil 4 / Biohazard 4</h6>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <p className="text-muted mb-0">
        {/* Giá gốc */}
        <span className="fw-bold price-original text-dark"><del>160.000đ</del></span>
        {/* Giá sau khi giảm */}
        <span className="fw-bold price-discount">140.000đ</span>
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
                <span className="badge bg-danger badge-discount">Giảm 10%</span>
                <div className="d-flex justify-content-between">
      <p className="small">
        <h6>Resident Evil 4 / Biohazard 4</h6>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <p className="text-muted mb-0">
        {/* Giá gốc */}
        <span className="fw-bold price-original text-dark"><del>160.000đ</del></span>
        {/* Giá sau khi giảm */}
        <span className="fw-bold price-discount">140.000đ</span>
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

      </Row>
    </Container>
  );
}
export default StoreGame;
