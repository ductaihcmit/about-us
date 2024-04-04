/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts,html}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                "color-main": {
                    light: "#f9f9f9",
                    dark: "#b9b9b9"
                },
                "color-gray": {
                    light: "#f1f1f1",
                    dark: "#b1b1b1"
                },
                "color-icon": {
                    light: "#eda358",
                    dark: "#b26313"
                },
                "color-secondary": {
                    light: "#030400",
                    dark: "#ffffff"
                },
            }
        },
    },
    plugins: [],
}