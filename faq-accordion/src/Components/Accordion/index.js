import { ReactComponent as Icon } from "../../images/icon-arrow-down.svg";
import "./styles.css";

const Accordion = (props) => {
    const text = <p className="Accordion-body--text">{props.text}</p>;
    return (
        <div className="Accordion">
            <header className="Accordion-header" onClick={(e) => props.handleClick(e, props.id)}>
                <h1 className={"Accordion-header--text" + (props.active ? " header-text--active" : "")}>
                    {props.header}
                </h1>
                <div className="Accordion-icon-container">
                    <Icon className={props.active && "rotate"}/>
                </div>
            </header>
            { props.active && text }
        </div>
    )
}

export default Accordion;