import { createTheme, useMediaQuery } from '@mui/material';
import { FC } from 'react';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 730,
      md: 900,
      lg: 1100,
      xl: 1536,
    },
  },
});

// const useDetachScreen = (screen: 'desktop' | 'tablet' | 'mobile') => {
//   switch(screen) {
//     case 'desktop':
//       return useMediaQuery(theme.breakpoints.up('xl'));
//     case 'tablet':
//       return useMediaQuery(theme.breakpoints.down('lg'));
//     case 'mobile':
//       return useMediaQuery(theme.breakpoints.down('sm'));
//     default:
//       return useMediaQuery(theme.breakpoints.up('xl'));

//   } 
// };

enum EScreen {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  MOBILE = 'mobile'
}

export type TScreen = {
  screen?: EScreen
}

// const detachScreen = () => {
//   switch(true) {
//     case useMediaQuery(theme.breakpoints.up('lg')):
//       return EScreen.DESKTOP;
//     case useMediaQuery(theme.breakpoints.down('lg')):
//       return EScreen.TABLET;
//     case useMediaQuery(theme.breakpoints.up('sm')) && useMediaQuery(theme.breakpoints.down('sm')):
//       return EScreen.MOBILE;
//     default:
//       return EScreen.DESKTOP;
//   }
// };

// eslint-disable-next-line react/display-name
const withDetachScreen = (Component: FC<any> ) => (props: any) => {

  const screen = () => {
    switch(true) {
      // case useMediaQuery(theme.breakpoints.up('lg')):
      //   return EScreen.DESKTOP;
      case useMediaQuery(theme.breakpoints.down('lg')):
        return EScreen.TABLET;
      case useMediaQuery(theme.breakpoints.down('sm')):
        return EScreen.MOBILE;
      default:
        return EScreen.DESKTOP;
    }
  };

  return <Component screen={screen()} {...props} />;
  
};

export default withDetachScreen;
