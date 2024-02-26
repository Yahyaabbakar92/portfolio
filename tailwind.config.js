const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}'
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans]
            },
            colors: {
                textColor: '#333333',
                textColorDark: '#CCCCCC',
                backgroundColor: '#EDF1F2',
                backgroundColorDark: '#0D1112',
                primaryColor: '#28AF60',
                primaryColorDark: '#50D789',
                secondaryColor: '#354A5F',
                secondaryColorDark: '#A0B5CA',
                accentColor: '#FEE716',
                accentColorDark: '#E9D201'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
}
