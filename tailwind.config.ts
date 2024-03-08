import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                yellow: "#FFD970",
                green: "#1fdf64",
                black: "#000",
                "deep-night-black": "#121212",
                "midnight-black": "#181818",
                "evening-black": "#1a1a1a",
                "dark-gray": "#282828",
                "slate-gray": "#404040",
                "light-gray": "#959595",
                "silver-gray": "#B3B3B3",
                snow: "#ffffff",
            },
        },
    },
    plugins: [],
};
export default config;
