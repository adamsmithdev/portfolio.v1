import Navigation from '@/components/Navigation';
import AboutMe from '@/components/sections/AboutMe';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/Footer';
import ClientMessage from '@/components/ClientMessage';

export default function Home() {
    return (
        <main className="container mx-auto h-full">
            <ClientMessage />
            <div className="flex flex-col w-full gap-6 lg:flex-row">
                {/* Navigation */}
                <div className="relative shadow-2xl w-full text-center lg:h-screen lg:max-w-sm lg:sticky lg:top-0 lg:z-50">
                    <Navigation />
                </div>
                {/* Sections */}
                <div className="px-8">
                    <AboutMe />
                    <Skills />
                    <Experience />

                    <Footer />
                </div>
            </div>
        </main>
    );
}
