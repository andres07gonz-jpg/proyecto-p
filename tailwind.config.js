/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseSoft: "#FADADD",
        beigeSoft: "#FFF5E1",
        greenSoft: "#D8E2DC",
        coffee: "#6F4E37",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        script: ["Cormorant", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      // 👇 Aquí van tus animaciones personalizadas
      animation: {
        breathe: 'breathe 12s ease-in-out infinite',
        fadeSoft: 'fadeSoft 1.2s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        noteIn: 'noteIn 500ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        noteOut: 'noteOut 350ms ease-in forwards',
      },

      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)' },
        },
        fadeSoft: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        noteIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(12px) scale(0.96)',
            filter: 'blur(4px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0)',
          },
        },
        noteOut: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(10px) scale(0.97)',
            filter: 'blur(3px)',
          },
        },
      },
    },
  },
  plugins: [],
}
