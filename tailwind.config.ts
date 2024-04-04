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
                // Bg
                "bg-main": {
                    light: "#FFF",
                    dark: "#313131",
                },
                "bg-placeholder": {
                    light: "#ECECEC",
                    dark: "#424242",
                },
                "bg-green": {
                    light: "#F5FBF8",
                    dark: "#105343",
                },
                "bg-yellow": {
                    light: "#FFF8D2",
                    dark: "#723B13",
                },
                "bg-blue": {
                    light: "#F3F6FF",
                    dark: "#112F8A",
                },
                "bg-red": {
                    light: "#FDF4F4",
                    dark: "#6A0909",
                },
                "bg-disabled": {
                    light: "#F3F3F3",
                    dark: "#5D5D5D",
                },
            }
        },
    },
    plugins: [],
}