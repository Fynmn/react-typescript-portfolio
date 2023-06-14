/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      // keyframes: {
      //   wave: {
      //     '0%': { transform: 'rotate(0.0deg)' },
      //     '10%': { transform: 'rotate(14deg)' },
      //     '20%': { transform: 'rotate(-8deg)' },
      //     '30%': { transform: 'rotate(14deg)' },
      //     '40%': { transform: 'rotate(-4deg)' },
      //     '50%': { transform: 'rotate(10.0deg)' },
      //     '60%': { transform: 'rotate(0.0deg)' },
      //     '100%': { transform: 'rotate(0.0deg)' },
      //   },
      // },
      // animation: {
      //   'waving-hand': 'wave 2s linear infinite',
      // },
      colors: {
        "primary-500": "#8d9ac6",
        "secondary-500": "#e8cfd5",
        "tertiary-500": "#eedad9",
        "accent-500": "#fcc200",
        "accent-100": "#bd9b16",
      },
      animation: {
        ping: "ping 2.8s cubic-bezier(0, 0, 0.5, 1) infinite",
        text_color_animation: "text-color-animation 2.5s linear infinite",
        grow: "grow 0.3s linear 1",
        rotate: "rotate 0.3s linear 1",
        grow_transition: "grow_transition 0.3s",
        rotate_transition: "rotate_transition 0.3s",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(3deg)" },
        },
        rotate_transition: {
          "0%": { transform: "initial" } /* Initial text color */,
          "100%": { transform: "inherit" } /* Transitioned text color */,
        },
        grow_transition: {
          "0%": { transform: "initial" } /* Initial text color */,
          "100%": { transform: "inherit" } /* Transitioned text color */,
        },
        text_color_animation: {
          "0%": { color: "#000000" },
          "100%": { color: "#000000" },
        },
        ping: {
          "0%": { color: "#ffffff", opacity: "80%" },
          "50%, 75%": {
            transform: "scale(1.2)",
            opacity: "30%",
            // color: "#434343",
          },
          "100%": {
            color: "#1e1e1e",
            opacity: "20%",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
