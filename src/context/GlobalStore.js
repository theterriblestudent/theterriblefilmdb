import React from 'react';
import {ACTIONS} from './CONSTANTS';

const GlobalContext = React.createContext({});

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.SET_IS_PLAYER_OPEN:
            state = {...state, isPlayerOpen: action.payload};
            break;
    }
};

function AppContext({ children }) {
    const [state, dispatch] = React.useReducer(reducer, {});

    return <GlobalContext.Provider value={{state, dispatch}}>{children}</GlobalContext.Provider>
}

export default AppContext;
