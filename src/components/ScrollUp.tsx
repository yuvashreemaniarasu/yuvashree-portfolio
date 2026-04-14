"use client";
import React, { useEffect, useState } from 'react';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 350) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a href="#" className={`scroll-up ${isVisible ? 'show-scroll' : ''}`} id="scroll-up">
            <i className='bx bx-chevron-up'></i>
        </a>
    );
};

export default ScrollUp;
