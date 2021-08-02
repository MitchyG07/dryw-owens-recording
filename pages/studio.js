import { Carousel, Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
import styles from "../styles/Studio.module.css"
import PhotoCarousel from "../components/PhotoCarousel"

const studio = () => {
  return (
    <>
      <Container
        fluid="md"
        className="d-flex align-items-center justify-content-center mt-5"
      >
        <PhotoCarousel />
      </Container>
    </>
  )
}

export default studio
