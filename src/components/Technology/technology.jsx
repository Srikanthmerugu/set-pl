import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './technology.css';

const cards = [
    {
      image: '/assets/tech.jpg',
      title: 'Hot & Cold Chambers',
      description: 'Hot and cold chambers are essential for simulating extreme temperature conditions to test the durability and performance of products. These chambers can rapidly transition between high and low temperatures, ensuring that products can withstand real-world environmental changes. They are widely used in various industries, including automotive, aerospace, electronics, and pharmaceuticals.',
    },
    {
      image: '/assets/tech.jpg',
      title: 'Fast Rate Cooling Chambers',
      description: 'Fast rate cooling chambers are designed to quickly reduce the temperature of products and materials. These chambers are crucial for processes that require rapid cooling, such as material stress testing and thermal shock testing. Their ability to achieve swift temperature changes helps in accelerating testing cycles, improving efficiency, and ensuring the reliability of products under sudden temperature variations.',
    },
    {
      image: '/assets/tech.jpg',
      title: 'Walk-In Chambers',
      description: 'Walk-in chambers provide a spacious environment for testing large products or multiple items simultaneously under controlled temperature and humidity conditions. These chambers are ideal for industries that require extensive testing of bulky equipment, such as the automotive and aerospace sectors. The flexibility of walk-in chambers allows for comprehensive environmental testing, ensuring product performance and safety.',
    },
    {
        image: '/assets/tech.jpg',
        title: 'Airbag Deployment System',
        description: 'The airbag deployment system testing ensures that airbags will function correctly in real-world scenarios. This system simulates various crash conditions to validate the timing, inflation, and deployment of airbags. Ensuring the reliability of airbag systems is critical for automotive safety, protecting passengers during collisions.',
    },

    {
        image: '/assets/tech.jpg',
        title: 'Dust Test & Rain Test Chambers',
        description: 'Dust and rain test chambers are designed to replicate harsh environmental conditions involving particulate matter and water exposure. Dust test chambers assess the resilience of products against dust penetration, while rain test chambers simulate various rainfall conditions to evaluate water resistance. These tests are crucial for products used in outdoor and industrial environments.',
      },

      {
        image: '/assets/tech.jpg',
        title: 'Convection Ovens & Inert Gas Ovens',
        description: 'Convection ovens utilize circulated hot air to uniformly heat products, making them ideal for baking, drying, and curing applications. Inert gas ovens, on the other hand, use an inert atmosphere (such as nitrogen) to prevent oxidation and contamination during the heating process. These ovens are essential in industries requiring precise thermal processing without chemical reactions.',
      },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

const Technologies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false); 

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                handleNext();
            }, 3000); // Change slide every 2 seconds
        } else if (!isPlaying && interval) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const { description } = cards[currentIndex];
    const maxLength = 200; // Length for truncation
    const showReadMore = description.length > maxLength;

    return (
        <div className="technology-container">
            <h1 className='technology-main-heading'>Transforming your Businesses with our Advanced Technologies</h1>
            <div className='technology-image-text-container'>
                <div className='technology-image-container'>
                    <img src={cards[currentIndex].image} alt={cards[currentIndex].title} className='technology-image' />
                </div>
                <div className='technology-text-container'>
                    <h1 className='technology-text-heading'>{cards[currentIndex].title}</h1>
                    <p className={`technology-text-para ${isExpanded ? 'expanded' : 'collapsed'}`}>
                        {isExpanded ? description : truncateText(description, maxLength)}
                    </p>
                    {showReadMore && (
                        <button className='read-more-button' onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? 'Read Less ▲' : 'Read More ▼'}
                        </button>
                    )}
                </div>
            </div>
            
            <div className='technology-play-button-container'>
                <button className='technology-play-button' onClick={togglePlay}>
                {isPlaying ? <FaPause /> : <FaPlay />}
                
                </button>
                <div className='technology-button-container'>
                    <button onClick={handlePrevious} disabled={currentIndex === 0}> <FaArrowLeft /></button>
                    <button onClick={handleNext}><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
