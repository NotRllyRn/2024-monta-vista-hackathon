import './Psychology.css';
import "react-visual-grid/dist/react-visual-grid.css";
import React, { useState } from 'react';

import {
    Accordion,
    FlashCardSet,
    ChatBox
} from './index.js'


function Menu() {

    const accordionData = [
        {
            title: (<div>
                <b>Unit 1:</b> Scientific Foundations of Psychogy
            </div>),
            content: (
                <div>
                    <h2>
                    This unit covers the origins, major theoretical approaches, and research methodologies of psychology, as well as ethical considerations in psychological research.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/Tn_d0jRlLuY">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={1}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
                </div>
            )
        },
        { 
            title: (<div>
                <b>Unit 2:</b> Biological Bases of Behavior
            </div>),
            content: (
                <div>
                    <h2>
                    This unit covers the biological mechanisms underlying behavior, including neural and hormonal processes, brain functions, and the influence of genetic and environmental factors​.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/Ng1iPzwzpoA">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={2}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
                </div>
            )
        },
        {
            title: (<div>
                <b>Unit 3:</b> Sensation and Perception
            </div>),
            content: (
                <div>
                    <h2>
                        This unit covers how sensory information is received and processed, and how these processes influence perception and interpretation of the world around us.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/rz9v2sYHV-E">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={3}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
                </div>
            )
        },
        {
           //you are a nerd
           title: (<div>
                <b>Unit 4:</b> Learning 
            </div>),
            content: (
                <div>
                    <h2>
                    This unit covers various learning theories and mechanisms, including classical and operant conditioning, observational learning, and the role of cognitive and social factors in learning.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/clcZiszxKDA">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={4}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
                </div>
            )
        },
        {
            title: (<div>
                <b>Unit 5:</b> Cognative Psychology
            </div>),
            content: (
                <div>
                    <h2>
                    This unit covers mental processes such as memory, intelligence, problem-solving, and language, examining how these processes affect human behavior and thinking.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/uM7TMFckWco">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={5}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
                </div>
            )
        },
        {
            title: (<div>
                <b>Unit 6:</b> Developmental Psychology
            </div>),
            content: (
                <div>
                    <h2>
                    This unit covers the physical, cognitive, and social changes across the human lifespan, including developmental theories and challenges faced at different life stages​.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/Hn1OsVxbERg">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={6}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
                </div>
            )
        },
        {
            title: (<div>
                <b>Unit 7:</b> Motivation, Emotion, and Personality
            </div>),
            content: (
                <div>
                    <h2>
                    This unit covers theories and research on what drives behavior and emotional responses, as well as various theories of personality and methods for assessing personality traits.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/Vw-kuz1My8s">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={7}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
                </div>
            )
        },
        {
            title: (<div> <b>Unit 8:</b> Clinical Psychology
            </div>),
            content: (
                <div>
                    <h2>
                    This unit covers the diagnosis and treatment of psychological disorders, exploring historical and contemporary therapeutic approaches and techniques.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/A5FfxcPOhA0">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={8}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
                </div>
            )
        },
        {
            title: (<div> <b>Unit 9:</b> Social Psychology
            </div>),
            content: (
                <div>
                    <h2>
                        This unit covers how individuals are influenced by social contexts, including topics like group dynamics, social perception, attitudes, prejudice, and interpersonal attraction.
                    </h2>
                    <div>
                        <iframe className='video' src="https://www.youtube.com/embed/2NxUSmC9QT0">
                        </iframe>
                    </div>
                    <div>
                        <Accordion title='Flash Card Quiz' content={
                            <FlashCardSet number={9}/>
                        } color='#fbdf61' />
                    </div>
                    <ChatBox />
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
