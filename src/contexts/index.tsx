import React from 'react';

// provider
import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
