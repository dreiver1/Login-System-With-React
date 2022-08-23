import './App.css';
import Routers from './Routes';

import { AuthProvider } from './contexts/Auth';

function App() {
  return (
      <AuthProvider>
        <Routers />
      </AuthProvider>
  );
}

export default App;
