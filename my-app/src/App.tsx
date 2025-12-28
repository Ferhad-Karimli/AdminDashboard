import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ThemeProvider,} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import AppRoutes from './components/appRoutes/AppRoutes';
import { theme } from './settings/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
