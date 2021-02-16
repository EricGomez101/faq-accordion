import "./styles.css";
import Accordion from '../Accordion';

const Card = (props) => (
    <div className="Card">
        <section className="Card-content-container"></section>
        <section className="Card-content-container">
            <header>
                <h1 className="Card-content-container--header">FAQ</h1>
            </header>
            <div className="Card-accordion-container">
                <Accordion header= 'Hello' text= 'World!'/>
            </div>
        </section>

    </div>
)

export default Card;