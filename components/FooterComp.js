import React from "react"

const FooterComp = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-2 mb-4">
      <a href="https://www.facebook.com/drywowens" target="_blank">
        <i
          className="fab fa-facebook fa-3x px-1"
          style={{ color: "#FF9EF0" }}
        ></i>
      </a>
      <a href="https://twitter.com/drywowens?lang=en" target="_blank">
        <i
          className="fab fa-twitter fa-3x px-1"
          style={{ color: "#FF9EF0" }}
        ></i>
      </a>
      <a href="https://www.instagram.com/drywowens/?hl=en" target="_blank">
        <i
          className="fab fa-instagram fa-3x px-1"
          style={{ color: "#FF9EF0" }}
        ></i>
      </a>
      <a
        href="https://www.linkedin.com/in/dryw-owens-80166639/"
        target="_blank"
      >
        <i
          className="fab fa-linkedin fa-3x px-1"
          style={{ color: "#FF9EF0" }}
        ></i>
      </a>
    </div>
  )
}

export default FooterComp
