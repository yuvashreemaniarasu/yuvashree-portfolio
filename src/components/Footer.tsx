"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "0px" });

    return (
        <footer ref={ref} className="footer" style={{ overflow: "hidden" }}>
            <motion.div
                className="footer-container container grid"
                initial={{ opacity: 0, y: "100%" }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                style={{ willChange: "transform, opacity" }}
            >
                <ul className="footer-links">
                    <li><a href="#home" className="footer-link">Home</a></li>
                    <li><a href="#about" className="footer-link">About</a></li>
                    <li><a href="#projects" className="footer-link">Projects</a></li>
                </ul>
                <span className="footer-copy">
                    &#169; All Rights Reserved By
                    <a href="#"> Yuvashree Maniarasu.</a>
                </span>
            </motion.div>
        </footer>
    );
};

export default Footer;
