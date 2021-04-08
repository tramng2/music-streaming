import React, { createContext, useReducer } from 'react'

export const DataContext = createContext();

export const DataProvider = ({ initialState, reducer, children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
    <DataContext.Provider value={[state, dispatch]}>
        {children}
    </DataContext.Provider>
    )}

// export const useDataContextValue = () => useContext(DataContext)