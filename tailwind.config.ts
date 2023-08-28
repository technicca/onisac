import { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monogram: ["monogram"]
      },
      colors: {
        'bg': '#EDEBE9',
        'primary': '#373948',
        'b-secondary': '#B9AAAA',
        'secondary': '#AFAEA9',
        'shadow': '#D4D2C9',
        'modal': 'rgba(212, 210, 201, 0.59)',
        'value':  '#6D5C5C'
      },
      boxShadow: {
        'card-border': '0 0 0 6px #e8d568',
        'modal-border': '0 0 0 4px #393847',
      },
      animation: {
        getCard: 'getCard 0.5s ease-in-out',
        getAlert: 'getAlert 1s ease-in-out forwards',
        getAlertWinner: 'getAlertWinner 0.6s ease-in-out forwards',
        actionLoader: 'actionLoader 6s cubic-bezier(0.3, 0.27, 0.51, 0.54) forwards'
      },
      keyframes: {
        getCard: {
          '50%, 0%': { transform: 'translateY(-100px)', opacity: '0',  },
          '100%': {
            transform: 'translateY(0px) rotate(-2deg)'
          }
        },
        getAlert: {
          '100%': { transform: 'translateY(0)', opacity: '0',  },
          '50%': { transform: 'translateY(-60px)', opacity: '1',  },
          '0%': { transform: 'translateY(0px)', opacity: '0', }
        },

        getAlertWinner: {
          '100%': { transform: 'translateY(-60px)', opacity: '1',  },
          '0%': { transform: 'translateY(0px)', opacity: '0', }
        },
        actionLoader: {
          '0%': {width: '100%'},
          '100%': { width: '0'}
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
