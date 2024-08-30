import Image from 'next/image';
import Typewriter from '@/components/Typewriter';
import Socials from '@/components/Socials';

export default function Navigation() {
    return (
        <>
            {/* Profile Picture */}
            <div
                style={{ paddingBottom: '100%' }}
                className="relative w-full h-0 pb"
            >
                <Image
                    src="/assets/profile.png"
                    alt="Profile Picture"
                    fill
                    sizes="100%"
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {/* Overview Text */}
            <h1 className="h1 text-accent py-3">Adam Smith</h1>
            <div className="text-white/80 pb-6">
                <Typewriter />
            </div>

            {/* Socials */}
            <div className="flex justify-center w-full gap-3 pb-14 lg:absolute lg:bottom-0">
                <Socials linkStyles="p-3 bg-secondary text-white/80 hover:bg-secondary/60 hover:text-accent hover:transition-all duration-500" />
            </div>

            {/* Contact Buttons */}
            <div className="absolute bottom-0 flex w-full border-t border-white/20">
                <a
                    href="/assets/resume.pdf"
                    target="_blank"
                    className="py-1 w-full border-r border-white/20 bg-secondary text-accent hover:bg-secondary/60 hover:text-accent hover:transition-all duration-500"
                >
                    Resume
                </a>{' '}
                <a
                    href="mailto:adam@adamsmith.tech"
                    target="_blank"
                    className="py-1 w-full bg-secondary text-accent hover:bg-secondary/60 hover:text-accent hover:transition-all duration-500"
                >
                    Contact
                </a>
            </div>
        </>
    );
}
