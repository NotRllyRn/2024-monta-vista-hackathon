import './Psychology.css';
import "react-visual-grid/dist/react-visual-grid.css";

function FlashCard({information}) {
    return (
        <div className="flashcard">
            <div className="flashcard-title">
                {information.title}
            </div>
            <div className="flashcard-content">
                {information.content}
            </div>
        </div>
    );
}

export default FlashCard;