import { extendTheme } from 'native-base';
import metrics from './metrics';
import fonts from './fonts';
export const theme = extendTheme({
  fontConfig: {
    ...fonts.fontConfig,
  },
  sizes: {
    ...metrics,
  },
  space: {
    ...metrics,
  },
  config: {
    initialColorMode: 'light',
  },

  fonts: {
    roboto: 'Roboto',
    poppins: 'Poppins',
  },
});
