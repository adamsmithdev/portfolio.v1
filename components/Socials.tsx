import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';

const socials = [
    {
        id: 1,
        icon: <FaLinkedinIn />,
        path: 'https://www.linkedin.com/in/adambarrettsmith',
    },
    {
        id: 2,
        icon: <FaGithub />,
        path: 'https://github.com/adamsmithdev',
    },
    {
        id: 3,
        icon: <FaXTwitter />,
        path: 'https://x.com/adamsmithdev',
    },
];

export default function Socials({
    linkStyles,
}: {
    readonly linkStyles: string;
}) {
    return (
        <>
            {socials.map(({ id, icon, path }) => (
                <a key={id} href={path} target="_blank" className={linkStyles}>
                    {icon}
                </a>
            ))}
        </>
    );
}
