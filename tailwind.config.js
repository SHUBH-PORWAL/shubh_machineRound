// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js.jsx.ts.tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      colors: {
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
        },
        blue: {
          100: "#dbeafe",
          800: "#1e40af",
        },
        red: {
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
      },
      borderRadius: {
        md: "0.375rem",
        lg: "0.5rem",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
