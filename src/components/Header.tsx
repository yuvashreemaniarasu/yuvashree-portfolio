"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShinyButton } from '@/components/ui/shiny-button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        // Theme initialization
        const selectedTheme = localStorage.getItem('selected-theme');
        if (selectedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            setIsDarkTheme(true);
        }

        const handleScroll = () => {
            // Shadow header
            if (window.scrollY >= 50) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }

            // Active links
            const sections = document.querySelectorAll('section[id]');
            const scrollDown = window.scrollY;

            sections.forEach(current => {
                const sectionHeight = (current as HTMLElement).offsetHeight,
                    sectionTop = (current as HTMLElement).offsetTop - 58,
                    sectionId = current.getAttribute('id'),
                    sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

                if (sectionsClass) {
                    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                        sectionsClass.classList.add('active-link');
                    } else {
                        sectionsClass.classList.remove('active-link');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDarkTheme) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('selected-theme', 'light');
            setIsDarkTheme(false);
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('selected-theme', 'dark');
            setIsDarkTheme(true);
        }
    };

    return (
        <header className={`header ${hasShadow ? 'shadow-header' : ''}`} id="header">
            <nav className="nav container">
                <Link href="#" className="nav-logo">
                    <span className="nav-logo-circle">Y</span>
                    <span className="nav-logo-name">Yuvashree.</span>
                </Link>

                <div className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                    <span className="nav-title">Menu</span>
                    <h3 className="nav-name">Yuvashree</h3>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="/resume/resume.pdf"
                                download="resume.pdf"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <ShinyButton className="nav-link nav-link-button">Resume</ShinyButton>
                            </a>
                        </li>
                    </ul>

                    {/* Close Button */}
                    <div className="nav-close" id="nav-close" onClick={() => setIsMenuOpen(false)}>
                        <i className="bx bx-x"></i>
                    </div>
                </div>

                {/* Buttons */}
                <div className="nav-buttons">
                    {/* Theme Button */}
                    <i className={`bx ${isDarkTheme ? 'bx-sun' : 'bx-moon'} change-theme`} id="theme-button" onClick={toggleTheme}></i>
                    {/* Toggle button */}
                    <div className="nav-toggle" id="nav-toggle" onClick={() => setIsMenuOpen(true)}>
                        <i className="ri-menu-4-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
