import React, {useState} from "react";
import {FaArrowUp } from 'react-icons/fa'
import {Button} from './Styles.js'

export default function ScrollTopButton({dimensions}) {

    const [visible, setVisible] = useState(false);

    const toggleHeight = dimensions.height * 0.3;

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled>toggleHeight) {
            setVisible(true);
        }
        else if(scrolled<toggleHeight) {
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