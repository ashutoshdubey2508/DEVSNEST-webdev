import './App.css';
import { createContext, useState } from 'react';
import { Routing, Linking } from './Routing';

const LoginContext = createContext();

function App() {


  const [login, setLogin] = useState(false);
  const authenticate = { login, set: () => { setLogin(!login) } };


  return (
    <div className="App">


      <nav className="navbar navbar-dark bg-dark">
        <Linking />
      </nav>

      <LoginContext.Provider value={authenticate}>
        <Routing />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
export { LoginContext };