import Image from 'next/image';
import Link from 'next/link';
import { FaLink, FaGithub } from 'react-icons/fa6';

// components
import Section from '@/components/Section';

const projects = [
    {
        title: 'Portfolio',
        liveUrl: 'https://adamsmith.tech',
        repoUrl: 'https://github.com/adamsmithdev/portfolio.v1',
        screenshot: '/assets/screenshots/portfolio-preview.png',
    },
    {
        title: 'Void Script',
        liveUrl: 'https://voidscript.tech',
        repoUrl: 'https://github.com/adamsmithdev/void-script-theme',
        screenshot: '/assets/screenshots/voidscript-preview.png',
    },
];

export default function Portfolio() {
    return (
        <Section title="Portfolio" divider>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map(({ title, liveUrl, repoUrl, screenshot }, index) => (
                    <li
                        key={index}
                        className="relative group aspect-[16/9] rounded-2xl overflow-hidden shadow-lg focus:outline-none focus-within:outline-none text-accent"
                    >
                        <Image
                            src={screenshot}
                            alt={title}
                            fill
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />

                        {/* Hidden content that shows on hover/focus */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                            <h3 className="text-2xl font-semibold text-accent">{title}</h3>
                            <div className="flex gap-4 items-center mt-4">
                                {liveUrl && (
                                    <Link
                                        href={liveUrl}
                                        target="_blank"
                                        className="hover:text-accent"
                                    >
                                        <FaLink className="w-7 h-7" />
                                    </Link>
                                )}
                                {repoUrl && (
                                    <Link
                                        href={repoUrl}
                                        target="_blank"
                                        className="hover:text-accent"
                                    >
                                        <FaGithub className="w-7 h-7" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
