import {useState} from 'react';
import { ReactComponent as Image } from '../../images/icon-arrow-down.svg';

const Accordion = (props) => {
    const [state, setState] = useState({ active: false, });
    const handleClick = () => setState({active: !state.active});
    const text = <p>{props.text}</p>;
    return (
        <div className="Accordion">
            <header onClick={handleClick}>
                <h1>
                    {props.header}
                </h1>
                <div className="Accordion-icon-container">
                    <Image/>
                </div>
            </header>
            { state.active && text }

        </div>
    )
}

export default Accordion;