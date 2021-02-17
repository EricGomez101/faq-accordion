import "./styles.css";
import AccordionContainer from '../AccordionHOF';

const Card = (props) => (
    <div className="Card">
        <section className="Card-content-container"></section>
        <section className="Card-content-container">
            <header>
                <h1 className="Card-content-container--header">FAQ</h1>
            </header>
                <AccordionContainer/>
        </section>
    </div>
)

export default Card;