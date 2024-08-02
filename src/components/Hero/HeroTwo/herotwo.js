import React from 'react'
import { FaCog, FaLeaf, FaLightbulb, FaRegLightbulb } from 'react-icons/fa'
import './herotwo.css'

const Herotwo = () => {
  return (
    <div className='cards-container-main'>
      <div className="cards-container-sub">
        <div className="card-main">
          <div className="sub-card">
            <FaRegLightbulb className="icon" />
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
  )
}

export default Herotwo
