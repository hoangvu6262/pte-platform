import React from 'react';

import {Row, Col} from 'antd'

import Logo from '../Logo'

import { Link } from 'react-router-dom'
import './styles.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Row wrap={true}>
          <Col md={8} xs={24} className="footer-col">
            <Logo color="white"/>
          </Col>

          <Col md={8} xs={24} className="footer-col">
            <h3>PTE Practise Guide</h3>
            <ul>
              <li>
                <Link target="_blank" to="/intro/s1">Speaking Guide</Link>
              </li>
              <li>
                <Link target="_blank" to="/intro/r1">Reading Guide</Link>
              </li>
              <li>
                <Link target="_blank" to="/intro/w1">Writing Guide</Link>
              </li>
              <li>
                <Link target="_blank" to="/intro/l1">Listening Guide</Link>
              </li>
            </ul>
          </Col>

          <Col md={8} xs={24} className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: support@boostpte.com</li>
              <li>Phone: +123456789</li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
