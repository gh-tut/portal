import React, { useState } from 'react';
import EventListener from 'react-event-listener';
import Header from './Header';
import Body from './Body';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import InterWoff2 from '../fonts/Inter-SemiBold.woff2';
import styled from 'styled-components/macro';

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
      main: '#ee4578'
    },
    secondary: { main: '#fdf0f9' }
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
  };
  const handleClick = event => {
    setPageState(event);
  };
  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        css={`
          margin: -8px;
          display: ;flex;
          flex-direction: column;
          height: 100%;
          flex: 1;
          min-height: 100vh;
          background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
        `}
      >
        <EventListener target="window" onResize={handleResize} />
        <Header
          pageState={pageState}
          handleChange={handleChange}
          handleClick={handleClick}
          width={windowSize}
        />
        <Body pageState={pageState} width={windowSize} />
      </div>
    </ThemeProvider>
  );
}

export default App;
