"use client";
import React, { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ShinyButton } from '@/components/ui/shiny-button';
import { toast } from 'sonner';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        const formData = new FormData(form.current);
        const payload = {
            name:    formData.get('user_name')    as string,
            email:   formData.get('user_email')   as string,
            subject: formData.get('user_subject') as string,
            message: formData.get('user_message') as string,
        };

        setIsSending(true);

        try {
            const res = await fetch('/api/contact', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(payload),
            });

            if (res.ok) {
                toast.success('Message sent!', {
                    description: "I'll get back to you as soon as possible.",
                    duration:    5000,
                });
                form.current.reset();
            } else {
                const data = await res.json();
                toast.error('Failed to send message', {
                    description: data?.error ?? 'Please try again later.',
                    duration:    5000,
                });
            }
        } catch {
            toast.error('Network error', {
                description: 'Could not reach the server. Check your connection.',
                duration:    5000,
            });
        } finally {
            setIsSending(false);
        }
    };

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

    const slideInLeft: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    const slideInRight: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: { 
            opacity: 1, 
            x: 0,
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
        <section className="contact section" id="contact" style={{ overflow: "hidden" }}>
            <motion.div 
                className="contact-container container grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div 
                    className="contact-data"
                    variants={slideInLeft}
                    style={{ willChange: "transform, opacity" }}
                >
                    <h2 className="section-title-2">Contact Me.</h2>
                    <p className="contact-description-1">
                        I will read all emails. Send me any message you want and I&apos;ll get back to you.
                    </p>
                    <p className="contact-description-2">
                        I need your <b>Name</b> and <b>Email Address</b> to respond to your inquiry and send you a confirmation.
                    </p>
                    <div className="geometric-box"></div>
                </motion.div>

                <motion.div 
                    className="contact-mail"
                    variants={slideInRight}
                    style={{ willChange: "transform, opacity" }}
                >
                    <h2 className="contact-title">Send Me A Message</h2>

                    <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact-form">
                        <div className="contact-group">
                            <div className="contact-box">
                                <input type="text" name="user_name" className="contact-input" id="name" placeholder="First Name" required />
                                <label htmlFor="name" className="contact-label">First Name</label>
                            </div>

                            <div className="contact-box">
                                <input type="email" name="user_email" className="contact-input" id="email" placeholder="Email Address" required />
                                <label htmlFor="email" className="contact-label">Email Address</label>
                            </div>
                        </div>

                        <div className="contact-box">
                            <input type="text" name="user_subject" className="contact-input" id="subject" placeholder="Subject" required />
                            <label htmlFor="subject" className="contact-label">Subject</label>
                        </div>

                        <div className="contact-box contact-area">
                            <textarea name="user_message" id="message" className="contact-input" placeholder="Message" required></textarea>
                            <label htmlFor="message" className="contact-label">Message</label>
                        </div>

                        <ShinyButton 
                            type="submit" 
                            className="contact-button button"
                            disabled={isSending}
                        >
                            {isSending ? 'Sending…' : 'Send Message'}
                        </ShinyButton>
                    </form>
                </motion.div>

                <motion.div 
                    className="contact-social"
                    variants={fadeInMask}
                    style={{ willChange: "transform, opacity" }}
                >
                    <img src="/img/curved-arrow.svg" alt="" className="contact-social-arrow" />
                    <div className="contact-social-data">
                        <div>
                            <p className="contact-social-description-1">Direct message</p>
                            <p className="contact-social-description-2">Or write me on my social networks</p>
                        </div>

                        <div className="contact-social-links">
                            <a href="https://www.facebook.com/profile.php?id=100017484733852" target="_blank" className="contact-social-link">
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                            <a href="https://www.instagram.com/yuvashree_maniarasu" target="_blank" className="contact-social-link">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yuva-shree-maniarasu-profile" target="_blank" className="contact-social-link">
                                <i className="bx bxl-linkedin-square"></i>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
