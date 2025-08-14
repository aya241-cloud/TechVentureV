/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      width: ['responsive'],
      animationDelay: {
        '100': '100ms',
        '300': '300ms',
        '600': '600ms',
        '900': '900ms',
      },
    screens: {
      'mobile': '319px',
      'xsm': {'max': '600px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
      colors: {
        dark: '#103741', 
        primary: '#1852d9',
        'primary-dark': '#1241b3',
        'custom-blue': '#1852d9',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      fontFamily: {
      heebo: ['Heebo Variable', 'sans-serif'],
      'font-awesome': ['"Font Awesome 5 Free"'],
      'comic': ['"Comic Sans MS"', 'cursive', 'sans-serif'],
    },
    fontSize: {
        //Custom font sizes
        '10': ['30px', '38px'],
        '4.5': ['40px', '44px'],
      },
      borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '11':'11x',
      '12':'12px',
      '13':'13px',
      '14':'14px',
      '15': '15px',

    },
    animation: {
        // Basic animations
        bounce: 'bounce 1s infinite',
        flash: 'flash 1s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        rubberBand: 'rubberBand 1s',
        shake: 'shake 1s',
        headShake: 'headShake 1s ease-in-out',
        swing: 'swing 1s',
        tada: 'tada 1s',
        wobble: 'wobble 1s',
        jello: 'jello 1s',
        
        // Bounce animations
        bounceIn: 'bounceIn 0.75s',
        bounceInDown: 'bounceInDown 1s',
        bounceInLeft: 'bounceInLeft 1s',
        bounceInRight: 'bounceInRight 1s',
        bounceInUp: 'bounceInUp 1s',
        bounceOut: 'bounceOut 0.75s',
        bounceOutDown: 'bounceOutDown 1s',
        bounceOutLeft: 'bounceOutLeft 1s',
        bounceOutRight: 'bounceOutRight 1s',
        bounceOutUp: 'bounceOutUp 1s',
        
        // Fade animations
        fadeIn: 'fadeIn 1s',
        fadeInDown: 'fadeInDown 1s',
        fadeInDownBig: 'fadeInDownBig 1s',
        fadeInLeft: 'fadeInLeft 1s',
        fadeInLeftBig: 'fadeInLeftBig 1s',
        fadeInRight: 'fadeInRight 1s',
        fadeInRightBig: 'fadeInRightBig 1s',
        fadeInUp: 'fadeInUp 1s',
        fadeInUpBig: 'fadeInUpBig 1s',
        fadeOut: 'fadeOut 1s',
        fadeOutDown: 'fadeOutDown 1s',
        fadeOutDownBig: 'fadeOutDownBig 1s',
        fadeOutLeft: 'fadeOutLeft 1s',
        fadeOutLeftBig: 'fadeOutLeftBig 1s',
        fadeOutRight: 'fadeOutRight 1s',
        fadeOutRightBig: 'fadeOutRightBig 1s',
        fadeOutUp: 'fadeOutUp 1s',
        fadeOutUpBig: 'fadeOutUpBig 1s',
        
        // Flip animations
        flip: 'flip 1s',
        flipInX: 'flipInX 1s',
        flipInY: 'flipInY 1s',
        flipOutX: 'flipOutX 0.75s',
        flipOutY: 'flipOutY 0.75s',
        
        // LightSpeed animations
        lightSpeedIn: 'lightSpeedIn 1s ease-out',
        lightSpeedOut: 'lightSpeedOut 1s ease-in',
        
        // Rotate animations
        rotateIn: 'rotateIn 1s',
        rotateInDownLeft: 'rotateInDownLeft 1s',
        rotateInDownRight: 'rotateInDownRight 1s',
        rotateInUpLeft: 'rotateInUpLeft 1s',
        rotateInUpRight: 'rotateInUpRight 1s',
        rotateOut: 'rotateOut 1s',
        rotateOutDownLeft: 'rotateOutDownLeft 1s',
        rotateOutDownRight: 'rotateOutDownRight 1s',
        rotateOutUpLeft: 'rotateOutUpLeft 1s',
        rotateOutUpRight: 'rotateOutUpRight 1s',
        
        // Special animations
        hinge: 'hinge 2s',
        jackInTheBox: 'jackInTheBox 1s',
        rollIn: 'rollIn 1s',
        rollOut: 'rollOut 1s',
        
        // Zoom animations
        zoomIn: 'zoomIn 1s',
        zoomInDown: 'zoomInDown 1s',
        zoomInLeft: 'zoomInLeft 1s',
        zoomInRight: 'zoomInRight 1s',
        zoomInUp: 'zoomInUp 1s',
        zoomOut: 'zoomOut 1s',
        zoomOutDown: 'zoomOutDown 1s',
        zoomOutLeft: 'zoomOutLeft 1s',
        zoomOutRight: 'zoomOutRight 1s',
        zoomOutUp: 'zoomOutUp 1s',
        
        // Slide animations
        slideInDown: 'slideInDown 1s',
        slideInLeft: 'slideInLeft 1s',
        slideInRight: 'slideInRight 1s',
        slideInUp: 'slideInUp 1s',
        slideOutDown: 'slideOutDown 1s',
        slideOutLeft: 'slideOutLeft 1s',
        slideOutRight: 'slideOutRight 1s',
        slideOutUp: 'slideOutUp 1s',
      },
      keyframes: {
        // Keyframes for all animations would go here
        bounce: {
          'from, 20%, 53%, 80%, to': { 
            transform: 'translate3d(0,0,0)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
          },
          '40%, 43%': { 
            transform: 'translate3d(0, -30px, 0)',
            animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)'
          },
          '70%': { 
            transform: 'translate3d(0, -15px, 0)',
            animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)'
          },
          '90%': { transform: 'translate3d(0,-4px,0)' }
        },
        flash: {
          'from, 50%, to': { opacity: '1' },
          '25%, 75%': { opacity: '0' }
        },
        pulse: {
          'from': { transform: 'scale3d(1, 1, 1)' },
          '50%': { transform: 'scale3d(1.05, 1.05, 1.05)' },
          'to': { transform: 'scale3d(1, 1, 1)' }
        },
      },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
    },}
    
    
  },
  plugins: [],
}
}
