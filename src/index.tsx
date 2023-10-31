import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
