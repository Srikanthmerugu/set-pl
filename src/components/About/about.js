import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-sub-container">
        <div>
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          Welcome to Sreekara Envirotech Private Limited (SET), where innovation meets sustainability. Based in Hyderabad, SET specializes in providing cutting-edge environmental solutions through technology. With a strong foundation built on domain knowledge and expertise, we are committed to designing and manufacturing cost-effective Environmental Test Chambers tailored to meet the diverse needs of our clients.
        </p>
        </div>
        <img src='https://img.freepik.com/free-vector/man-watering-plants-garden-white-background_1308-71208.jpg?t=st=1723570212~exp=1723573812~hmac=ea5dda0016bd5613c5dce33bb4be2aeb0bdfe00b50ff4b625fbabc501f6098a9&w=900' />
        
      </div>





      <div className="about-card">
        <h2 className="about-heading">Our Products and Services</h2>
        <p className="about-text">
          At SET, we take pride in our ability to design, fabricate, and assemble a wide range of environmental chambers, including Walk-in Chambers, Plant Growth Chambers, and Humidity Chambers. Our products are built in-house and can be customized with various controllers and features to match specific test processes, ensuring reliability and precision.
        </p>
      </div>
      <div className="about-card">
        <h2 className="about-heading">Technical Expertise</h2>
        <p className="about-text">
          Our extensive experience spans across servicing globally recognized products from pioneers in biotechnology, engineering, and multiple other sectors. Whether it's Plant Growth Chambers from Canada, Hot & Cold Chambers from China, or Convection Ovens from the USA, our team is equipped to handle a variety of sophisticated technologies.
        </p>
      </div>
      <div className="about-card">
        <h2 className="about-heading">Comprehensive Solutions</h2>
        <p className="about-text">
          We specialize in interfacing electro-mechanical devices and electronic circuits with various types of sensors, including photo, pneumatic, limit, flow, and movement sensors. Additionally, we design and build electric power panels for both single-phase and three-phase requirements, providing comprehensive automation solutions.
        </p>
      </div>
     

      <div className='whywechous'>

      {/* <div className="about-card">
        <h2 className="about-heading">Dedicated After-Sales Support</h2>
        <p className="about-text">
          At SET, customer satisfaction is paramount. Our dedicated team of technicians is always ready to offer post-sales support, including services during maintenance contracts, one-time repairs, controller upgrades, and turnkey solutions. We are committed to helping our clients maintain and upgrade their existing chambers and equipment with ease.
        </p>
      </div> */}

      {/* <div className="about-card">
        <h2 className="about-heading">Why Choose Us?</h2>
        <p className="about-text">
          With SET, you can expect unparalleled service, innovative solutions, and a commitment to excellence. We are here to assist you in defining your requirements and designing the perfect environmental test chamber to meet your specific needs.
        </p>
      </div> */}
      </div>
      
      
    </div>
  );
};

export default About;