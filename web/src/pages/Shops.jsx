import React, { useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import shopOne from "../assets/images/shop-1.png";
import shopTwo from "../assets/images/shop-2.png";

import "../styles/shops.css";

const Shops = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Shops">
      <CommonSection title="Discover our Stores" />
      <section className="hero_section">
        <Container>
          <Row className="text-center">
            <Col lg="6" md="12">
              <div className="hero_content">
                <h2><span>Store 01 -</span>Clash</h2>
                <p><i class="ri-map-pin-line"></i> Masr Elgdeda, Cairo, Egypt</p>
                <p><i class="ri-phone-line"></i> Telephone: 01091032414</p>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="hero_img">
                <img src={shopOne} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="6" md="12">
              <div className="hero_content">
                <h2><span>Store 02 - </span>Clash</h2>
                <p><i class="ri-map-pin-line"></i> Nasr City, Cairo, Egypt</p>
                <p><i class="ri-phone-line"></i> Telephone: 01091032414</p>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="hero_img">
                <img src={shopTwo} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet >
  )
}

export default Shops;