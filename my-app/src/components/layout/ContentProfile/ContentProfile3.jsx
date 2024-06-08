
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import LayoutSupport from '../LayoutSupport';
import './ContentProfile2.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ContentProfilePage3 = () =>
{
    return(
        <div className="order-history">
      <h5>Lịch sử giao dịch</h5>
      <p>Hiển thị thông tin các sản phẩm bạn đã mua tại Steam Shop</p>
      <div className="filter-container">
        <input className='input-text-profile2' type="text" placeholder="Mã đơn hàng" />
        <input className='input-text-profile2' type="text" placeholder="Số tiền từ" />
        <input className='input-text-profile2' type="text" placeholder="Số tiền đến" />
        <input type="date" placeholder="Từ ngày" />
        <input type="date" placeholder="Đến ngày" />
        <button className="filter-button">Lọc</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Mô tả</th>
            <th>Số tiền</th>
            
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018-12-23 23:54:22</td>
            <td>Mô tả</td>
            <td>199.000đ</td>
         
          </tr>
        </tbody>
      </table>
    </div>
    )
}
export default ContentProfilePage3