import './Flashcard.css';
import "react-visual-grid/dist/react-visual-grid.css";
import React, { useState } from 'react';

function FlashCard({information, next, remove}) {

    const [side, setSide] = useState(true);

    return (
        <div className="flashcard" style={side ? {backgroundColor: '#0d0073'} : {backgroundColor: '#005c18'}} >
            {side ? (
                <div className="flashcard-title" onClick={() => setSide(!side)}>
                    {information.question}
                </div>
            ) : (
                <div className="flashcard-content" onClick={() => setSide(!side)}>
                    {information.answer}
                </div>
            )}
            <div className="flashcard-options">
                <button onClick={() => {remove(); setSide(true) }}>I know</button>
                <button onClick={() => {next(); setSide(true) } }>Skip</button>
            </div>
        </div>
    );
}

export default FlashCard;