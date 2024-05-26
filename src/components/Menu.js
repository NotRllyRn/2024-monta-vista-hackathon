import './Menu.css';
import "react-visual-grid/dist/react-visual-grid.css";
import {
    Psych,
    Calc,
    USH,
} from '../images'

function Menu() {
  return (
    <div className="Menu">
        <header className='Menu-background'>
            <header className='title-header'>
                <p className='outline'>
                    SLAPs
                </p>
            </header>
            <div className='grid-container'>
                <div className='grid-item'>
                    <a href='/psychology'>
                    <img src={Psych} alt='Psychology' className='image' />
                    <header className='overlay-box'>
                        <div className='overlay-text'>
                            Psychology
                        </div>
                    </header>
                    </a>
                </div>
                <div className='grid-item'>
                    <a href='/CalculusBC'>
                    <img src={Calc} alt='Calculus BC' className='image' />
                    <header className='overlay-box'>
                        <div className='overlay-text'>
                        Calculus BC
                        </div>
                    </header>
                    </a>
                </div>
                <div className='grid-item'>
                    <a href='/USHistory'>
                    <img src={USH} alt='Psychology' className='image' />
                    <header className='overlay-box'>
                        <div className='overlay-text'>
                            U.S. History
                        </div>
                    </header>
                    </a>
                </div>
            </div>
        </header>
    </div>
  );
}

export default Menu;
