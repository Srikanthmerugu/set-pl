// import React, { useState } from 'react';
// import "./navitem.css"

// const NavItem = ({ label, subItems }) => {
//   const [isHovered, setIsHovered] = useState(null);

//   const handleHover = () => {
//     setIsHovered(label);
//   };

//   const handleLeave = () => {
//     setIsHovered(null);
//   };

//   return (
//     <div
//       className="nav-ite"
//       onMouseEnter={handleHover}
//       onMouseLeave={handleLeave}
//     >
//       {label}
//       {isHovered === label && subItems && (
//         <div className="dropdow">
//           {subItems.map((subItem, index) => (
//             <div key={index} className="dropdown-ite">
//               {subItem}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavItem;