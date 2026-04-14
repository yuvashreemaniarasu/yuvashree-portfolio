"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SendIcon } from './ui/send';
import { DownloadIcon } from './ui/download';
const About = () => {
    const fadeInMask: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="about section" id="about">
            <motion.div
                className="about-container container grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h2
                    className="section-title-1"
                    variants={fadeInMask}
                >
                    <span>About Me.</span>
                </motion.h2>

                <div className="about-profile">
                    <motion.div
                        className="about-image"
                        variants={fadeInMask}
                    >
                        <img
                            src="/img/about-image.jpg"
                            alt="about image"
                            className="about-img" />

                        <div className="about-shadow"></div>
                        <div className="geometric-box"></div>

                        <img
                            src="/img/random-lines.svg"
                            alt=""
                            className="about-line" />
                        <div className="about-box"></div>
                    </motion.div>
                </div>

                <motion.div
                    className="about-info"
                    variants={fadeInMask}
                >
                    <p className="about-description">
                        I am an aspiring UI/UX Designer with a B.Tech in IT, combining technical knowledge with creative thinking to design intuitive, accessible, and impactful digital solutions that solve real-world problems.
                    </p>

                    <ul className="about-list">
                        <li className="about-item">
                            <b>Design Skills:</b> User Research, Wireframing,
                            Prototyping, Visual Design, & Information Architecture.
                        </li>
                        <li className="about-item">
                            <b>Creative Leadership:</b> Tech Club Secretary, Event
                            Coordination, Technical Team Lead, & Designing Team Coordinator.
                        </li>
                    </ul>

                    <div className="about-buttons">
                        <a href="#contact" className="button">
                            <SendIcon size={20} />
                            Contact
                        </a>

                        <a
                            href="/resume/resume.pdf"
                            target="_blank"
                            className="button-ghost"
                            download="resume.pdf">
                            <DownloadIcon size={20} />
                            Resume
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
