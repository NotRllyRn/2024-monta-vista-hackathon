import './Flashcard.css';
import "react-visual-grid/dist/react-visual-grid.css";
import React, { useState } from 'react';
import {
    FlashCard,
    FlashCardSets
} from "./index.js";

function FlashCardSet({number}) {

    number = number - 1;
    /* information.cardinformation has all the questions and answers, and choices, it is an array that the user will look at 1 at a time and click the right answer */

    const [set, setset] = useState(JSON.parse(JSON.stringify(FlashCardSets[number])));
    const [flashcard_number, setCardNumber] = useState(0);

    function next() {
        if (set.length < 1) {
            setCardNumber(-1);
            return;
        } else if (flashcard_number > set.length - 2) {
            setCardNumber(0);
        } else {
            setCardNumber(flashcard_number + 1);
        }
    }

    function remove() {
        set.splice(flashcard_number, 1);
        next();
    }

    function reset() {
        setset(JSON.parse(JSON.stringify(FlashCardSets[number])));
        setCardNumber(0);
    }

    return (
        flashcard_number == -1 ? (
            <div>YOU ARE GETTING A 5!!!
                <button  onClick={() => {reset(); setCardNumber(0)}}>Restart</button>
            </div>
        ) : (
            <FlashCard information={set[flashcard_number]} next={next} remove={remove} />
        )
    );
}

export default FlashCardSet;