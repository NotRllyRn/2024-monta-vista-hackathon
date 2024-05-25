import './Psychology.css';
import "react-visual-grid/dist/react-visual-grid.css";
import React, { useState } from 'react';

function Accordion({title, content, color}) {
    
    const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
        <div className="accordion-item" style={{backgroundColor: color}}>
            <div
                className="accordion-title"
                onClick={() => setIsActive(!isActive)}
            >
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content" style={{backgroundColor: color}}>
              {content}
            </div>}
        </div>
    </div>
  );
}

export default Accordion;