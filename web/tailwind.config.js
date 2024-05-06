/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{html,vue,js,ts}",
        "./layouts/**/*.{html,vue,js,ts}",
        "./pages/**/*.{html,vue,js,ts}",
        "./entities/**/*.{html,vue,js,ts}",
        "./features/**/*.{html,vue,js,ts}",
        "./widgets/**/*.{html,vue,js,ts}"
    ],
    theme: {
        screens: {
            xs: '375px',
            sm: '431px',
            md: '768px',
            lg: '1024px',
            tb: '1280px',
            lp: '1366px',
            xl: '1440px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'fp-brand-black': '#121213',
            'fp-brand-surface': '#222428',
            'fp-brand-secondary': '#BDBFC2',
            'fp-brand-white': '#FFFFFF',
            'fp-brand-primary': '#009CF3',
            'fp-brand-primary-hover': '#009CF390',
            'fp-brand-primary-active': '#009CF380',
        },
        extend: {
            fontSize: {
                'fp-14': '14px',
                'fp-16': '16px',
                'fp-20': '20px',
                'fp-24': '24px',
                'fp-32': '32px',
                'fp-36': '36px',
                'fp-40': '40px',
                'fp-64': '64px',
                'fp-80': '80px',
                'fp-100': '100px',
            },
        },
    },
    plugins: [],
}