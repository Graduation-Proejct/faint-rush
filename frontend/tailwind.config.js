module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: "'Poppins', 'sans-serif'",
        mon: "'Montserrat', 'sans-serif'",
        new: "'Take Me One', 'sans-serif'",
        hel:"Helvetica",
      },
      colors: {
        prim: "#3CAA78",
        prim2:"#68B2A0",
        sec: "#205072",
        grdstart: "#7BE495",
        patienthome:"#E0ECDE",
        crazyblue:"#205072",
      },
      fontSize: {
        "1.5xl": "1.32rem",
      },
      screens: {
        "2xs": "389px",
      },
    },
  },
  plugins: [],
};