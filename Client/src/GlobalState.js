import React, {createContext, useState} from 'react'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [search, setSearch] = useState('')

    const state = {
        _search: [search, setSearch]
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}