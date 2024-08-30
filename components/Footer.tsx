export default function Footer() {
    return (
        <footer className=" text-white/60 pt-12 pb-6">
            Designed loosely in{' '}
            <a href="https://www.figma.com/" target="_blank" className="link">
                Figma
            </a>{' '}
            and developed by me using{' '}
            <a
                href="https://code.visualstudio.com"
                target="_blank"
                className="link"
            >
                Visual Studio Code
            </a>
            . Built with{' '}
            <a href="https://nextjs.org" target="_blank" className="link">
                Next.js
            </a>{' '}
            and{' '}
            <a href="https://tailwindcss.com" target="_blank" className="link">
                Tailwind CSS
            </a>
            , and deployed through{' '}
            <a href="https://vercel.com" target="_blank" className="link">
                Vercel
            </a>
            . All text is displayed in the{' '}
            <a
                href="https://www.jetbrains.com/lp/mono"
                target="_blank"
                className="link"
            >
                JetBrains Mono
            </a>{' '}
            typeface.
        </footer>
    );
}
