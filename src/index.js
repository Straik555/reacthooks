import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider} from "styled-components";

import App from './components/App';
import theme from './_styles/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);

