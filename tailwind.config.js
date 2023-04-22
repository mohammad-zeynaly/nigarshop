/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      iranSansRegular : ["iranSans-Regular"],
      iranSansMedium : ["iranSans-Medium"],
      iranSansDemiBold : ["iranSans-DemiBold"],
      iranSansBold : ["iranSans-Bold"],
      iranSansBlack : ["iranSans-Black"],
    },
    extend: {
      colors: {
        primary: "#651FFF",
      },
    },

  },
  plugins: [],
}

