import { Carousel, Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

const studio = () => {
  return (
    <>
      <Container
        fluid="md"
        className="d-flex align-items-center justify-content-center mt-5"
      >
        <h1>Studio Tour</h1>
      </Container>
      <Container
        fluid="md"
        className="d-flex align-items-center justify-content-center mt-5"
      >
        <Carousel>
          <Carousel.Item>
            <Image
              src="/../public/MainStudio.jpg"
              alt="Picture of Dryw's studio"
              width={500}
              height={400}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default studio
