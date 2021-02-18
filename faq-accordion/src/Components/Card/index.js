import { ReactComponent as DesktopIcon } from '../../images/illustration-woman-online-desktop.svg';
import { ReactComponent as BoxIcon } from '../../images/illustration-box-desktop.svg';
import "./styles.css";
import AccordionContainer from '../AccordionContainer';

const Card = (props) => (
    <div className="Card">
        <BoxIcon className="Box-icon"/>
        <section className="Card-content-container">
            <DesktopIcon className="Card-icon"/>
        </section>
        <section className="Card-content-container">
            <header>
                <h1 className="Card-content-container--header">FAQ</h1>
            </header>
                <AccordionContainer/>
        </section>
    </div>
)

export default Card;