/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    important: true,
    prefix: "",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Ubuntu", "sans-serif"],
            },
        },
    }
};
