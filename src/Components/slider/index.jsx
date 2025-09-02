import React, { useState, useEffect } from "react"
import "./style.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"

const slides = [
  {
    image: image1,
    title: "Pulleys",
    description:
      "Maximise production and lower total cost of ownership with innovative pulleys.",
    points: [
      "✔ Reduces downtime",
      "✔ Lowers cost of ownership",
      "✔ Minimises risks of injury",
    ],
    button: "View Pulleys",
  },
  {
    image: image2,
    title: "Rollers",
    description:
      "Drive site performance and reduce downtime with world-leading rollers",
    points: [
      "✔ Optimises seal efficiency",
      "✔ Increases bearing life",
      "✔ Reduces power consumption",
    ],
    button: "View Rollers",
  },
  {
    image: image3,
    title: "Idlers",
    description:
      "Maintain optimal conveyor performance with long-lasting idlers",
    points: [
      "✔ Promotes long belt life",
      "✔ Allows for flexible conveyor design",
      "✔ Stands up to heavy duty demands",
    ],
    button: "View Idlers",
  },
  {
    image: image4,
    title: "Accessories",
    description:
      "Ensure efficient, reliable and safe operation of your conveyor with high-quality accessories.",

    button: "View Accessories",
  },
]

function Slider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slider-container">
      <div className="slider-content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].description}</p>

        {slides[current].points && (
          <ul>
            {slides[current].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        <button className="view-btn">{slides[current].button}</button>
      </div>

      <div className="slider">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`slide-${index}`}
            className={index === current ? "active" : ""}
          />
        ))}

        <button
          className="arrow-btn left"
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
        >
          ❮
        </button>
        <button
          className="arrow-btn right"
          onClick={() => setCurrent((current + 1) % slides.length)}
        >
          ❯
        </button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
