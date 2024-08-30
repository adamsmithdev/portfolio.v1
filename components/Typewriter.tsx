'use client';

import TypewriterComponent from 'typewriter-effect';

const titles = ['frontend engineer', 'backend engineer', 'fullstack engineer'];

export default function Typewriter() {
    return (
        <TypewriterComponent
            options={{
                strings: titles,
                autoStart: true,
                loop: true,
            }}
        />
    );
}
