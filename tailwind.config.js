/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	container: {
    		center: 'true'
    	},
    	extend: {
    		backgroundImage: {
				'dashboard-bg': "url('/images/main_bg_img.png')",
    			'theme-gradient': 'var(--theme-gradient)',
    		},
    		colors: {
    			'main-bg-color': 'var(--main-bg-color)',
    			'border-color': 'var(--border-color)',
    			'second-bg-color': 'var(--second-bg-color)',
    			'secondary-color': 'var(--secondary-color)',
    			'primary-color': 'var(--primary-color)',
    			'deactive-color': 'var(--deactive-color)',
    			'active-color': 'var(--active-color)',
    			'offline-user-color': 'var(--offline-user-color)',
    			'light-primary-color': 'var(--light-primary-color)',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
				scrollbar: {
					track: 'var(--main-bg-color)',
					thumb: 'var(--border-color)',
				  },
    		},
    		fontFamily: {
    			'theme-font-family': 'var(--theme-font-family)'
    		},
    		spacing: {
    			'46px': '2.875rem',
    			'120px': '7.5rem',
    			'200px': '12.5rem',
    			'60px': '3.75rem'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			showForm: {
    				'0%, 49%': {
    					'opacity': '0',
    					'z-index': '1'
    				},
    				'50%, 100%': {
    					'opacity': '1',
    					'z-index': '5'
    				}
    			},
    			hideForm: {
    				'0%, 49%': {
    					'opacity': '5',
    					'z-index': '1'
    				},
    				'50%, 100%': {
    					'opacity': '0',
    					'z-index': '0'
    				}
    			}
    		},
    		animation: {
    			showForm: 'showForm',
    			hideForm: 'hideForm'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
	plugins: [require('tailwind-scrollbar')],
};