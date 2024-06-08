import './FooterProfile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const FooterProfile = () => {
    return (
        <div className='Footer'>
            <div className='topFooter'>
                <Container>
                    <img id='imgthanhtoan1ft' src='https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg' alt='thanhtoanMomo' />
                    <img id='imgthanhtoan1ft' src='https://cdn.divineshop.vn/static/72a3a36fc7c66085b3f442940ba45fde.svg' alt='thanhtoanVnpay' />
                    <img id='imgthanhtoan1ft' src='https://cdn.divineshop.vn/static/464c7c79044dea88e86adf0e1b9c064c.svg' alt='thanhtoanVisa' />
                    <img id='imgthanhtoan1ft' src='https://cdn.divineshop.vn/static/ddb866eb1214c914ea62417879046b99.svg' alt='thanhtoankhac' />
                    <span className='ttkhac'> và nhiều hình thức thanh toán khác</span>
                </Container>
            </div>
            <div className='mainFooter'>
                <Container>
                    <img id='imgfooterfb' src='https://cdn.divineshop.vn/static/4ba68c7a47305b454732e1a9e9beb8a1.svg' alt='facebookFooter' />
                    <img id='imgfooterfb' src='https://cdn.divineshop.vn/static/20334129395885adefc2e5217043f670.svg' alt='YoutubeFooter' />
                    <img id='imgfooterfb' src='https://cdn.divineshop.vn/static/4ae438165f9d5ea0fc6ff3da6051f938.svg' alt='insFooter' />
                    <hr></hr>
                    <Row>
                        <Col className='footerCot1' xxl={3} xl={3} lg={3} md={3} sm={3} xs={3} >
                            <strong>Giới thiệu</strong>
                      <br></br>
                      <br></br>
                      <a href='/support/support1' target='_blank'>Game bản quyền là gì</a>
                        <br></br>
                        <a href='http://localhost:3000/aboutus' alt='sanphambanvuaxem'>Giới thiệu về chúng tôi</a>
                        <br></br>
                        <a href='/support/support5' alt='sanphambanvuaxem'>Điều khoản dịch vụ</a>
                        <br></br>
                        <a href='/support/support6' alt='sanphambanvuaxem'>Chính sách bảo mật</a>
                        </Col>
                        <Col className='footerCot2' xxl={3} xl={3} lg={3} md={3} sm={3} xs={3} >
                        <strong>Tài khoản</strong>
                      <br></br>
                      <br></br>
                        <a href='' alt='sanphambanvuaxem'>Giỏ hàng</a>
                        <br></br>
                        <a href='' alt='sanphambanvuaxem'>Sản phẩm đã mua</a>
                        <br></br>
                        <a href='/support/support10' alt='sanphambanvuaxem'>Chế độ bảo hành</a>
                  
                        </Col>
                        <Col className='footerCot3' xxl={3} xl={3} lg={3} md={3} sm={3} xs={3} >
                        <strong>Liên hệ</strong>
                      <br></br>
                      <br></br>
                        <a href='' alt='sanphambanvuaxem'>Hotline tự động: <strong>0706757167</strong></a>
                        <br></br>
                        <a href='' alt='sanphambanvuaxem'>Liên hệ hỗ trợ</a>
                        <br></br>
                        <a href='' alt='sanphambanvuaxem'>Chat với CSKH</a>   
                        </Col>
                        <Col className='footerCot4' xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
                                <img src='https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=18522dc6-fdd6-4b49-ab40-395a79849050' alt='hinhanhfooter'/>
                        </Col>
                    </Row>


                </Container>
            </div>
        </div>
    )
}

export default FooterProfile
