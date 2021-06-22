import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// provider
import AppProvider from './contexts';

// routes
import Routes from './routes';

// styles
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
