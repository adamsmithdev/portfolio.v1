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
    { id: 1, name: 'HTML5', icon: <FaHtml5 /> },
    { id: 2, name: 'CSS3', icon: <FaCss3 /> },
    { id: 3, name: 'JavaScript', icon: <FaJs /> },
    { id: 4, name: 'Sass', icon: <FaSass /> },
    { id: 5, name: 'React', icon: <FaReact /> },
    { id: 6, name: 'Next.js', icon: <SiNextdotjs /> },
    { id: 7, name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { id: 8, name: 'Node.js', icon: <FaNodeJs /> },
];

export default function Skills() {
    return (
        <Section title="Skills" divider>
            <ul className="pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.map(({ id, icon, name }) => (
                    <li key={id} className="flex flex-col items-center">
                        <div
                            data-tooltip-id={`skill-${id}`}
                            className="flex justify-center items-center text-6xl p-4 rounded-xl w-full h-[150px] lg:h-[100px]  bg-secondary hover:bg-secondary/60 hover:text-accent hover:transition-all duration-500"
                        >
                            {icon}
                        </div>
                        <Tooltip
                            id={`skill-${id}`}
                            place="top"
                            content={name}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
