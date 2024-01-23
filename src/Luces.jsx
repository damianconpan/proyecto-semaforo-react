import React, { useState } from 'react';

import './App.css';


const Luces = () => {
  const [Light, setActiveLight] = useState(null);

  return(
  
  <div className="traffic-light d-flex flex-column justify-content-around bg-dark rounded p-2">
      <div className={`light bg-danger rounded-circle ${Light === 'red' ? 'glow' : ''}`} onClick={() => setActiveLight('red')}></div>
      <div className={`light bg-warning rounded-circle ${Light === 'yellow' ? 'glow' : ''}`} onClick={() => setActiveLight('yellow')}></div>
      <div className={`light bg-success rounded-circle ${Light === 'green' ? 'glow' : ''}`} onClick={() => setActiveLight('green')}></div>
  </div>

)}

export default Luces