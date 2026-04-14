"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Skills = () => {
    const fadeInMask: Variants = {
        hidden: { opacity: 0, y: 40 },
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
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="services section" id="skills">
            <motion.h2 
                className="section-title-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
            >
                <span>Skills.</span>
            </motion.h2>

            <motion.div 
                className="services-container container grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* UI/UX & Design */}
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-layout"></i>
                        </div>
                        <h2 className="services-title">UI/UX & Design</h2>
                        <ul className="services-list">
                            <li className="services-item"><i className="bx bx-check-circle"></i> User Interface (UI) Design</li>
                            <li className="services-item"><i className="bx bx-check-circle"></i> User Experience (UX) Design</li>
                            <li className="services-item"><i className="bx bx-check-circle"></i> Wireframing & Prototyping</li>
                            <li className="services-item"><i className="bx bx-check-circle"></i> User Research & Analysis</li>
                            <li className="services-item"><i className="bx bx-check-circle"></i> Visual Design & Layout</li>
                            <li className="services-item"><i className="bx bx-check-circle"></i> Responsive Design</li>
                        </ul>
                    </div>
                </motion.article>

                {/* Tools & Technologies */}
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-code-alt"></i>
                        </div>
                        <h2 className="services-title">Tools & Tech</h2>
                        <ul className="services-list">
                            <li className="services-item"><i className="bx bxl-figma"></i> Figma</li>
                            <li className="services-item"><i className="bx bx-palette"></i> Canva</li>
                            <li className="services-item"><i className="bx bx-rocket"></i> Adobe XD (basic)</li>
                            <li className="services-item"><i className="bx bxl-html5"></i> HTML & CSS</li>
                            <li className="services-item"><i className="bx bxl-javascript"></i> JavaScript (basic)</li>
                            <li className="services-item"><i className="bx bxl-python"></i> Python (basic)</li>
                        </ul>
                    </div>
                </motion.article>

                {/* Soft Skills */}
                <motion.article className="services-card" variants={fadeInMask} whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                    <div className="services-border"></div>
                    <div className="services-content">
                        <div className="services-icon">
                            <div className="services-box"></div>
                            <i className="bx bx-group"></i>
                        </div>
                        <h2 className="services-title">Soft Skills</h2>
                        <ul className="services-list">
                            <li className="services-item"><i className="bx bx-medal"></i> Team Leadership</li>
                            <li className="services-item"><i className="bx bx-calendar-event"></i> Event Coordination</li>
                            <li className="services-item"><i className="bx bx-message-square-detail"></i> Communication Skills</li>
                            <li className="services-item"><i className="bx bx-time-five"></i> Time Management</li>
                            <li className="services-item"><i className="bx bx-brain"></i> Problem Solving</li>
                            <li className="services-item"><i className="bx bx-bulb"></i> Creativity</li>
                        </ul>
                    </div>
                </motion.article>
            </motion.div>
        </section>
    );
};

export default Skills;
