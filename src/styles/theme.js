import { extendTheme } from 'native-base';
import { normalize } from '../services/util';

export const THEME = extendTheme({
  colors: {
    primary: {
      100: '#0060C3',
      200: '#0052BE',
      300: '#0081CA'
    },
    secondary: {
      100: '#5910B3',
      200: '#BD46F0',
      300: '#761FC4'
    },
    white: '#FFFFFF'
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      }
    }
  },
  fontSizes: {
    xs: normalize(10),
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});