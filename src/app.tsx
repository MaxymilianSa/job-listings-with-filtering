import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/globalStyles';
import { theme } from './theme/theme';
import { JobList } from './components/job-list/job-list';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <JobList />
  </ThemeProvider>
);

export default App;
