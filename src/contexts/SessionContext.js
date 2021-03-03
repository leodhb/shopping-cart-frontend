import React, { createContext, useState, useEffect } from 'react';
import {loadSessionId} from '../helpers/localStorage';

export const SessionContext = createContext();

const SessionContextProvider = ({children}) => {
    const [sessionId, setSessionId] = useState('');

    useEffect(() => {
        loadSessionId('@sallve-app/ssessId').then(result => {setSessionId(result); console.log('SESSÃO: ', result)});
    }, []);

 return (
    <SessionContext.Provider value={{sessionId, setSessionId}}>
        {children}
    </SessionContext.Provider>
 )
}

export default SessionContextProvider;