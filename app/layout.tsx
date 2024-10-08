import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// components
import BackToTop from '@/components/BackToTop';

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
    title: 'Adam Smith | Portfolio',
    description: 'Adam Smith is a frontend engineer based in Atlanta, GA.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={jetbrainsMono.variable}>
                <BackToTop />
                {children}
            </body>
        </html>
    );
}
