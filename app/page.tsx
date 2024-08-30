import Image from 'next/image';

// components
import Typewriter from '@/components/Typewriter';
import Socials from '@/components/Socials';

export default function Home() {
    return (
        <main className="container mx-auto h-full flex flex-col w-full max-w-[500px] max-auto gap-6 lg:flex-row lg:mx-20 xl:mx-64">
            <div className="shadow-2xl h-[700px] lg:h-screen w-full text-center relative">
                {/* Profile Picture */}
                <div
                    style={{ paddingBottom: '100%' }}
                    className="relative w-full h-0 pb"
                >
                    <Image
                        src="/assets/profile.png"
                        alt="Profile Picture"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Overview Text */}
                <h1 className="h1 text-accent py-3">Adam Smith</h1>
                <div className="text-white/80">
                    <Typewriter />
                </div>

                {/* Socials */}
                <div className="absolute bottom-0 flex justify-center w-full gap-3 pb-14">
                    <Socials linkStyles="p-3 bg-secondary text-white/80 hover:bg-secondaryHover hover:text-accent-hoverLight hover:transition-all duration-500" />
                </div>

                {/* Download CV */}
                <div className="absolute bottom-0 flex w-full">
                    <a
                        href="/assets/resume.pdf"
                        target="_blank"
                        className="py-1 w-full bg-secondary text-accent hover:bg-secondaryHover hover:text-accent-hoverLight hover:transition-all duration-500"
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <div>Sections</div>
        </main>
    );
}
