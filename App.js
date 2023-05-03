

import { AuthProvider } from './src/hooks/AuthContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}


