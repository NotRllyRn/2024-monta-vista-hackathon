import './Psychology.css';
import "react-visual-grid/dist/react-visual-grid.css";
import React, { useState } from 'react';
import {
    Psych,
} from '../images'

function Menu() {
    const accordionData = {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
      };

      const { title, content } = accordionData;

      const [isActive, setIsActive] = useState(false);

  return (
    <div className="Menu">
        <header className='Psychology-background'>
            <header className='title-header'>
                <p className='outline'>
                    AP Psychology
                </p>
            </header>
            <header className='full-title-header'>
                Units
            </header>
            <div className="accordion">
                <div className="accordion-item">
                    <div
                        className="accordion-title"
                        onClick={() => setIsActive(!isActive)}
                    >
                    <div>{title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">{content}</div>}
                </div>
            </div>
        </header>
    </div>
  );
}

export default Menu;
