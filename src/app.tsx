import React from 'react';
import { ThemeProvider } from 'styled-components';

import { JobList } from './components/job-list/job-list';
import GlobalStyle from './theme/globalStyles';
import { theme } from './theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <JobList />
  </ThemeProvider>
);

export default App;
