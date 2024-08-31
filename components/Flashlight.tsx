'use client';

import { useState, useEffect } from 'react';

export default function Flashlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 w-full h-full bg-transparent"
            style={{
                backgroundImage: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.03) 150px, rgba(0, 0, 0, 0.001) 300px)`,
            }}
        />
    );
}
