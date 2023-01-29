import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/global-styles';
import { theme } from './theme';
import { JobList } from './components/job-list';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <JobList />
  </ThemeProvider>
);

export default App;
