import { extendTheme } from '@chakra-ui/react';

const ChakraTheme = extendTheme({
  fonts: {
    heading: 'Raleway',
    body: 'Catamaran',
  },
  colors: {
    base: {
      primary: '#129820',
      text: '#252733',
      background: '#F9F8F8',
      grey: '#9FA2B4',
      black: '#363740',
    },
  },
});

export default ChakraTheme;
