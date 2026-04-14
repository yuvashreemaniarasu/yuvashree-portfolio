"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const journeyData = [
    {
        year: 'Academic Core',
        title: 'B.Tech Graduation',
        subtitle: 'Information Technology',
        description: 'Built a solid technical foundation, merging logical computing with human-centric design to create products that are as functional as they are beautiful.',
    },
    {
        year: 'Leadership',
        title: 'Vistara Club Secretary',
        subtitle: 'Tech & Design Leadership',
        description: 'Spearheaded technical events and departmental initiatives, fostering cross-team collaboration and managing creative workflows for impactful results.',
    },
    {
        year: 'Strategic Lead',
        title: 'BIS Club Coordinator',
        subtitle: 'Project Planning',
        description: 'The BIS Club, under the Bureau of Indian Standards, promotes awareness of quality and standardization among students through events, activities, and active member engagement.',
    },
    {
        year: 'Event Director',
        title: 'Technical Team Lead',
        subtitle: 'Esperanza & Major Events',
        description: 'Directed technical teams and coordinated event design for flagship initiatives, managing large-scale project execution from initial concept to final seamless delivery.',
    },
];

const Journey = () => {
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
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section className="journey section" id="journey">
            <motion.h2
                className="section-title-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
            >
                <span>My Journey.</span>
            </motion.h2>

            <div className="journey-container container grid">
                <motion.div
                    className="journey-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {journeyData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="journey-item"
                            variants={fadeInMask}
                        >
                            <motion.div
                                className="journey-dot"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 + (index * 0.1) }}
                            ></motion.div>
                            <div className="journey-card">
                                <div className="journey-header">
                                    <h3 className="journey-title">{item.title}</h3>
                                    <span className="journey-year">{item.year}</span>
                                </div>
                                <h4 className="journey-subtitle">{item.subtitle}</h4>
                                <p className="journey-description">{item.description}</p>
                                <div className="geometric-box"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;
