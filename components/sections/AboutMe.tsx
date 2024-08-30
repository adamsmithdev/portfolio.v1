// components
import Section from '@/components/Section';

export default function AboutMe() {
    return (
        <Section title="About Me" divider>
            <p className="text-white/80 pb-6">
                I&rsquo;m a fullstack JavaScript engineer specializing in
                building{' '}
                <a href="https://react.dev" target="_blank" className="link">
                    React
                </a>{' '}
                and{' '}
                <a href="https://nextjs.org" target="_blank" className="link">
                    Next.js
                </a>{' '}
                applications.
            </p>
            <p className="text-white/80 pb-2">
                Currently, I&rsquo;m working with{' '}
                <a
                    href="https://onsolve.com"
                    target="_blank"
                    className="link text-accent relative inline-block"
                >
                    OnSolve<span className="underline"></span>
                </a>{' '}
                to build beautiful and functional UIs for their mass
                notification platform.
            </p>
            <p className="text-white/80 pb-6">
                Although I&rsquo;m not looking for any new opportunities, my
                inbox is always open.
            </p>
        </Section>
    );
}
