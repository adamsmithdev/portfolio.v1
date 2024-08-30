'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 p-3 bg-accent/80 text-white/80 rounded-xl shadow-lg hover:bg-accent/60 transition duration-300 z-50"
            >
                <FaArrowUp size={24} />
            </button>
        )
    );
}
