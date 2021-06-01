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
              width={600}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/../public/AmberLiveRoom2.jpg"
              alt="Picture of Amber De La Rosa in the Live Room"
              width={550}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/../public/DrywRedShoes.jpg"
              alt="Picture of Dryw from the back in studio"
              width={550}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/../public/DrywWithBassist.jpg"
              alt="Picture of Dryw from the back in studio with Bassist"
              width={550}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/../public/DrywWithGuitarPlayer.jpg"
              alt="Picture of Dryw from the back in studio with Guitarist"
              width={550}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/../public/LiveRoomDoor.jpg"
              alt="Picture of Live Room Door"
              width={550}
              height={500}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default studio
