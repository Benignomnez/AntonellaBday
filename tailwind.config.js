/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mermaid: ['Pacifico', 'cursive'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        sway: 'sway 8s ease-in-out infinite alternate',
        tailWiggle: 'tailWiggle 0.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(255, 110, 156, 0.5), 0 0 10px rgba(255, 110, 156, 0.5)'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(255, 110, 156, 0.8), 0 0 30px rgba(255, 110, 156, 0.8)'
          },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.8 },
        },
        sway: {
          '0%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(5deg)' },
        },
        tailWiggle: {
          '0%, 100%': { transform: 'rotateZ(0deg)' },
          '50%': { transform: 'rotateZ(15deg)' },
        },
      },
    },
  },
  plugins: [],
};