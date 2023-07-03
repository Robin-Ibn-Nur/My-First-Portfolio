// Import necessary dependencies
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  // Specify the files to scan for classes
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  // Customize the Tailwind CSS theme
  theme: {
    extend: {
    },
  },

  // Include any additional Tailwind CSS plugins
  plugins: [],
});
