import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";

import "./footer.css";

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo">
            <img src={logo} alt="logo" />
              <div>
                <h1 className="text-white"><span className="logo_new">C</span>lash</h1>
              </div>
            </div>
            <p className="footer_text mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis totam excepturi doloremque, quos labore quaerat voluptatem unde ipsum. Blanditiis et rem veritatis obcaecati quas perferendis, odio ipsa modi a!
            </p>
            <div className="social_icons">
              <a href="https://www.instagram.com/a_3yash" target='_blank' rel='noreferrer'>
                <i class="ri-instagram-line"></i>
              </a>
              <a href="https://www.linkedin.com/mwlite/in/abdalla-ayash" target='_blank' rel='noreferrer'>
                <i class="ri-linkedin-fill"></i>
              </a>
              <a href="https://www.facebook.com/abdalla.3yash" target='_blank' rel='noreferrer'>
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="https://wa.me/+201091032414" target='_blank' rel='noreferrer'>
                <i class="ri-whatsapp-line"></i>
              </a>
            </div>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Main Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Armchair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/about">About</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/products">Products</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shops">Shops</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>
              <ListGroup className="footer_contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Cairo, Egypt</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Nasr city, Egypt</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  <p>+01091032414</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>abdo3yash@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">Copyright {year} developed by
              Abdalla Ayash. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer >
  )
}

export default Footer