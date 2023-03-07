import React, {useState} from "react";
import {FaArrowUp } from 'react-icons/fa'
import {Button} from './Styles.js'

export default function ScrollTopButton() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled>900) {
            setVisible(true);
        }
        else if(scrolled<900) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    
    return (
        <Button>
            <FaArrowUp  onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
        </Button>
    );
};