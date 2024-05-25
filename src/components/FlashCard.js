import './Psychology.css';
import "react-visual-grid/dist/react-visual-grid.css";

function FlashCard({title, choices}) {
    /* information.cardinformation has all the questions and answers, and choices, it is an array that the user will look at 1 at a time and click the right answer */
    return (
        <div className="flashcard">
            <div className="flashcard-title">
                {title}
            </div>
            <div className="flashcard-choices">
            {choices.map((choice) => {
                <div className="flashcard-choice">
                    {choice}
                </div>
            })}
            </div>
        </div>
    );
}

export default FlashCard;