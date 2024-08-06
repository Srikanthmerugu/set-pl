import React from "react";
import "./hero.css";
// import './herenew.css'
import { FaLightbulb, FaLeaf, FaCog } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="header">
          <h1>
            Innovating for a{" "}
            <span className="highlight">Sustainable Future</span>
          </h1>
          <p>
            We at SET (SREEKARA EnviroTech), customize and design equipment &
            solutions according to the customer application and requirement. Our
            highly qualified design and engineering team are having wide
            exposure towards technology and provide the best solution. We
            provide the most economical and reliable solution within the
            committed time frame.
          </p>
          <button className="contact-btn">
            Contact Us <span className="arrow">➔</span>
          </button>
        </div>
        <div className="image-container">
          <img src="/assets/hero.jpg" alt="Sustainable Future" />
        </div>
      </div>

<div className="hero-card-session">
<div className="cards-container">
        <div className="card-main">
          <div className="sub-card">
            <FaLightbulb className="icon" />
            <h2>Solution</h2>
            <p>
              We provide economical walk-in chambers, customized control panels,
              and comprehensive services including repairs, AMC, upgrades, and
              turnkey solutions to meet precise application requirements.
            </p>
          </div>
          <div>
            <a href="#learn-more" className="learn-more">
              Learn More
            </a>
          </div>
        </div>
        <div className="card-main">
          <div className="sub-card">
            <FaLeaf className="icon" />
            <h2>Environment</h2>
            <p>
              We offer a range of chambers for plant growth, tissue culture,
              seed storage, insect breeding, and speed breeding, tailored for
              various applications and storage durations.
            </p>
          </div>
          <div>
            <a href="#learn-more" className="learn-more">
              Learn More
            </a>
          </div>
        </div>
        <div className="card-main">
          <div className="sub-card">
            <FaCog className="icon" />
            <h2>Technology</h2>
            <p>
              We provide specialized chambers and ovens, including hot & cold,
              fast cooling, walk-in, airbag deployment, solar simulation, dust &
              rain test, convection, inert gas, lab, tabletop, footprint, ESS,
              and customized humidity chambers.
            </p>
          </div>
          <div>
            {" "}
            <a href="#learn-more" className="learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
</div>
     
    </div>
  );
};

export default Hero;
