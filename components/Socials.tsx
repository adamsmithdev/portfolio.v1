import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';

const socials = [
    {
        icon: <FaLinkedinIn />,
        path: 'https://www.linkedin.com/in/adambarrettsmith',
    },
    {
        icon: <FaGithub />,
        path: 'https://github.com/adamsmithdev',
    },
    {
        icon: <FaXTwitter />,
        path: 'https://x.com/adamsmithdev',
    },
];

export default function Socials({
    linkStyles,
}: Readonly<{
    linkStyles: string;
}>) {
    return (
        <>
            {socials.map(({ icon, path }, index) => (
                <a
                    key={index}
                    href={path}
                    target="_blank"
                    className={linkStyles}
                >
                    {icon}
                </a>
            ))}
        </>
    );
}
