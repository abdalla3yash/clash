import React, { useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/about-img.png";

import "../styles/about.css";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Sobre">
      <CommonSection title="Sobre" />
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle"></p>
                <h2>Who are we ?</h2>
                <p>The Clash is technology. If you linked one thing to another,
                  probably knows us. By definition, the Clash is
                  a retailer specializing in technology and information technology. But in the
                  actually, it's much more than that. Founded early in development
                  of the information technology market in the country, the Clash is today one of the
                  largest specialized retailers in Egypt. It's easy to see why.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/products">Buy now</Link>
                </motion.button>

                <motion.button whileTap={{ scale: 1.2 }} className="wpp_btn">
                  <a href="https://web.whatsapp.com/" target='_blank' rel='noreferrer'>
                  Talk to us <i class="ri-whatsapp-line"></i>
                  </a>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={aboutImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About