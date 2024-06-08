import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './aboutus.css'
import { faCircle } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div>
      <section id="about" className="block about-block">
      <Container fluid>
  <Row className="justify-content-center align-items-center h-100">
    <Col sm={12} md={6} >
      <img
        className="logo  "
        src="https://cdn.akamai.steamstatic.com/store/about/icon-controllers.svg"
        alt="Steam Logo"
      />
      <p>
        Steam is the ultimate destination for playing, discussing, and
        creating games.
      </p>
      <Row>
        <Col
          sm={6}
          className="d-flex align-items-center justify-content-center online"
        >
          <FontAwesomeIcon icon={faCircle} />
          <span className="ml-2 text-dark">Online</span>
         
        </Col>
        <Col
          sm={6}
          className="d-flex align-items-center justify-content-center offline"
        >
                  <FontAwesomeIcon icon={faCircle} />

          <span className="ml-2 text-dark">Offline</span>
          
                                          
        </Col>
        <p></p>
      </Row>
    </Col>
    <Col sm={12} md={6}>
      <img
        className="img-fluid mt-5"
        src="https://wegame.gtimg.com/g.2001918-r.ea725/info/6bbed403724dc0d725aa5beb33374688.jpg/1000"
        alt="Responsive Image"
      />
    </Col>
  </Row>
</Container>

      </section>
      <section id="services" className="block about-block">
        <Container fluid>
          <Container>
            <div className="title-holder text-dark">
              <h2>Access Games Instantly</h2>
              <h6>
                With nearly 30,000 games from AAA to indie and everything
                in-between. <br></br>Enjoy exclusive deals, automatic game updates, and
                other great perks.
              </h6>
              <h6 className="browse">Browse the Store -&gt;</h6>
            </div>
            <Row className=" mt-5">
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/810660/header.jpg"
                  alt="Game Image 1"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/941973/header.jpg"
                  alt="Game Image 2"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/387990/header.jpg"
                  alt="Game Image 3"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/251570/header.jpg"
                  alt="Game Image 4"
                  className="img-fluid"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/690640/header.jpg"
                  alt="Game Image 5"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/1328660/header.jpg"
                  alt="Game Image 6"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/1222700/header.jpg"
                  alt="Game Image 7"
                  className="img-fluid"
                />
              </Col>
              <Col sm={3} className="d-flex justify-content-center">
                <img
                  src="https://steamcdn-a.akamaihd.net/steam/apps/1259420/header.jpg"
                  alt="Game Image 8"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section id="work" className="block about-block mt-5">
        <div className="learnAbout">
          <Container fluid>
            <div className="title-holder"></div>
            <Row className="learnabout">
              <Col sm={6}>
                <div className="first">
                  <br />
                  <br />
                  <h2 className="Community  text-dark">
                    Join the
                   
                    Community
                  </h2>
                  <h4 className="comment text-dark">
                    Meet new people, join groups, form <br />
                    clans, chat in-game and more! With <br />
                    over 100 million potential friends (or <br />
                    enemies), the fun never stops.
                  </h4>
                  <h6 className="browse">Visit the Community -&gt;</h6>
                </div>
              </Col>
              <Col sm={6}>
                <div className="image-group">
                  <img
                    className="communityImg2"
                    src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community_pt3.png"
                    alt="Community Image 2"
                  />
                </div>
              </Col>

              <Col sm={6}>
                <img
                  className="hardwareImg1"
                  src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt1.png?v=2"
                  alt="Hardware Image 1"
                />
              </Col>
              <Col sm={6}>
                <div className="Experience">
                  <h2 className="Community  text-dark">
                    Experience
                    
                    Steam Hardware
                  </h2>
                  <h4 className="comment  text-dark">
                    We created the Steam Deck and the <br />
                    Valve Index headset to make gaming on <br />
                    the PC even better.
                  </h4>
                  <h6 className="browse">Experience Steam Hardware -&gt;</h6>
                </div>
              </Col>

              <Col sm={6}>
                <div className="Release">
                  <br />
                  <br />
                  <h2 className="Community  text-dark align-items-between">
                  Release your 
                    
                    Game
                  </h2>
                  <h4 className="comment  text-dark">
                  Steamworks is the set of tools and <br></br>services that help game developers and <br></br>publishers get the most out of<br></br> distributing games on Steam.
                  </h4>
                  <h6 className="browse">Learn about Steamworks -&gt;</h6>
                </div>
              </Col>
              <Col sm={6}>
                <div className="image-group ">
                  <img
                    className="communityImg2"
                    src="https://cdn.akamai.steamstatic.com/store/about/cta_hero_steamworks_pt1.png"
                    alt="Community Image 2"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id="features" className="block features-block">
  <Container fluid>
    <div className="title-holder  text-dark">
      <Container>
        <h2>Features</h2>
        <div className="subtitle">
          We are constantly working to bring new updates and features to Steam, such as
        </div>
      </Container>
    </div>
    <Row>
      <Row xl={12} className="mt-5">
        <Col sm={4}>
          <div className="feature  text-dark">
            <center>
              <img className="icon" src="https://cdn.akamai.steamstatic.com/store/about/icon-steamchat.svg
"></img>
            </center>
            <h3 className="iconh3 ">Steam Chat </h3>
            <p className="iconp">
              Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature text-dark">
            <center>
              <img style={{width:"500px"}} className="icon" src="https://cdn.akamai.steamstatic.com/store/about/icon-gamehubs.svg"></img>
            </center>
            <h3 className="iconh3 ">Steam Discussions</h3>
            <p className="iconp text-dark">
              Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature text-dark">
            <center>
              <img className="icon" src="https://cdn.akamai.steamstatic.com/store/about/icon-broadcasts.svg
"></img>
            </center>
            <h3 className="iconh3  ">Steam Broadcast</h3>
            <p className="iconp  text-dark">
              Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.
            </p>
          </div>
        </Col>
      </Row>
      <Row xl={12}>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img className="icon" src="https://cdn.akamai.steamstatic.com/store/about/icon-steamworkshop.svg"></img>
            </center>
            <h3 className="iconh3  text-dark">Steam Workshop</h3>
            <p className="iconp  text-dark">
              Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img className="icon" src="	https://cdn.akamai.steamstatic.com/store/about/icon-steammobile.svg
"></img>
            </center>
            <h3 className="iconh3  text-dark">Available on Mobile</h3>
            <p className="iconp  text-dark">
              Access Steam anywhere from your iOS or Android device with the Steam mobile app.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img className="icon" src="https://cdn.akamai.steamstatic.com/store/about/icon-earlyaccess.svg"></img>
            </center>
            <h3 className="iconh3  text-dark">Early Access to Games</h3>
            <p className="iconp  text-dark">
              Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process.
            </p>
          </div>
        </Col>
      </Row>
       <Row xl={12}>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img style={{width:"500px"}} className="icon" src="https://cdn.akamai.steamstatic.com/store/about/icon-languages.svg"></img>
            </center>
            <h3 className="iconh3 text-dark">Multilingual</h3>
            <p className="iconp text-dark">
            Creating a global community is important to us, that's why our client supports 28 languages and counting.            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img style={{width:"500px"}} className="icon" src="https://cdn.akamai.steamstatic.com/store/about/icon-payment.svg"></img>
            </center>
            <h3 className="iconh3 text-dark">Purchases Made Easy</h3>
            <p className="iconp text-dark">
            Our storefront supports 100+ payment methods across over 35 currencies, giving you the flexibility to pay how you want.            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="feature">
            <center>
              <img style={{width:"500px"}} className="icon" src="https://cdn.akamai.steamstatic.com/store/about/icon-controllers.svg"></img>
            </center>
            <h3 className="iconh3 text-dark">Purchases Made Easy</h3>
            <p className="iconp text-dark">
            Our storefront supports 100+ payment methods across over 35 currencies, giving you the flexibility to pay how you want.            </p>
          </div>
        </Col>
      </Row>
    </Row>
  </Container>
</section>

    </div>
  );
}

export default About;
