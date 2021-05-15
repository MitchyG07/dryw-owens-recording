import Head from "next/head"
import React from "react"
import Image from "next/image"
import { Container, Row, Col, Card } from "react-bootstrap"
import styles from "../styles/About.module.css"

const about = () => {
  return (
    <div>
      <div>
        <Container
          fluid="md"
          className="d-flex align-items-center justify-content-center mt-5"
        >
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <Image
                src="/../public/dryw.jpeg"
                alt="Picture of Dryw Owens inside his music studio"
                width={450}
                height={450}
                className={styles.drywPhoto}
              />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Card bg="dark" variant="dark" border="light">
                <Card.Header border="light">
                  <h5>About Dryw</h5>
                </Card.Header>
                <Card.Body>
                  Dryw Owens is an Audio Engineer and Music Producer based in
                  Sacramento, California. From his early days recording with his
                  band, Consider the Thief, Dryw has worked to tirelessly to
                  perfect his craft since learning to record, mix, and master in
                  2007. In 2009, Dryw decided it was time to build his own
                  studio, colloquially known as Little Russia. Eventually,
                  Little Russia moved away from its original warehouse and Dryw
                  Owens Recording was born; located conveniently behind Dryw's
                  home. Dryw has worked with many notable artists including:
                  Dance Gavin Dance, Sianvar, Hail the Sun, Eidola, A Lot Like
                  Birds, Mirours, Amber de La Rosa, and Stablemate.{" "}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <a href="https://www.facebook.com/drywowens" target="_blank">
          <i className="fab fa-facebook fa-3x px-1"></i>
        </a>
        <a href="https://twitter.com/drywowens?lang=en" target="_blank">
          <i className="fab fa-twitter fa-3x px-1"></i>
        </a>
        <a href="https://www.instagram.com/drywowens/?hl=en" target="_blank">
          <i className="fab fa-instagram fa-3x px-1"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dryw-owens-80166639/"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-3x px-1"></i>
        </a>
      </div>
    </div>
  )
}

export default about
