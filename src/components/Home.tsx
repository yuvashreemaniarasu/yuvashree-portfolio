"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextEffect } from '@/components/core/text-effect';

const Home = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const nameText = "Yuvashree";

    useEffect(() => {
        if (!sectionRef.current) return;

        const q = gsap.utils.selector(sectionRef.current);

        gsap.from(q(".letter"), {
            opacity: 0,
            y: 50,
            rotateX: -90,
            stagger: 0.05,
            duration: 1,
            delay: 2, // After curtain
            ease: "back.out(1.7)"
        });

        // Professional, subtle hero image intro sequence
        const tl = gsap.timeline({ delay: 2.1 });

        tl.from(q(".home-img"), {
            opacity: 0,
            y: 30, // Gentle upward lift
            duration: 1.6,
            ease: "power3.out"
        }, 0)
        .from(q(".home-shadow"), {
            opacity: 0,
            y: 20,
            x: -10, // Slight diagonal float for depth
            duration: 1.6,
            ease: "power3.out"
        }, 0.2)
        .from(q(".geometric-box"), {
            opacity: 0,
            y: -15, 
            duration: 1.4,
            ease: "power2.out"
        }, 0.3)
        .from(q(".home-arrow, .home-line"), {
            opacity: 0,
            y: 10,
            stagger: 0.15,
            duration: 1.2,
            ease: "power2.out"
        }, 0.4);
    }, []);

    return (
        <section ref={sectionRef} className="home section" id="home">
            <div className="home-container container grid">
                <motion.h1
                    className="home-name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {nameText.split("").map((char, index) => (
                        <span key={index} className="letter" style={{ display: 'inline-block' }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </motion.h1>

                <div className="home-profile">
                    <motion.div
                        className="home-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                    >
                        <img
                            src="/img/hero-image.jpg"
                            alt="home image"
                            className="home-img" />

                        <div className="home-shadow"></div>

                        <img
                            src="/img/curved-arrow.svg"
                            alt=""
                            className="home-arrow" />
                        <img
                            src="/img/random-lines.svg"
                            alt=""
                            className="home-line" />

                        <div className="geometric-box"></div>
                    </motion.div>

                    <motion.div
                        className="home-social"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a
                            href="https://www.instagram.com/yuvashree_maniarasu"
                            target="_blank"
                            className="home-social-link"
                        ><i className="bx bxl-instagram"></i
                        ></a>
                        <a
                            href="https://www.linkedin.com/in/yuva-shree-maniarasu-profile"
                            target="_blank"
                            className="home-social-link">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=7397280135&text=Hello, Yuvashree!"
                            target="_blank"
                            className="home-social-link">
                            <i className="bx bxl-whatsapp"></i>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="home-info"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <TextEffect
                        per='char'
                        preset='fade'
                        delay={1.2}
                        className="home-description"
                    >
                        {`I'm a passionate UI/UX Designer with a background in IT, blending technical expertise with creative design to build impactful, human-centered digital products.`}
                    </TextEffect>

                    <a href="#about" className="home-scroll">
                        <div className="home-scroll-box">
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        <span className="home-scroll-text">Scroll Down</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
