"use client";
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Journey from '@/components/Journey';
import Certificates from '@/components/Certificates';
import Footer from '@/components/Footer';
import ScrollUp from '@/components/ScrollUp';
import gsap from 'gsap';
import { Letter3DSwap } from '@/components/ui/letter-3d-swap';

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const q = gsap.utils.selector(containerRef.current);
        const tl = gsap.timeline();

        tl.from(q(".intro-char-wrapper"), {
            yPercent: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power2.out"
        })
            .to(q(".intro-curtain"), {
                yPercent: -100,
                duration: 1.2,
                ease: "power4.inOut",
                delay: 0.3
            })
            .from(".header", {
                yPercent: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                clearProps: "all"
            }, "-=0.4");
    }, []);

    const nameText = "YUVASHREE";

    return (
        <div ref={containerRef}>
            <div className="intro-curtain">
                <div className="intro-text">
                    <Letter3DSwap>
                        {nameText}
                    </Letter3DSwap>
                </div>
            </div>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Journey />
                <Gallery />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <Footer />
            <ScrollUp />
        </div>
    );
}
