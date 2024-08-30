import { TbSeparator } from 'react-icons/tb';

export default function Section({
    title,
    divider,
    children,
}: Readonly<{
    title: string;
    divider?: boolean;
    children: React.ReactNode;
}>) {
    return (
        <section
            className={`pt-12 pb-6 ${
                divider ? 'border-b border-b-white/10' : ''
            }`}
        >
            <h2 className="h1 text-accent">{title}</h2>
            <TbSeparator size={40} className="text-white/60" />
            {children}
        </section>
    );
}
