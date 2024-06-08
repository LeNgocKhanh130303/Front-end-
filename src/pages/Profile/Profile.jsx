import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'
import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderProfile from '../../components/layout/Header/HeaderProfile';
import ContentPage9 from '../../components/layout/ContentSupport/ContentPage9';
import Slidebar from '../../components/layout/Slidebar';
import Header from '../../components/layout/Header';
import LayoutSupport from '../../components/layout/LayoutSupport';
import SidebarProfile from '../../components/layout/ContentProfile/SidebarProfile';
import ContentProfile from '../../components/layout/ContentProfile/ContentProfile';
import ContentProfilePage2 from '../../components/layout/ContentProfile/ContentPage2';
import MainContent from '../Support/Support';
const MainContentProfile = () => {
    return (





        <div className='wrapper'>


            <React.Fragment>
                

                <Row>
                    <Col xxl={3} xl={3} lg={3} md={0} sm={0} >
                        <SidebarProfile />

                    </Col>

                    <Col xxl={9} xl={9} lg={9} md={12} sm={12} >

                        <Routes>
                            <Route path="" element={<ContentProfile userId={2}/>}></Route>
                            <Route path="user/profile/${id}"  element={<ContentProfile userId={2}/>}></Route>
                            <Route path="user/orders" element={<ContentProfilePage2/>} />
                        

                        </Routes>
                    </Col>
                </Row>
            </React.Fragment>
        </div>


    )
}
export default MainContentProfile;