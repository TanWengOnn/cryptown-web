import { ActionTypes } from '@mui/base';
import { createContext, useReducer } from 'react';

export const AuthContext = createContext()
export const auathReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT': 
            return { user: null }
        default:
            return state
    
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(auathReducer, {
        user: null
    })


    console.log('AuthContext state: ', state)

    return(
        <AuthContext.Provider value = {{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
  )
}