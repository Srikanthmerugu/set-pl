import React from 'react';
import './chambers.css';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is the description for product 1.',
    imageUrl: 'https://img.freepik.com/premium-vector/colorful-3d-illustration-planter-with-pot-with-plant-inside_1108514-84423.jpg?w=740', 
    link: '/product1'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is the description for product 2.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/product2'
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is the description for product 3.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/product3'
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'This is the description for product 4.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/product4'
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'This is the description for product 5.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/product5'
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'This is the description for product 6.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/product6'
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'This is the description for product 7.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/product7'
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'This is the description for product 8.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '/product8'
  },
];

const Chambers = () => {
  return (

    <>
     <h1 className='chamber-heading'>Technical catalogue of Plant growth walk-in Chamber</h1>
   
    <div className="chambers-container">
     
      {products.map(product => (
    
          <div key={product.id} className="chamber-card">
               
          <img
            src={product.imageUrl}
            alt={product.title}
            className="chamber-image"
            // onClick={() => window.location.href = product.link} 
          />
          <div className="chamber-content">
          <Link to='./SingleChamber'> <h3>{product.title}Module Control Room </h3>
            <p>{product.description} Touch screen controller with Prologic PLC is used for control system with Programmable alarms and user defined alarms. </p>  </Link>
          </div>
        
        </div>
      
        
      ))}
    </div> </>
  );
};

export default Chambers;
