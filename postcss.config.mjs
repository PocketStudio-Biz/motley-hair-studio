// Tailwind CSS requires the standard PostCSS setup with the Tailwind and
// Autoprefixer plugins. The previous configuration referenced
// `@tailwindcss/postcss`, which isn't a valid PostCSS plugin and causes the
// build to fail.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
