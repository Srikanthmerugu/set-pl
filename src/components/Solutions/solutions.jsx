// Solutions.js
import React, { useState } from 'react';
import "./solutions.css"

const tabsContent = [
  {
    key: 'controlSystem',
    title: 'Control System',
    image: '/assets/research1.jpg', // Replace with your image path
    content: `The Control System tab provides an in-depth look at our state-of-the-art control mechanisms designed for precision and reliability. It includes details about system architecture, key components, and the software algorithms that drive efficient operation.Discover how our control systems ensure seamless integration with other technologies and contribute to overall system stability and performance.and contribute to overall system stability and performance.`
  },
  {
    key: 'lightCanopiSystem',
    title: 'Light Canopi System',
    image: '/assets/research1.jpg', // Replace with your image path
    content: `The Light Canopi System represents a cutting-edge approach to modern lighting, designed to elevate both aesthetics and functionality. Our systems are built on a foundation of innovative design principles, focusing on customizable lighting patterns that allow you to create the perfect ambiance for any setting. With energy efficiency at the forefront, our solutions not only reduce power consumption but also contribute to a greener environment.`
  },
  {
    key: 'termKeySolution',
    title: 'Term Key Solution',
    image: '/assets/research3.jpg', // Replace with your image path
    content: `Our Term Key Solution tab delves into our state-of-the-art key management systems, meticulously crafted to enhance access control and bolster security measures. We offer a diverse range of term key solutions, including cutting-edge electronic systems and reliable mechanical options, tailored to meet the unique demands of various industries.These solutions are ideal for applications in sectors such as healthcare, education, government.`
  },
  {
    key: 'retrofit',
    title: 'Retrofit',
    image: '/assets/research1.jpg', // Replace with your image path
    content: `The Retrofit Tabs tab highlights our innovative retrofitting solutions tailored to upgrade and modernize existing systems. Our retrofit tabs are engineered to seamlessly integrate with older infrastructures, enhancing performance and extending the lifespan of your current setup. By choosing retrofitting, you can enjoy significant cost savings compared to complete system replacements, minimizing both capital expenditure and operational disruptions.`
  }
];


const Solutions = () => {
  const [activeTab, setActiveTab] = useState('controlSystem');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const activeTabContent = tabsContent.find(tab => tab.key === activeTab);

  return (
    <div className="solutions-tabs-container">
      <div className="solutions-tabs">
        {tabsContent.map((tab) => (
          <button
            key={tab.key}
            className={`solutions-tab-button ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className='solutions-card-container'> 
        <div className="solutions-tab-content">
          <div className="solutions-text-content">
            <h2 className='solutions-heading'>{activeTabContent.title}</h2>
            <p className='solutions-paragraph'>{activeTabContent.content}</p>
            <button className='solutions-button'>Explore</button>
          </div>
            <div className='solution-image-container'>
              <img src={activeTabContent.image} alt={activeTabContent.title} className="solutions-tab-image" />
            </div>
        </div>
          
        </div>
    </div>
  );
}

export default Solutions;
