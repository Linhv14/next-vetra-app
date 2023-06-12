/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        sidebar: '320px',
        notification: '420px',
        header: '100px',
        cart: '300px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'san-serif'],
      },
      colors: {
        primary: '#ff6e40',
        milk: '#f5f4fe',
        success: ' #05b171',
        warning: '#faae42',
        error: '#ea4444',
        'dark-primary': 'eb5c30',
        'light-primary': 'rgba(255, 110, 64, .15)',
        'normal-primary': 'rgba(255, 110, 64, .45)',
        'dark-success': '#049660',
        'dark-warning': '#d58b23',
        'dark-error': '#c73a3a',
        border: '#ced4da',
        'light-border': '#dee2e6',
        purple: '#9932e7',
        blue: '#25c2e3',
        dark: '#293134',
        light: '#ededed',
        white: '#fff',
        'light-gray': '#6c757d',
      },
    },
  },
  plugins: [],
}
