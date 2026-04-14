"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Projects = () => {
    const projectsData = [
        {
            img: "/img/project-1.jpg",
            subtitle: "Graphic Design",
            title: "Custom Invitations",
            description: "Designed elegant and personalized digital invitations for various special occasions including weddings, engagements, and housewarming ceremonies.",
            link: "https://drive.google.com/drive/folders/1dWrSNHR5KxdIH7rmQ96ycNtzPonux1_u?usp=drive_link"
        },
        {
            img: "/img/project-2.jpg",
            subtitle: "Editorial Design",
            title: "Magazine Layouts",
            description: "Designed engaging, professional layouts for department magazines like Codesprintz'24 and SPARK'23, balancing aesthetics with content readability.",
            link: "https://drive.google.com/drive/folders/1PYcv13dzitLiwV_6iv0PYY7Lp8TQoGCa?usp=drive_link"
        },
        {
            img: "/img/project-3.jpg",
            subtitle: "Editorial Design",
            title: "Newsletters",
            description: "Structured and designed professional newsletters to effectively communicate highlights and updates, ensuring readability and brand consistency.",
            link: "https://drive.google.com/drive/folders/18D-kY4VByvv914p7QnvZG14SLVAKfYJm?usp=drive_link"
        },
        {
            img: "/img/project-4.jpg",
            subtitle: "Graphic Design",
            title: "Posters & Banners",
            description: "Designed vibrant, engaging promotional materials, including posters and banners for institutional events, technical symposiums, and hackathons.",
            link: "https://drive.google.com/drive/folders/1IkFi_kmDoyZ2j_xYx0DtY-XxpT4mV13c?usp=drive_link"
        },
        {
            img: "/img/project-5.jpg",
            subtitle: "Event Design",
            title: "Certificates",
            description: "Designed professional and elegant certificates recognizing participants and winners of management fests, cultural celebrations, and events.",
            link: "https://drive.google.com/drive/folders/1p4XQMCZWMQnCCfcli1Bu2vZ--iEhVx04?usp=drive_link"
        },
    ];

    const fadeInMask: Variants = {
        hidden: { opacity: 0, y: 50 },
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
        <section className="projects section" id="projects">
            <motion.h2
                className="section-title-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
            >
                <span>Projects.</span>
            </motion.h2>

            <motion.div
                className="projects-container container grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {projectsData.map((project, index) => (
                    <motion.article
                        key={index}
                        className="projects-card"
                        variants={fadeInMask}
                        whileHover={{
                            y: -12,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            transition: { duration: 0.4, ease: "easeOut" }
                        }}
                    >
                        <div className="projects-image">
                            <img src={project.img} alt="image" className="projects-img" />
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects-button button">
                                <i className="ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        <div className="projects-content">
                            <h3 className="projects-subtitle">{project.subtitle}</h3>
                            <h2 className="projects-title">{project.title}</h2>
                            <p className="projects-description">{project.description}</p>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
