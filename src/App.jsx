import React, { useEffect, useState } from 'react';
import './App.css';
import Home from  './pages/home';
import SessionContext from './contexts/SessionContext';
import {loadSessionId} from './helpers/localStorage';

const App = () => {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    loadSessionId('@sallve-app/ssessId').then(result => setSessionId(result));
  }, []);

  return (
      <Home sessionId={sessionId}/>
  );
}

export default App;
