/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#060000",
        secoundary:"#EBCA7E"
        
      },
    },
  },
  plugins: [
    ['import', { libraryName: '@ant-design/icons', libraryDirectory: 'es', style: true }]
  ]
  
};
