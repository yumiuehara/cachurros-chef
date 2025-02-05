import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{html,ts,md,analog,ag}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0d1117'
      }
    },
  },
  plugins: [],
} satisfies Config;
