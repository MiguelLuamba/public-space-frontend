import type { Config } from "tailwindcss";
import { COLORS as colors } from "./src/theme/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily:{
        inter: ['var(--font-inter)', 'Arial'],
        poppins: ['var(--font-poppins)', 'Arial'],
        anton: ['var(--font-anton)', 'Arial'],
      },
      boxShadow:{
        mars:"0px 0px 31px 20px #72262C",
        circle_explore:"0px 0px 100px 40px #9c3000",
        notFound:"0px 0px 30px 10px rgba(20, 0, 255, 0.33)",
        shape:"inset 0px 0px 16px -3px rgba(255, 255, 255, 0.25)",
        comment_card:"inset 0px 0px 4px 1px rgba(173, 173, 173, 0.25)",
      },
      backgroundImage:{
        bigAstronaut:"url(/bg/bigAstronaut.png)",
        logo:"linear-gradient(98.88deg, #91FDC1 22.08%, #6A4DFB 86.32%)",
        marsSecLinear:"linear-gradient(112.9deg, #4D0101 0%, #160000 100%)",
        marsSecLinear2:"linear-gradient(114.75deg, #4E0302 0%, #230000 96.89%)",
        marsSecLinear3:"linear-gradient(130.1deg, #4E0302 0%, #230000 32.88%)",
        pageNotFoundLinear:"linear-gradient(251.74deg, #060B1B 23.43%, #1D3581 100%)",
      },
      backgroundSize:{
        logoSize:"400% 400%"
      },
      keyframes:{
        logoBG:{
          "0%, 50%":{backgroundPosition:"0 50%"},
          "50%":{backgroundPosition:"100% 50%"},
          "0%, 70%":{backgroundPosition:"0 50%"}
        },
        earthGoToFirstSection:{
          "0%":{top:"50%",left:"0", width:"500px", transform:"translateY(-50%)"},
          "100%":{left:"50%", top:"128px",width:"800px"},
        },
        earthGoToSecondSection:{
          "100%":{top:"50%",left:"0", width:"500px", transform:"translateY(-50%)"}
        },
        apearMars:{
          "100%":{opacity:"1", transform:"translateY(80px)"}
        },
        diminute:{
          "100%":{width:"0"}
        },
        modalApear:{
          "100%":{transform:"translateY(10px)"},
        },
        burgerMenu:{
          "100%":{top:"100%"}
        },
        admin_card:{
          "0%":{
            opacity:"0",
            transform:"translateY(-40px)"
          },
          "100%":{
            opacity:"1",
            transform:"translateY(0)"
          }
        
        }
      },
      animation:{
        logo:"logoBG 3s infinite ease-in-out",
        diminute:"diminute 3.5s ease-in-out both",
        apearModal:"modalApear 300ms linear both",
        burgerMenu:"burgerMenu .2s linear both",
        apearMars:"apearMars 400ms ease-in-out both",
        goToFirstSection:"earthGoToFirstSection 400ms ease-in-out both",
        goToSecondSection:"earthGoToSecondSection 500ms ease-in-out both",
        admin_card:"admin_card 1s both"
      },
    },
  },
  plugins: [],
};
export default config;
