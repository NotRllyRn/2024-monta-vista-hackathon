import './Psychology.css';
import "react-visual-grid/dist/react-visual-grid.css";
import React, { useState } from 'react';

import {
    Accordion,
    FlashCard
} from './index.js'


function Menu() {
    const accordionData = [
        {
            title: 'Unit 1: Scientific Foundations of Psychology',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/Tn_d0jRlLuY">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <div>
                                <FlashCard title ='Question 1' choices= {['hi', 'no']} />
                            </div>
                        } color='#fbdf61' />
                    </div>
                </div>
            )
        },
        {
            title: 'Unit 2: Biological Bases of Behavior',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                    <iframe className='video' src="https://www.youtube.com/embed/Ng1iPzwzpoA">
                    </iframe>
                    </div>
                </div>
            )
        },
        {
            title: 'Unit 3: Sensation and Perception',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                    <iframe className='video' src="https://www.youtube.com/embed/rz9v2sYHV-E">
                    </iframe>
                    </div>
                </div>
            )
        },
        {
            title: 'Unit 4: Learning',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                    <iframe className='video' src="https://www.youtube.com/embed/clcZiszxKDA">
                    </iframe>
                    </div>
                </div>
            )
        },
        {
            title: 'Unit 5: Cognitive Psychology',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                    <iframe className='video' src="https://www.youtube.com/embed/uM7TMFckWco">
                    </iframe>
                    </div>
                </div>
            )
        },
        {
            title: 'Unit 6: Developmental Psychology',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                    <iframe className='video' src="https://www.youtube.com/embed/Hn1OsVxbERg">
                    </iframe>
                    </div>
                </div>
            )
        },
        {
            title: 'Unit 7: Motivation, Emotion, and Personality',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                    <iframe className='video' src="https://www.youtube.com/embed/Vw-kuz1My8s">
                    </iframe>
                    </div>
                </div>
            )
        },
        {
            title: 'Unit 8: Clinical Psychology',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                    <iframe className='video' src="https://www.youtube.com/embed/A5FfxcPOhA0">
                    </iframe>
                    </div>
                </div>
            )
        },
        {
            title: 'Unit 9: Social Psychology',
            content: (
                <div>
                    <h2>
                        This unit focuses on the history of psychology, research methods, and the different approaches to psychology.
                    </h2>
                    <div>
                    <iframe className='video' src="https://www.youtube.com/embed/2NxUSmC9QT0">
                    </iframe>
                    </div>
                </div>
            )
        }
    ];

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
            {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} color='#21aeca' />
            ))}
        </header>
    </div>
  );
}

export default Menu;
