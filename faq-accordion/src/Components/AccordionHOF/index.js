import { useState } from 'react';
import Accordion from "../Accordion";

const faqs = [
    { id: 1, header: 'How many team members can i invite?', text: 'Example text!', active: false },
    { id: 2, header: 'What is the maximum file upload size?', text: 'No more than 2GB. All files in your account must fit your allotted storage space.', active: false },
    { id: 3, header: 'How do i reset my password?', text: 'Example text!', active: false},
    { id: 4, header: 'Can I cancel my subscription?', text: 'No you cannot!', active: false },
    { id: 5, header: 'Do you provide additional support?', text: 'No we do not!', active: false },
]


const AccordionContainer = () => {
    const [state, updateState] = useState({faqs});
    const handleClick = (e, id) => {
        const faqs = state.faqs.map(faq => {
            if (faq.id === id) {
                faq.active = !faq.active;
            } else {
                faq.active = false;
            }
            return faq;
        });
        updateState({faqs});
    };
    return (
        <div className="Card-accordion-container">
            {
                state.faqs.map(faq => <Accordion id={faq.id} header={faq.header} text={faq.text} active={faq.active} handleClick={handleClick}/>)
            }
        </div>
    )
}

export default AccordionContainer;