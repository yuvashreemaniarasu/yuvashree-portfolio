"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    { src: "/gallery/gal - (1).jpg", label: "Techyugam 2024" },
    { src: "/gallery/gal - (2).jpg", label: "Tech Club Secretary" },
    { src: "/gallery/gal - (3).jpg", label: "Alumini Meet 2025" },
    { src: "/gallery/gal - (4).jpg", label: "Esperanza 2026" },
    { src: "/gallery/gal - (5).jpg", label: "Orchestration" },
    { src: "/gallery/gal - (6).jpg", label: "Esperanza 2026" },
    { src: "/gallery/gal - (7).jpg", label: "Department Event" },
    { src: "/gallery/gal - (8).jpg", label: "Technical Team" },
    { src: "/gallery/gal - (9).jpg", label: "Esperanza 2025" },
    { src: "/gallery/gal - (10).jpg", label: "Woman's Day Celebration" },
    { src: "/gallery/gal - (11).jpg", label: "Genovate 2025" },
    { src: "/gallery/gal - (12).jpg", label: "Induction day 2025" },
    { src: "/gallery/gal - (13).jpg", label: "Techyugam 2024" }
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            opacity: 0,
            scale: 1.05,
            y: direction > 0 ? 30 : -30,
        }),
        center: {
            zIndex: 1,
            opacity: 1,
            scale: 1,
            y: 0,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            opacity: 0,
            scale: 0.98,
            y: direction < 0 ? 30 : -30,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = galleryImages.length - 1;
            if (nextIndex >= galleryImages.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <section className="gallery section" id="gallery">
            <div className="gallery-header-container container">
                <motion.h2
                    className="section-title-1"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span>Portfolio Gallery.</span>
                </motion.h2>
                <motion.p
                    className="gallery-subtitle-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    A curated selection of my visual work and creative photography.
                </motion.p>
            </div>

            <div className="gallery-container container">
                <div className="gallery-modern-grid">
                    {/* Left Sidebar Navigation */}
                    <div className="gallery-sidebar">
                        <div className="gallery-nav-buttons">
                            <button
                                className="gallery-nav-btn prev"
                                onClick={() => paginate(-1)}
                                aria-label="Previous"
                            >
                                <i className="ri-arrow-up-s-line"></i>
                            </button>
                            <div className="gallery-divider"></div>
                            <button
                                className="gallery-nav-btn next"
                                onClick={() => paginate(1)}
                                aria-label="Next"
                            >
                                <i className="ri-arrow-down-s-line"></i>
                            </button>
                        </div>

                        <div className="gallery-progress-container">
                            <div className="gallery-progress-track">
                                <motion.div
                                    className="gallery-progress-bar"
                                    animate={{
                                        '--progress': `${((currentIndex + 1) / galleryImages.length) * 100}%`
                                    } as any}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                />
                            </div>
                            <div className="gallery-index">
                                <span className="gallery-index-current">{String(currentIndex + 1).padStart(2, '0')}</span>
                                <span className="gallery-index-total">{String(galleryImages.length).padStart(2, '0')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Image View */}
                    <div className="gallery-main-view">
                        <div className="gallery-frame-modern">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                    className="gallery-image-wrapper"
                                >
                                    <img
                                        src={galleryImages[currentIndex].src}
                                        alt={galleryImages[currentIndex].label}
                                        className="gallery-img-modern"
                                    />
                                    <motion.div
                                        className="gallery-image-caption"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="caption-accent"></div>
                                        <h3>{galleryImages[currentIndex].label}</h3>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Decorative Elements */}
                            <div className="gallery-frame-border top-left"></div>
                            <div className="gallery-frame-border bottom-right"></div>

                            {/* Glass background for depth */}
                            <div className="gallery-glass-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
