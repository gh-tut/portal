import React, { useState } from 'react';
import EventListener from 'react-event-listener';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { Box, Container } from '@material-ui/core';
import Style from '../style/body.module.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { pink, teal } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import InterWoff2 from '../fonts/Inter-SemiBold.woff2';

const inter = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Inter'),
    local('Inter-SemiBold'),
    url(${InterWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500]
    },
    secondary: { main: teal.A400 }
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [inter]
      }
    }
  }
});

function App() {
  const [pageState, setPageState] = useState(0);
  const [windowSize, setWindowSize] = useState(window.parent.screen.width);
  const handleChange = (event, value) => {
    setPageState(value);
    console.log(pageState);
  };
  const handleClick = event => {
    setPageState(event);
    console.log(pageState);
  };
  const handleResize = () => {
    setWindowSize(window.innerWidth);
    console.log(windowSize);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <EventListener target="window" onResize={handleResize} />
        <Header
          pageState={pageState}
          handleChange={handleChange}
          handleClick={handleClick}
          width={windowSize}
        />
        <Box className={Style.body}>
          <Body pageState={pageState} width={windowSize} />
          <Footer width={windowSize} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
