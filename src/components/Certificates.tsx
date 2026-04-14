"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const certificatesData = [
    {
        title: "Laravel Full Stack Development",
        issuer: "CAPNIS Infotech Pvt Ltd",
        year: "2024",
        description: "Intensive course on full-stack web development using Laravel framework and modern web standards."
    },
    {
        title: "Cybersecurity & Ethical Hacking",
        issuer: "NSIC Technical Services",
        year: "2024",
        description: "Internship focused on ethical hacking concepts, network security, and defensive strategies."
    },
    {
        title: "IoT Solutions Developer",
        issuer: "Edify Techno Solutions",
        year: "2024",
        description: "Developed IoT communication protocols and real-time automation dashboards using Blynk IoT."
    },
    {
        title: "Techno Realm 2.0 - 3rd Place",
        issuer: "Veltech Hightech",
        year: "2025",
        description: "Won 3rd place in Paper Presentation for 'A MultiLayer Input Approach to Enhance CDSS for Breast Cancer'."
    },
    {
        title: "Techyugam 2023 - 1st Prize",
        issuer: "Veltech Multitech",
        year: "2023",
        description: "Secured first prize in the Poster Presentation category at the Techyugam intercollege event."
    },
    {
        title: "Esperanza 2024 - 2nd Prize",
        issuer: "Veltech Multitech",
        year: "2024",
        description: "Awarded second prize for creative Poster Design excellence at the Esperanza cultural festival."
    }
];

const Certificates = () => {
    // Duplicate data for simple CSS marquee to avoid gaps
    const marqueeData = [...certificatesData, ...certificatesData];

    return (
        <section className="certificates section" id="certificates" style={{ overflow: 'hidden' }}>
            <motion.h2 
                className="section-title-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
                style={{ textAlign: 'center' }}
            >
                <span>Certificates.</span>
            </motion.h2>

            <div className="certificates-container" style={{ padding: '2.5rem 0', marginTop: '1.5rem', width: '100%', overflowX: 'hidden' }}>
                <style dangerouslySetInnerHTML={{__html: `
                    .marquee-track {
                        display: flex;
                        gap: 2rem;
                        width: max-content;
                        animation: marquee 35s linear infinite;
                        padding: 1rem 2rem 1rem 0; /* Add trailing padding equal to gap for seamless loop */
                        margin-left: 1rem;
                    }
                    .marquee-track:hover {
                        animation-play-state: paused;
                    }
                    .certificate-wrapper {
                        position: relative;
                        flex-shrink: 0;
                        width: 320px;
                        cursor: default;
                    }
                    .certificate-content {
                        height: 100%;
                        background-color: var(--container-color);
                        padding: 2.5rem 1.75rem 2rem;
                        border: 4px solid var(--black-color);
                        position: relative;
                        z-index: 5;
                        transition: background-color 0.4s, transform 0.4s;
                        display: flex;
                        flex-direction: column;
                    }
                    .certificate-border {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border: 4px solid var(--first-color);
                        top: 0;
                        left: 0;
                        transition: transform 0.4s;
                        z-index: 1;
                    }
                    .certificate-wrapper:hover .certificate-border {
                        transform: translate(0.75rem, 0.75rem);
                    }
                    .certificate-wrapper:hover .certificate-content {
                        transform: translate(-0.25rem, -0.25rem);
                        background-color: var(--body-color);
                    }
                    .cert-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 1.5rem;
                    }
                    .cert-icon {
                        font-size: 2rem;
                        color: var(--title-color);
                    }
                    .cert-year {
                        background-color: var(--title-color);
                        color: var(--body-color);
                        padding: 0.25rem 0.75rem;
                        font-size: var(--smaller-font-size);
                        font-weight: var(--font-bold);
                        border-radius: 12px;
                        display: inline-block;
                    }
                    .cert-title {
                        font-size: var(--h3-font-size);
                        color: var(--title-color);
                        margin-bottom: 0.5rem;
                        font-weight: var(--font-bold);
                        line-height: 1.3;
                        min-height: 3.2rem;
                        display: flex;
                        align-items: flex-start;
                    }
                    .cert-issuer {
                        font-size: var(--small-font-size);
                        color: var(--first-color);
                        margin-bottom: 1rem;
                        font-weight: var(--font-semi-bold);
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .cert-desc {
                        font-size: var(--small-font-size);
                        color: var(--text-color);
                        line-height: 1.6;
                        margin-top: auto;
                    }
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); } 
                    }
                    
                    /* Theme Variables Adaption */
                    .dark-theme .certificate-content {
                        border-color: var(--black-color-light);
                    }
                    .dark-theme .certificate-wrapper:hover .certificate-content {
                        border-color: var(--black-color);
                    }
                    .dark-theme .cert-year {
                        background-color: var(--first-color);
                        color: var(--white-color);
                    }
                `}} />

                <div className="marquee-track">
                    {marqueeData.map((item, index) => (
                        <div key={index} className="certificate-wrapper">
                            <div className="certificate-border"></div>
                            <div className="certificate-content">
                                <div className="cert-header">
                                    <i className="ri-award-fill cert-icon"></i>
                                    <span className="cert-year">{item.year}</span>
                                </div>
                                <h3 className="cert-title">{item.title}</h3>
                                <h4 className="cert-issuer">{item.issuer}</h4>
                                <p className="cert-desc">{item.description}</p>
                                <div className="geometric-box" style={{ top: '1.5rem', right: '1.5rem', opacity: 0.3 }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
