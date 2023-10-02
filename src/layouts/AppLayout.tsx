import { Box, ThemeProvider, createTheme } from '@mui/material';
import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { COLOR_PRIMARY } from '../assets/color';
import Header from '../components/template/Header';
import Countdown from 'react-countdown';
import moment from 'moment';
import Footer from '../components/template/Footer';


type Props = { };
type State = { };

class AppLayout extends Component<Props, State> {

  protected theme;
  

  constructor(props: Props) {
    super(props);
    this.theme = createTheme({
      
      palette: {
        primary: {
          main: COLOR_PRIMARY
        }
      },
      typography: {
        fontFamily: 'Work Sans,sans-serif',
        fontWeightBold: 'bolder',
        h1: {
          fontWeight: 700
        },
        h2: {
          fontSize: '35px',
          fontWeight: 700,
        },
        h3: {
          fontSize: '24px',
          fontWeight: 700,
        },
        subtitle1: {
          fontWeight: 600
        }
      }
    });
  }

  render() {
    return(
      <ThemeProvider theme={this.theme}>
        <Header/>
        <Countdown  
        date={ new Date(moment().add(23, 'day').valueOf())}
          renderer={({days ,hours, minutes, seconds, completed }) => {
            if (completed) {
              return 'Finished';
            } else {
              return (
                <Box 
                  // width={'100%'}
                  position={'sticky'} 
                  zIndex={1000} 
                  color={'white'} 
                  fontWeight={600} 
                  p={1} 
                  bgcolor={COLOR_PRIMARY} 
                  display={'flex'} 
                  justifyContent={'center'} 
                  gap={1}>
                    Next exchange listing in {days}d {hours}h {minutes}m {seconds}s
                </Box>
              );
            }
          }}
        />
        <Outlet/>
        <Footer/>
      </ThemeProvider>
    );
  }
}

export default AppLayout;