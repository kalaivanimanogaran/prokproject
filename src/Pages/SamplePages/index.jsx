import React from "react"
import "./style.css"
import PatternGrid from "../../Components/PattenGrid"
import personImage from "../../assets/image.png"
import roadImage from "../../assets/image8.png"
import Slider from "../../Components/slider"
import person from "../../assets/image5.png"
import roller from "../../assets/image7.png"
import { Divider } from "antd"
import MyMap from "../../Components/MyMap"
import personMain from "../../assets/image6.png"
import Footer from "../../Components/Footer/index.jsx"

function Index() {
  return (
    <div className="container">
      <header className="header">
        <div className="left">
          <div className="menu-icon"></div>
          <span className="menu-text">Menu</span>
        </div>

        <h1 className="logo">
          PRO<span className="highlight">K</span>
        </h1>

        <button className="btn-yellow">
          <div className="circle"></div>
          Get started
        </button>
      </header>

      <main className="side-title">
        <h1 className="title">
          Innovation <br /> at{" "}
          <span>
            <i>work.</i>
          </span>
        </h1>
        <button className="btn-outline">View Projects</button>

        <div className="arrow">↓</div>
      </main>

      <PatternGrid />
      <img src={personImage} alt="person" />
      <h1 className="sec-title">
        The complete <br />
        <span> conveyer experience</span>
      </h1>

      <div className="image-container">
        <img src={roadImage} alt="road" className="bg-img" />
        <h1 className="Th-title">
          Delivers superior
          <br />
          <span>outcomes on site</span>
        </h1>{" "}
        <div className="button">
          <h1 className="Four-title">
            So Performance
            <br />
            <span>never stops.</span>
          </h1>
          <button className="btn-outline">optimise my site</button>
        </div>
      </div>
      <h3 className="five-title">
        World-leading conveyor
        <br />
        <span>equipment technology</span>
      </h3>
      <Slider />
      <div className="sec-container">
        <h1 className="heading">
          {" "}
          Improve conveyor <br />
          Performance{" "}
        </h1>
        <div className="image">
          <div>
            <img src={roller} alt="roller" className="images float-up" />
            <h1>Enginnering services</h1>
            <p>
              Get The Technical support you need to optimise your conveyor
              system
            </p>
          </div>
          <div>
            <img src={person} alt="person" className="images float-down" />{" "}
            <h1>Pulley Refurbishment</h1>
            <p>Extend lifespan of your pulleys with expert Refurbishment</p>
          </div>
        </div>

        <h1 className="heading"> Accelerating mining globally</h1>
        <p className="para">
          Manufacturing conveyor components internationally with
          <br /> local Manufacturing facilities in Australia,Brazil,Canada,
          <br /> USA,Indonesia and Chile.
        </p>
      </div>
      <MyMap />
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Don’t get left <br /> behind
          </h1>
          <p>
            We don’t stop chasing performance, and neither should you. <br />
            Optimise your site today.
          </p>
          <button className="btn-yellow">Get a quote</button>
        </div>

        <div className="hero-image">
          <img src={personMain} alt="person" />
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Index
