import React, { createContext, useReducer } from 'react'

export const DataContext = createContext();

export const DataProvider = ({ initialState, reducer, children }) => {

    const [{ user, token, playlist }, dispatch] = useReducer(reducer, initialState)

    return (
    <DataContext.Provider value={[{ user, token, playlist }, dispatch]}>
        {children}
    </DataContext.Provider>
    )}

// export const useDataContextValue = () => useContext(DataContext)