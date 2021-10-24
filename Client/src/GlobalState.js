import React, {createContext, useState} from 'react'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [search, setSearch] = useState('')
    const [admin, setAdmin] = useState('false')


    const state = {
        _search: [search, setSearch],
        _admin: [admin, setAdmin]
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}