module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#2A2928',
        'off-white': '#F5F4F4',
        ritsumei: '#B61F38',
        twitter: '#1DA1F2',
      },
    },
  },
  variants: {},
  plugins: [],
};
