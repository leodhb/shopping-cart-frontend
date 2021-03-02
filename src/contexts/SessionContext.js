import React, { createContext } from 'react';

const SessionContext = createContext({
    sessionId: false,
    setSessionId: () => {}
});

export default SessionContext;