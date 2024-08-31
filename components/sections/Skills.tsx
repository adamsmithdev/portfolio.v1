'use client';

import { Tooltip } from 'react-tooltip';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaSass,
} from 'react-icons/fa6';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// components
import Section from '@/components/Section';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Sass', icon: <FaSass /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
];

export default function Skills() {
    return (
        <Section title="Skills" divider>
            <ul className="pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.map(({ name, icon }, index) => (
                    <li key={index} className="flex flex-col items-center">
                        <div
                            data-tooltip-id={`skill-${index}`}
                            className="flex justify-center items-center text-6xl p-4 rounded-xl w-full h-[150px] lg:h-[100px]  bg-secondary hover:bg-secondary/60 hover:text-accent hover:transition-all duration-500"
                        >
                            {icon}
                        </div>
                        <Tooltip
                            id={`skill-${index}`}
                            place="top"
                            content={name}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
