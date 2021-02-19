import { useState, useEffect } from 'react';
import { ReactComponent as DesktopIcon } from '../../images/illustration-woman-online-desktop.svg';
import { ReactComponent as MobileIcon } from '../../images/illustration-woman-online-mobile.svg';
import { ReactComponent as BoxIcon } from '../../images/illustration-box-desktop.svg';
import "./styles.css";
import AccordionContainer from '../AccordionContainer';

const windowWidth = window.innerWidth;

const Card = (props) => {
    const [ width, updateWidth ] = useState(windowWidth);
    const getWindowSize = () => {
        const { innerWidth: width } = window;
        return width;
    }

    useEffect(() => {
        const resizeListener = () => {
            updateWidth(getWindowSize())
        }

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    })

    return (
        <div className="Card">
            { width > 920 ? <BoxIcon className="Box-icon"/> : <MobileIcon className="Mobile-card-icon"/>}
            <section className="Card-content-container">
            { width > 920 && <DesktopIcon className="Card-icon"/>}
            </section>
            <section className="Card-content-container">
                <header>
                    <h1 className="Card-content-container--header">FAQ</h1>
                </header>
                <AccordionContainer/>
            </section>
        </div>
    )
}

export default Card;