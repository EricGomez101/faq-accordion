import {useState} from 'react';
import { ReactComponent as Icon } from '../../images/icon-arrow-down.svg';
import './styles.css';

const Accordion = (props) => {
    const [state, setState] = useState({ active: false, });
    const handleClick = () => setState({active: !state.active});
    const text = <p className="Accordion-body--text">{props.text}</p>;
    return (
        <div className="Accordion">
            <header className="Accordion-header" onClick={handleClick}>
                <h1 className={"Accordion-header--text" + (state.active ? ' header-text--active' : '')}>
                    {props.header}
                </h1>
                <div className="Accordion-icon-container">
                    <Icon className={state.active && "rotate"}/>
                </div>
            </header>
            { state.active && text }
        </div>
    )
}

export default Accordion;