import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '960px',
                xl: '1200px',
            },
        },
        extend: {
            fontFamily: {
                primary: ['var(--font-jetbrainsMono)'],
            },
            colors: {
                primary: '#222831',
                secondary: '#31363F',
                secondaryHover: '#282c34',
                accent: {
                    DEFAULT: '#76ABAE',
                    hoverDark: '#608F91',
                    hoverLight: '#8ABFC2',
                },
            },
        },
    },
    plugins: [],
};
export default config;
